import React from 'react';

const cards = [
  { label: '현재가', value: '110,000원', change: '+5.26%', up: true },
  { label: '시가총액', value: '657조원', change: '+2.1조', up: true },
  { label: 'PER', value: '18.4배', change: '업종 22.1배', up: null },
  { label: 'ROE', value: '15.2%', change: '+1.8%p YoY', up: true },
  { label: '영업이익률', value: '22.1%', change: '+3.2%p YoY', up: true },
  { label: '부채비율', value: '45.3%', change: '-5.1%p YoY', up: false },
];

export default function SummaryCards() {
  return (
    <div className="summary-grid">
      {cards.map((c, i) => (
        <div key={i} className="summary-card">
          <p className="summary-label">{c.label}</p>
          <p className="summary-value">{c.value}</p>
          <p className={`summary-change ${c.up === true ? 'up' : c.up === false ? 'down' : 'neutral'}`}>
            {c.change}
          </p>
        </div>
      ))}
    </div>
  );
}
