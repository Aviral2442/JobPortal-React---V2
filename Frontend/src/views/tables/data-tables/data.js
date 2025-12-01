import { currency } from '@/helpers';
export const columns = [{
  data: 'company'
}, {
  data: 'symbol'
}, {
  data: 'price',
  render: data => {
    return `${currency}${data}`;
  },
  className: 'text-start'
}, {
  data: 'change',
  render: data => {
    return `${data}%`;
  },
  className: 'text-start'
}, {
  data: 'volume',
  className: 'text-start'
}, {
  data: 'marketCap',
  render: data => {
    return `${currency}${data}`;
  }
}, {
  data: 'rating',
  render: data => {
    return `${data}★`;
  }
}, {
  data: 'status',
  render: data => {
    const badgeClass = data === 'Bullish' ? 'success' : 'danger';
    return `<span class="badge badge-label badge-soft-${badgeClass}">${data}</span>`;
  }
}];
export const tableData = {
  header: ['Company', 'Symbol', 'Price', 'Change', 'Volume', 'Market Cap', 'Rating', 'Status'],
  body: [{
    company: 'Apple Inc.',
    symbol: 'AAPL',
    price: 2146.86,
    change: 2.92,
    volume: '4,900,854',
    marketCap: '53.59B',
    rating: 4.7,
    status: 'Bearish'
  }, {
    company: 'Microsoft Corp.',
    symbol: 'MSFT',
    price: 408.9,
    change: -3.76,
    volume: '5,714,994',
    marketCap: '927.77B',
    rating: 3.8,
    status: 'Bearish'
  }, {
    company: 'Alphabet Inc.',
    symbol: 'GOOGL',
    price: 2787.28,
    change: 0.43,
    volume: '7,698,249',
    marketCap: '1.88T',
    rating: 4.6,
    status: 'Bearish'
  }, {
    company: 'Tesla Inc.',
    symbol: 'TSLA',
    price: 701.63,
    change: -3.26,
    volume: '7,024,386',
    marketCap: '701.98B',
    rating: 4.5,
    status: 'Bearish'
  }, {
    company: 'Amazon.com Inc.',
    symbol: 'AMZN',
    price: 3363.58,
    change: 0.04,
    volume: '4,466,395',
    marketCap: '1.72T',
    rating: 4.3,
    status: 'Bearish'
  }, {
    company: 'Meta Platforms, Inc.',
    symbol: 'META',
    price: 279.44,
    change: -1.18,
    volume: '2,546,904',
    marketCap: '752.91B',
    rating: 4.1,
    status: 'Bullish'
  }, {
    company: 'NVIDIA Corporation',
    symbol: 'NVDA',
    price: 742.44,
    change: -1.44,
    volume: '5,438,252',
    marketCap: '1.88T',
    rating: 4.9,
    status: 'Bullish'
  }, {
    company: 'Berkshire Hathaway',
    symbol: 'BRK.A',
    price: 419247.03,
    change: 0.24,
    volume: '1,054,720',
    marketCap: '828.66B',
    rating: 4.8,
    status: 'Bearish'
  }, {
    company: 'Walmart Inc.',
    symbol: 'WMT',
    price: 142.11,
    change: -1.53,
    volume: '6,017,907',
    marketCap: '398.24B',
    rating: 4.0,
    status: 'Bearish'
  }, {
    company: 'Johnson & Johnson',
    symbol: 'JNJ',
    price: 136.44,
    change: -2.38,
    volume: '5,224,035',
    marketCap: '442.89B',
    rating: 4.3,
    status: 'Bearish'
  }, {
    company: 'Procter & Gamble',
    symbol: 'PG',
    price: 113.1,
    change: -0.91,
    volume: '2,638,562',
    marketCap: '358.61B',
    rating: 4.4,
    status: 'Bearish'
  }, {
    company: 'Visa Inc.',
    symbol: 'V',
    price: 201.0,
    change: 3.73,
    volume: '8,994,343',
    marketCap: '495.51B',
    rating: 4.7,
    status: 'Bullish'
  }, {
    company: 'Home Depot',
    symbol: 'HD',
    price: 374.05,
    change: 3.05,
    volume: '8,927,428',
    marketCap: '381.73B',
    rating: 4.6,
    status: 'Bullish'
  }, {
    company: 'Coca-Cola Company',
    symbol: 'KO',
    price: 90.54,
    change: 0.38,
    volume: '5,637,126',
    marketCap: '274.17B',
    rating: 4.2,
    status: 'Bullish'
  }, {
    company: 'PepsiCo',
    symbol: 'PEP',
    price: 218.61,
    change: 2.58,
    volume: '7,528,757',
    marketCap: '259.61B',
    rating: 4.5,
    status: 'Bearish'
  }, {
    company: 'Intel Corporation',
    symbol: 'INTC',
    price: 50.74,
    change: -0.13,
    volume: '2,566,225',
    marketCap: '213.76B',
    rating: 3.9,
    status: 'Bearish'
  }, {
    company: 'Cisco Systems',
    symbol: 'CSCO',
    price: 32.49,
    change: -2.94,
    volume: '1,107,843',
    marketCap: '238.17B',
    rating: 4.1,
    status: 'Bearish'
  }, {
    company: 'Pfizer Inc.',
    symbol: 'PFE',
    price: 48.31,
    change: -1.06,
    volume: '2,699,320',
    marketCap: '246.69B',
    rating: 4.3,
    status: 'Bullish'
  }, {
    company: 'AbbVie Inc.',
    symbol: 'ABBV',
    price: 113.84,
    change: -3.39,
    volume: '5,054,850',
    marketCap: '286.97B',
    rating: 4.4,
    status: 'Bearish'
  }, {
    company: 'UnitedHealth Group',
    symbol: 'UNH',
    price: 446.07,
    change: -1.84,
    volume: '5,401,283',
    marketCap: '696.69B',
    rating: 4.7,
    status: 'Bearish'
  }, {
    company: 'Mastercard Inc.',
    symbol: 'MA',
    price: 437.2,
    change: 0.88,
    volume: '797,545',
    marketCap: '396.98B',
    rating: 4.8,
    status: 'Bearish'
  }, {
    company: 'Oracle Corporation',
    symbol: 'ORCL',
    price: 155.87,
    change: 1.15,
    volume: '6,380,239',
    marketCap: '314.26B',
    rating: 4.0,
    status: 'Bullish'
  }, {
    company: "McDonald's Corporation",
    symbol: 'MCD',
    price: 203.74,
    change: -2.22,
    volume: '6,741,885',
    marketCap: '367.83B',
    rating: 4.5,
    status: 'Bearish'
  }, {
    company: 'Walt Disney Company',
    symbol: 'DIS',
    price: 150.55,
    change: -4.19,
    volume: '6,917,234',
    marketCap: '203.93B',
    rating: 3.8,
    status: 'Bullish'
  }, {
    company: 'Tesla Inc.',
    symbol: 'TSLA',
    price: 723.57,
    change: -1.39,
    volume: '2,686,353',
    marketCap: '701.98B',
    rating: 4.5,
    status: 'Bearish'
  }, {
    company: 'Chevron Corporation',
    symbol: 'CVX',
    price: 154.16,
    change: 1.19,
    volume: '7,894,254',
    marketCap: '342.54B',
    rating: 4.3,
    status: 'Bearish'
  }, {
    company: 'ExxonMobil',
    symbol: 'XOM',
    price: 141.18,
    change: -1.28,
    volume: '3,941,144',
    marketCap: '440.32B',
    rating: 4.6,
    status: 'Bullish'
  }, {
    company: 'Abbott Laboratories',
    symbol: 'ABT',
    price: 125.2,
    change: -3.47,
    volume: '7,556,855',
    marketCap: '185.85B',
    rating: 4.4,
    status: 'Bearish'
  }, {
    company: "Lowe's Companies",
    symbol: 'LOW',
    price: 173.94,
    change: -0.45,
    volume: '9,981,740',
    marketCap: '152.93B',
    rating: 4.3,
    status: 'Bearish'
  }, {
    company: 'Lockheed Martin',
    symbol: 'LMT',
    price: 473.21,
    change: 3.33,
    volume: '9,994,118',
    marketCap: '121.98B',
    rating: 4.6,
    status: 'Bearish'
  }, {
    company: '3M Company',
    symbol: 'MMM',
    price: 113.95,
    change: 0.48,
    volume: '518,654',
    marketCap: '66.17B',
    rating: 4.1,
    status: 'Bearish'
  }, {
    company: 'Bristol-Myers Squibb',
    symbol: 'BMY',
    price: 36.21,
    change: -4.2,
    volume: '3,466,547',
    marketCap: '142.71B',
    rating: 4.2,
    status: 'Bearish'
  }, {
    company: 'Raytheon Technologies',
    symbol: 'RTX',
    price: 46.13,
    change: -3.05,
    volume: '6,408,052',
    marketCap: '134.39B',
    rating: 4.5,
    status: 'Bullish'
  }, {
    company: 'General Electric',
    symbol: 'GE',
    price: 159.81,
    change: 0.13,
    volume: '9,911,255',
    marketCap: '101.36B',
    rating: 4.3,
    status: 'Bullish'
  }, {
    company: 'American Express',
    symbol: 'AXP',
    price: 133.04,
    change: -0.29,
    volume: '2,360,835',
    marketCap: '155.83B',
    rating: 4.4,
    status: 'Bullish'
  }, {
    company: 'Colgate-Palmolive',
    symbol: 'CL',
    price: 73.57,
    change: 2.9,
    volume: '7,251,531',
    marketCap: '68.45B',
    rating: 4.2,
    status: 'Bullish'
  }, {
    company: 'Johnson Controls',
    symbol: 'JCI',
    price: 17.16,
    change: 3.67,
    volume: '3,667,577',
    marketCap: '41.42B',
    rating: 4.3,
    status: 'Bullish'
  }, {
    company: 'Target Corporation',
    symbol: 'TGT',
    price: 151.18,
    change: 4.61,
    volume: '8,009,736',
    marketCap: '83.32B',
    rating: 4.4,
    status: 'Bearish'
  }, {
    company: 'Citigroup',
    symbol: 'C',
    price: 41.73,
    change: -0.68,
    volume: '252,870',
    marketCap: '97.68B',
    rating: 4.2,
    status: 'Bullish'
  }, {
    company: 'Qualcomm',
    symbol: 'QCOM',
    price: 117.77,
    change: -2.7,
    volume: '4,310,986',
    marketCap: '130.85B',
    rating: 4.4,
    status: 'Bearish'
  }, {
    company: 'Morgan Stanley',
    symbol: 'MS',
    price: 100.68,
    change: -3.07,
    volume: '8,514,285',
    marketCap: '180.71B',
    rating: 4.5,
    status: 'Bearish'
  }, {
    company: 'Adobe Inc.',
    symbol: 'ADBE',
    price: 503.46,
    change: 2.7,
    volume: '4,521,395',
    marketCap: '240.23B',
    rating: 4.8,
    status: 'Bearish'
  }, {
    company: 'Salesforce',
    symbol: 'CRM',
    price: 166.64,
    change: 4.19,
    volume: '1,096,384',
    marketCap: '213.48B',
    rating: 4.6,
    status: 'Bullish'
  }, {
    company: 'PayPal',
    symbol: 'PYPL',
    price: 197.52,
    change: 1.68,
    volume: '8,717,514',
    marketCap: '213.42B',
    rating: 4.2,
    status: 'Bearish'
  }, {
    company: 'IBM',
    symbol: 'IBM',
    price: 171.71,
    change: -3.11,
    volume: '1,687,819',
    marketCap: '124.75B',
    rating: 4.1,
    status: 'Bearish'
  }, {
    company: 'Tesla',
    symbol: 'TSLA',
    price: 920.23,
    change: -0.99,
    volume: '6,075,086',
    marketCap: '400B',
    rating: 4.6,
    status: 'Bullish'
  }, {
    company: 'Ford Motor Company',
    symbol: 'F',
    price: -23.24,
    change: -0.67,
    volume: '5,274,075',
    marketCap: '45.87B',
    rating: 3.7,
    status: 'Bearish'
  }, {
    company: 'General Motors',
    symbol: 'GM',
    price: 60.32,
    change: -2.23,
    volume: '4,477,483',
    marketCap: '51.91B',
    rating: 3.9,
    status: 'Bearish'
  }, {
    company: 'Boeing Company',
    symbol: 'BA',
    price: 217.56,
    change: 1.75,
    volume: '4,681,504',
    marketCap: '117.92B',
    rating: 4.4,
    status: 'Bearish'
  }, {
    company: 'Caterpillar Inc.',
    symbol: 'CAT',
    price: 314.04,
    change: 0.2,
    volume: '8,014,308',
    marketCap: '147.56B',
    rating: 4.7,
    status: 'Bearish'
  }]
};