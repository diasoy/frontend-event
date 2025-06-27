import { ToasterContext } from "@/contexts/ToasterContext";
import orderServices from "@/services/order.service";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useContext } from "react";

const usePayment = () => {
  const router = useRouter();
  const { setToaster } = useContext(ToasterContext);
  const { order_id, status } = router.query;

  const standardizeStatus = (status: string) => {
    switch (status) {
      case "success":
      case "settlement":
        return "completed";
      case "pending":
      case "progress":
        return "pending";
      case "failed":
      case "deny":
      case "expire":
      case "cancel":
        return "cancelled";
      default:
        return status;
    }
  };

  const updateOrderStatus = async () => {
    if (!order_id || !status) {
      throw new Error("Missing order ID or status");
    }

    const standardizedStatus = standardizeStatus(`${status}`);

    // Only allow completing orders through the client-side callback
    // Other status changes should be handled via webhook or admin panel
    if (standardizedStatus === "completed") {
      const result = await orderServices.updateOrderStatus(
        `${order_id}`,
        standardizedStatus,
      );
      return result;
    } else {
      // For non-success statuses, we just return without calling the API
      // as these should be handled via webhooks or admin actions
      return { message: "Status noted, no API call needed" };
    }
  };

  const {
    mutate: mutateUpdateOrderStatus,
    isError,
    error,
  } = useMutation({
    mutationFn: updateOrderStatus,
    onError: (error) => {
      console.error("Failed to update order status:", error);
      setToaster({
        type: "error",
        message: "Failed to update payment status. Please contact support.",
      });
    },
    onSuccess: (result) => {
      const standardizedStatus = standardizeStatus(`${status}`);
      let message = "Payment status updated successfully";

      if (standardizedStatus === "completed") {
        message = "Payment completed successfully!";
      } else if (standardizedStatus === "pending") {
        message = "Payment is still pending";
      } else if (standardizedStatus === "cancelled") {
        message = "Payment was cancelled";
      }

      setToaster({
        type: standardizedStatus === "completed" ? "success" : "error",
        message,
      });
    },
  });

  return {
    mutateUpdateOrderStatus,
  };
};

export default usePayment;
