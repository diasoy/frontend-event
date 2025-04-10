import DashboardLayout from "@/components/layouts/DashboardLayout";
import Dashboard from "@/components/views/Member/Dashboard";
import React from "react";

const DashboardMemberPage = () => {
  return (
    <DashboardLayout title="Acara | Member" description="Dashboard Member" type="member">
      <Dashboard />
    </DashboardLayout>
  );
};

export default DashboardMemberPage;
