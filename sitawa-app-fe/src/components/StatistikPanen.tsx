import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Januari",
    Pendapatan: 40,
  },
  {
    name: "Februari",

    Pendapatan: 52,
  },
  {
    name: "Maret",

    Pendapatan: 24,
  },
  {
    name: "April",

    Pendapatan: 40,
  },
  {
    name: "Mei",

    Pendapatan: 48,
  },
  {
    name: "Juni",

    Pendapatan: 36,
  },
  {
    name: "Juli",

    Pendapatan: 28,
  },
  {
    name: "Agustus",

    Pendapatan: 44,
  },
  {
    name: "September",

    Pendapatan: 52,
  },
  {
    name: "Oktober",

    Pendapatan: 52,
  },
  {
    name: "November",

    Pendapatan: 44,
  },
];

export default function StatistikPanen() {
  return (
    <div className="h-[22rem] px-4 rounded-sm  flex flex-col flex-1">
      <div className=" w-full flex-1 text-xs ">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0,
            }}
            barSize={30} // Adjust the bar size
          >
            <defs>
              <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#9BEC00" />
                <stop offset="100%" stopColor="#06D001" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />

            <Bar dataKey="Pendapatan" fill="url(#gradient1)" radius={[50, 50, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
