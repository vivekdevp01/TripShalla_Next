export default function StatCard({ label, value, icon: Icon }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">{label}</p>
          <p className="text-2xl font-black mt-1">{value}</p>
        </div>
        <Icon className="text-emerald-600" size={32} />
      </div>
    </div>
  );
}
