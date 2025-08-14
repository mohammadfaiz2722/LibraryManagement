// src/components/DashboardChart.jsx
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

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
    <div className="bg-white rounded-xl shadow-lg p-5">
      <h3 className="text-lg font-semibold mb-4">Books Issued This Week</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="books" stroke="#4f46e5" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
