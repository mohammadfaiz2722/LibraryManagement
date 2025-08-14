import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { name: "Mon", books: 40 },
  { name: "Tue", books: 30 },
  { name: "Wed", books: 20 },
  { name: "Thu", books: 27 },
  { name: "Fri", books: 18 },
  { name: "Sat", books: 23 },
  { name: "Sun", books: 34 },
];

export default function DashboardChart() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Books Issued This Week</h3>
      <ResponsiveContainer width="100%" height={300} minHeight={200}>
        <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
            padding={{ left: 10, right: 10 }}
            stroke="#6b7280"
          />
          <YAxis
            tick={{ fontSize: 12 }}
            stroke="#6b7280"
            width={40}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              border: "1px solid #e5e7eb",
              fontSize: "14px",
            }}
            formatter={(value) => [`${value} books`, "Books Issued"]}
            labelStyle={{ color: "#374151" }}
          />
          <Line
            type="monotone"
            dataKey="books"
            stroke="#4f46e5"
            strokeWidth={3}
            activeDot={{ r: 8 }}
            dot={{ stroke: "#4f46e5", strokeWidth: 2, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}