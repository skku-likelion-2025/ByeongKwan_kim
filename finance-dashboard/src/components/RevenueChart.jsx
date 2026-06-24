import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { revenueData } from '../data/sampleData';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="tooltip-box">
      <p className="tooltip-title">{label}</p>
      {payload.map(p => (
        <p key={p.dataKey} style={{ color: p.color }}>
          {p.name}: {p.value.toLocaleString()}억원
        </p>
      ))}
    </div>
  );
};

export default function RevenueChart() {
  return (
    <div className="chart-card">
      <h2 className="chart-title">매출 / 영업이익 / 순이익</h2>
      <p className="chart-sub">분기별 재무 실적 (단위: 억원)</p>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={revenueData} margin={{ top: 10, right: 20, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3a" />
          <XAxis dataKey="quarter" tick={{ fill: '#9CA3AF', fontSize: 12 }} />
          <YAxis tick={{ fill: '#9CA3AF', fontSize: 12 }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ color: '#D1D5DB' }} />
          <Bar dataKey="revenue" name="매출" fill="#4F8EF7" radius={[4, 4, 0, 0]} />
          <Bar dataKey="operatingProfit" name="영업이익" fill="#34D399" radius={[4, 4, 0, 0]} />
          <Bar dataKey="profit" name="순이익" fill="#F59E0B" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
