import DashboardLayout from "@/components/layouts/DashboardLayout";
import Dashboard from "@/components/views/Admin/Dashboard";
import React from "react";

const DashboardAdminPage = () => {
  return (
    <DashboardLayout
      title="Acara | Admin"
      description="Dashboard Admin"
      type="admin"
    >
      <Dashboard />
    </DashboardLayout>
  );
};

export default DashboardAdminPage;
