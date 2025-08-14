// src/components/StatCard.jsx
export default function StatCard({ title, value, icon, gradient }) {
  return (
    <div className={`p-5 rounded-xl shadow-lg text-white ${gradient} flex justify-between items-center`}>
      <div>
        <h3 className="text-sm">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      <div className="bg-white/20 p-3 rounded-full">
        {icon}
      </div>
    </div>
  );
}
