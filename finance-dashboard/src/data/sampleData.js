export const candleData = [
  { date: '2024-01', open: 72000, high: 78000, low: 70000, close: 76000, volume: 1200000 },
  { date: '2024-02', open: 76000, high: 82000, low: 74000, close: 80000, volume: 980000 },
  { date: '2024-03', open: 80000, high: 85000, low: 77000, close: 79000, volume: 1450000 },
  { date: '2024-04', open: 79000, high: 88000, low: 78000, close: 86000, volume: 1600000 },
  { date: '2024-05', open: 86000, high: 90000, low: 83000, close: 84000, volume: 1100000 },
  { date: '2024-06', open: 84000, high: 89000, low: 80000, close: 88000, volume: 1350000 },
  { date: '2024-07', open: 88000, high: 95000, low: 86000, close: 93000, volume: 1700000 },
  { date: '2024-08', open: 93000, high: 98000, low: 89000, close: 91000, volume: 1250000 },
  { date: '2024-09', open: 91000, high: 96000, low: 87000, close: 94000, volume: 1400000 },
  { date: '2024-10', open: 94000, high: 102000, low: 92000, close: 100000, volume: 1900000 },
  { date: '2024-11', open: 100000, high: 108000, low: 97000, close: 105000, volume: 2100000 },
  { date: '2024-12', open: 105000, high: 112000, low: 103000, close: 110000, volume: 2300000 },
];

export const revenueData = [
  { quarter: 'Q1 23', revenue: 12500, profit: 1800, operatingProfit: 2100 },
  { quarter: 'Q2 23', revenue: 13800, profit: 2100, operatingProfit: 2400 },
  { quarter: 'Q3 23', revenue: 14200, profit: 1900, operatingProfit: 2200 },
  { quarter: 'Q4 23', revenue: 16500, profit: 2800, operatingProfit: 3100 },
  { quarter: 'Q1 24', revenue: 14800, profit: 2300, operatingProfit: 2600 },
  { quarter: 'Q2 24', revenue: 15900, profit: 2600, operatingProfit: 2900 },
  { quarter: 'Q3 24', revenue: 17200, profit: 3100, operatingProfit: 3500 },
  { quarter: 'Q4 24', revenue: 19800, profit: 3800, operatingProfit: 4200 },
];

export const ratioData = [
  { metric: 'PER', value: 18, industry: 22, max: 40 },
  { metric: 'PBR', value: 2.4, industry: 2.8, max: 6 },
  { metric: 'ROE', value: 15, industry: 12, max: 30 },
  { metric: 'ROA', value: 8, industry: 6, max: 20 },
  { metric: '부채비율', value: 45, industry: 60, max: 100 },
  { metric: '영업이익률', value: 22, industry: 18, max: 40 },
];

export const radarData = [
  { subject: '수익성', A: 85, B: 70 },
  { subject: '성장성', A: 78, B: 65 },
  { subject: '안정성', A: 90, B: 80 },
  { subject: '효율성', A: 72, B: 75 },
  { subject: '시장지위', A: 88, B: 72 },
  { subject: '밸류에이션', A: 65, B: 60 },
];

export const portfolioData = [
  { name: '삼성전자', value: 35, color: '#4F8EF7' },
  { name: 'SK하이닉스', value: 20, color: '#34D399' },
  { name: 'NAVER', value: 15, color: '#F59E0B' },
  { name: '카카오', value: 12, color: '#EF4444' },
  { name: 'LG에너지솔루션', value: 10, color: '#8B5CF6' },
  { name: '기타', value: 8, color: '#6B7280' },
];

export const priceLineData = candleData.map(d => ({
  date: d.date,
  price: d.close,
  ma5: 0,
})).map((d, i, arr) => ({
  ...d,
  ma5: i >= 4
    ? Math.round(arr.slice(i - 4, i + 1).reduce((s, x) => s + x.price, 0) / 5)
    : null,
}));
