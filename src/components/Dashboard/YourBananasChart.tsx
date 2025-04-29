import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { generateMockBananaChartData } from "@/mocking/chart";

const YourBananasChart = () => {
  const data = generateMockBananaChartData();

  return (
    <div className="w-full h-64">
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="date" axisLine={false} tickLine={false} />
          <YAxis hide domain={["auto", "auto"]} />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#FFD700" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default YourBananasChart;
