import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import dayjs from "dayjs";
import { AssetPoint } from "@/types";

interface Props {
  data: AssetPoint[];
}

const YourBananasChart = ({ data }: Props) => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e0e0e0"
            vertical={false}
          />
          <XAxis
            dataKey="date"
            height={40}
            tick={({ payload, x, y }) => {
              const isToday = payload.value === data[data.length - 1].date;
              return (
                <text
                  x={x}
                  y={y + 10}
                  textAnchor="middle"
                  fontSize="12"
                  fill={isToday ? "#000000" : "#666666"}
                  fontWeight={isToday ? "bold" : "normal"}
                >
                  {isToday ? "TODAY" : dayjs(payload.value).format("MM/DD")}
                </text>
              );
            }}
            interval="preserveStartEnd"
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={["dataMin", "dataMax"]}
            tick={{ fontSize: 12, fill: "black" }}
            tickCount={5}
            allowDecimals={false}
            axisLine={false}
            tickFormatter={(value) => Math.round(value).toString()}
          />
          <Tooltip
            formatter={(value: number) => [
              `$${value.toLocaleString()}`,
              "💰 Balance",
            ]}
            labelFormatter={(label) => dayjs(label).format("MMM D")}
            cursor={{ stroke: "#ccc", strokeWidth: 1 }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#FFD700"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default YourBananasChart;
