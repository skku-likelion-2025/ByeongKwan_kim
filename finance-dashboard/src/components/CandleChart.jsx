import React from 'react';
import {
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, Cell,
} from 'recharts';
import { candleData } from '../data/sampleData';

const CustomCandle = (props) => {
  const { x, y, width, height, open, close, high, low } = props;
  const isUp = close >= open;
  const color = isUp ? '#EF4444' : '#3B82F6';
  const bodyY = isUp ? y : y + height;
  const bodyH = Math.abs(height);
  const centerX = x + width / 2;

  return (
    <g>
      <line x1={centerX} y1={y} x2={centerX} y2={y + height} stroke={color} strokeWidth={1.5} />
      <rect x={x + 2} y={bodyY - (isUp ? bodyH : 0)} width={width - 4} height={bodyH || 2} fill={color} />
    </g>
  );
};

const processedData = candleData.map(d => ({
  ...d,
  range: [d.low, d.high],
  body: [Math.min(d.open, d.close), Math.max(d.open, d.close)],
  isUp: d.close >= d.open,
}));

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  const d = candleData.find(c => c.date === label);
  if (!d) return null;
  return (
    <div className="tooltip-box">
      <p className="tooltip-title">{label}</p>
      <p>시가: {d.open.toLocaleString()}원</p>
      <p>고가: <span style={{ color: '#EF4444' }}>{d.high.toLocaleString()}원</span></p>
      <p>저가: <span style={{ color: '#3B82F6' }}>{d.low.toLocaleString()}원</span></p>
      <p>종가: {d.close.toLocaleString()}원</p>
      <p>거래량: {d.volume.toLocaleString()}</p>
    </div>
  );
};

export default function CandleChart() {
  return (
    <div className="chart-card">
      <h2 className="chart-title">주가 캔들차트</h2>
      <p className="chart-sub">삼성전자 월봉 (2024)</p>
      <ResponsiveContainer width="100%" height={320}>
        <ComposedChart data={processedData} margin={{ top: 10, right: 20, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#2a2a3a" />
          <XAxis dataKey="date" tick={{ fill: '#9CA3AF', fontSize: 12 }} />
          <YAxis
            domain={['auto', 'auto']}
            tick={{ fill: '#9CA3AF', fontSize: 12 }}
            tickFormatter={v => `${(v / 1000).toFixed(0)}K`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="range" fill="transparent" isAnimationActive={false}>
            {processedData.map((d, i) => (
              <Cell key={i} fill={d.isUp ? '#EF4444' : '#3B82F6'} />
            ))}
          </Bar>
          <Bar dataKey="body" isAnimationActive={false}>
            {processedData.map((d, i) => (
              <Cell key={i} fill={d.isUp ? '#EF4444' : '#3B82F6'} />
            ))}
          </Bar>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
