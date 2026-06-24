import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, Sector } from 'recharts';
import { portfolioData } from '../data/sampleData';

const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  return (
    <g>
      <text x={cx} y={cy - 12} textAnchor="middle" fill="#fff" fontSize={15} fontWeight="bold">
        {payload.name}
      </text>
      <text x={cx} y={cy + 12} textAnchor="middle" fill="#9CA3AF" fontSize={13}>
        {value}% ({(percent * 100).toFixed(1)}%)
      </text>
      <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius + 10}
        startAngle={startAngle} endAngle={endAngle} fill={fill} />
      <Sector cx={cx} cy={cy} innerRadius={outerRadius + 14} outerRadius={outerRadius + 18}
        startAngle={startAngle} endAngle={endAngle} fill={fill} />
    </g>
  );
};

export default function PortfolioChart() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = portfolioData.reduce((s, d) => s + d.value, 0);

  return (
    <div className="chart-card">
      <h2 className="chart-title">포트폴리오 구성</h2>
      <p className="chart-sub">종목별 비중 (총 {total}%)</p>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 260 }}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={portfolioData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={110}
                dataKey="value"
                onMouseEnter={(_, index) => setActiveIndex(index)}
              >
                {portfolioData.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div style={{ flex: 1, minWidth: 200 }}>
          {portfolioData.map((d, i) => (
            <div key={i}
              style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, cursor: 'pointer' }}
              onMouseEnter={() => setActiveIndex(i)}
            >
              <div style={{ width: 14, height: 14, borderRadius: 3, backgroundColor: d.color, flexShrink: 0 }} />
              <span style={{ color: '#D1D5DB', fontSize: 14, flex: 1 }}>{d.name}</span>
              <span style={{ color: d.color, fontWeight: 'bold', fontSize: 14 }}>{d.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
