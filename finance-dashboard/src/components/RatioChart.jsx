import React from 'react';
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis,
  ResponsiveContainer, Legend, Tooltip,
  LineChart, Line, XAxis, YAxis, CartesianGrid,
} from 'recharts';
import { radarData, ratioData } from '../data/sampleData';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="tooltip-box">
      <p className="tooltip-title">{label}</p>
      {payload.map(p => (
        <p key={p.dataKey} style={{ color: p.color }}>{p.name}: {p.value}</p>
      ))}
    </div>
  );
};

export default function RatioChart() {
  return (
    <div className="chart-card">
      <h2 className="chart-title">재무비율 분석</h2>
      <p className="chart-sub">회사 vs 업종 평균 비교</p>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 280 }}>
          <p style={{ color: '#9CA3AF', fontSize: 13, marginBottom: 8, textAlign: 'center' }}>레이더 차트</p>
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#2a2a3a" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#9CA3AF', fontSize: 12 }} />
              <Radar name="삼성전자" dataKey="A" stroke="#4F8EF7" fill="#4F8EF7" fillOpacity={0.3} />
              <Radar name="업종평균" dataKey="B" stroke="#34D399" fill="#34D399" fillOpacity={0.2} />
              <Legend wrapperStyle={{ color: '#D1D5DB' }} />
              <Tooltip content={<CustomTooltip />} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div style={{ flex: 1, minWidth: 280 }}>
          <p style={{ color: '#9CA3AF', fontSize: 13, marginBottom: 8, textAlign: 'center' }}>주요 재무비율</p>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={ratioData} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3a" />
              <XAxis dataKey="metric" tick={{ fill: '#9CA3AF', fontSize: 11 }} />
              <YAxis tick={{ fill: '#9CA3AF', fontSize: 11 }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ color: '#D1D5DB' }} />
              <Line type="monotone" dataKey="value" name="삼성전자" stroke="#4F8EF7" strokeWidth={2} dot={{ r: 5 }} />
              <Line type="monotone" dataKey="industry" name="업종평균" stroke="#34D399" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
