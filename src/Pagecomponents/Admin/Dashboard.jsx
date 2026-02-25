import { IndianRupee, FileText, AlertCircle } from "lucide-react";

// import AdminHeader from "../../components/admin/AdminHeader";
import StatCard from "../../components/admin/StatCard";
import AdminHeader from "../../components/Admin/AdminHeader";
import CreateInvoice from "../../app/admin/createInvoice/page";

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* <AdminHeader /> */}
      <AdminHeader />

      {/* KPI CARDS */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <StatCard label="Total Revenue" value="₹1,42,000" icon={IndianRupee} />
        <StatCard label="Total Invoices" value="86" icon={FileText} />
        <StatCard label="Pending Balance" value="₹18,500" icon={AlertCircle} />
      </div>

      {/* CREATE INVOICE */}
      <CreateInvoice/>
    </div>
  );
}
