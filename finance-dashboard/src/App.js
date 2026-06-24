import React, { useState } from 'react';
import './App.css';
import SummaryCards from './components/SummaryCards';
import CandleChart from './components/CandleChart';
import RevenueChart from './components/RevenueChart';
import RatioChart from './components/RatioChart';
import PortfolioChart from './components/PortfolioChart';

const stocks = ['삼성전자', 'SK하이닉스', 'NAVER', '카카오', 'LG에너지솔루션'];

export default function App() {
  const [activeStock, setActiveStock] = useState('삼성전자');
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: '종합' },
    { id: 'price', label: '주가' },
    { id: 'financial', label: '재무' },
    { id: 'portfolio', label: '포트폴리오' },
  ];

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <span className="brand-icon">📊</span>
            <h1 className="brand-name">FinanceView</h1>
          </div>
          <div className="stock-selector">
            {stocks.map(s => (
              <button
                key={s}
                className={`stock-btn ${activeStock === s ? 'active' : ''}`}
                onClick={() => setActiveStock(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="main">
        <div className="page-header">
          <div>
            <h2 className="stock-title">{activeStock}</h2>
            <p className="stock-meta">KOSPI · 005930 · 2024 기준</p>
          </div>
          <div className="price-badge">
            <span className="price-main">110,000원</span>
            <span className="price-change up">▲ 5,500 (5.26%)</span>
          </div>
        </div>

        <nav className="tab-nav">
          {tabs.map(t => (
            <button
              key={t.id}
              className={`tab-btn ${activeTab === t.id ? 'active' : ''}`}
              onClick={() => setActiveTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </nav>

        <SummaryCards />

        {(activeTab === 'overview' || activeTab === 'price') && <CandleChart />}
        {(activeTab === 'overview' || activeTab === 'financial') && <RevenueChart />}
        {(activeTab === 'overview' || activeTab === 'financial') && <RatioChart />}
        {(activeTab === 'overview' || activeTab === 'portfolio') && <PortfolioChart />}
      </main>

      <footer className="footer">
        <p>샘플 데이터 기반 · 투자 참고용 아님 · FinanceView 2024</p>
      </footer>
    </div>
  );
}
