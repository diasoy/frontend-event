import DashboardLayout from "@/components/layouts/DashboardLayout";
import Category from "@/components/views/Admin/Category";
import Dashboard from "@/components/views/Admin/Dashboard";
import React from "react";

const CategoryAdminPage = () => {
  return (
    <DashboardLayout
      title="Acara | Admin"
      description="List of all Categories, create new Categories, and manage existing Categories"
      type="admin"
    >
      <Category></Category>
    </DashboardLayout>
  );
};

export default CategoryAdminPage;
