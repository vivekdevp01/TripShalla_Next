import { Mountain } from "lucide-react";

export default function AdminHeader() {
  return (
    <div className="flex items-center justify-between mb-10">
      <div>
        <h1 className="text-3xl font-black flex items-center gap-3">
          <Mountain className="text-emerald-600" />
          Tripshalla Admin
        </h1>
        <p className="text-slate-500 mt-1">
          Manage bookings, invoices & revenue
        </p>
      </div>

      <div className="text-right">
        <p className="text-sm text-slate-500">Logged in as</p>
        <p className="font-bold">Admin</p>
      </div>
    </div>
  );
}
