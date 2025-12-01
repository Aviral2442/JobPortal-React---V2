import { getColor } from '@/helpers/chart';
import user1 from '@/assets/images/users/user-1.jpg';
import user2 from '@/assets/images/users/user-2.jpg';
import user3 from '@/assets/images/users/user-3.jpg';
import user4 from '@/assets/images/users/user-4.jpg';
import user5 from '@/assets/images/users/user-5.jpg';
import user6 from '@/assets/images/users/user-6.jpg';
import user7 from '@/assets/images/users/user-7.jpg';
import user8 from '@/assets/images/users/user-8.jpg';
import user9 from '@/assets/images/users/user-9.jpg';
import user10 from '@/assets/images/users/user-10.jpg';
import { currency } from '@/helpers';
export const promptsUsageChart = () => ({
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      data: [120, 150, 180, 220, 200, 245, 145],
      backgroundColor: getColor('chart-primary'),
      borderRadius: 4,
      borderSkipped: false
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false
        }
      },
      y: {
        display: false,
        grid: {
          display: false
        }
      }
    }
  }
});
export const accuracyChart = () => ({
  data: {
    labels: ['Correct', 'Partially Correct', 'Incorrect', 'Unclear'],
    datasets: [{
      data: [36, 18, 10, 9],
      backgroundColor: [getColor('chart-primary'), getColor('chart-secondary'), getColor('chart-gray'), getColor('chart-dark')],
      borderColor: [getColor('chart-primary'), getColor('chart-secondary'), getColor('chart-gray'), getColor('chart-dark')],
      borderWidth: 1
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (ctx) {
            return `${ctx.label}: ${ctx.parsed}%`;
          }
        }
      }
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      },
      y: {
        display: false,
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      }
    }
  }
});
export const tokenUsageChart = () => ({
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      data: [82000, 95000, 103000, 112000, 121500, 135200, 148000],
      backgroundColor: getColor('chart-primary-rgb', 0.1),
      borderColor: getColor('chart-primary'),
      tension: 0.4,
      fill: true,
      pointRadius: 0,
      borderWidth: 2
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: false
      }
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false
        }
      },
      y: {
        display: false,
        grid: {
          display: false
        }
      }
    }
  }
});
function generateSmoothData(count, start = 40, variation = 5) {
  const data = [start];
  for (let i = 1; i < count; i++) {
    const prev = data[i - 1];
    const next = prev + (Math.random() * variation * 2 - variation);
    data.push(Math.round(next));
  }
  return data;
}
function generateHigherData(baseData, diffRange = [3, 6]) {
  return baseData.map(val => val + Math.floor(Math.random() * (diffRange[1] - diffRange[0] + 1)) + diffRange[0]);
}

// Labels changed to time slots or AI usage checkpoints
const labels = ['0h', '3h', '6h', '9h', '12h', '15h', '18h', '21h'];
const currentAiUsers = generateSmoothData(8, 45, 4);
const previousAiUsers = generateHigherData(currentAiUsers);
export const activeUsersChart = () => ({
  data: {
    labels,
    datasets: [{
      label: 'AI Users (Today)',
      data: currentAiUsers,
      fill: true,
      borderColor: getColor('chart-primary'),
      backgroundColor: getColor('chart-primary-rgb', 0.2),
      tension: 0.4,
      pointRadius: 0,
      borderWidth: 1
    }, {
      label: 'AI Users (Yesterday)',
      data: previousAiUsers,
      fill: true,
      borderColor: getColor('chart-gray'),
      backgroundColor: getColor('chart-gray-rgb', 0.2),
      tension: 0.4,
      pointRadius: 0,
      borderWidth: 1
    }]
  }
});
export const sessions = [{
  id: '#AI-5001',
  user: {
    name: 'Alice Cooper',
    avatar: user1
  },
  aiModel: 'GPT-4',
  date: '2025-05-01',
  tokens: 2304,
  status: 'completed'
}, {
  id: '#AI-5002',
  user: {
    name: 'David Lee',
    avatar: user2
  },
  aiModel: 'DALL·E',
  date: '2025-04-30',
  tokens: 580,
  status: 'pending'
}, {
  id: '#AI-5003',
  user: {
    name: 'Sophia Turner',
    avatar: user3
  },
  aiModel: 'Whisper',
  date: '2025-04-29',
  tokens: 1102,
  status: 'completed'
}, {
  id: '#AI-5004',
  user: {
    name: 'James Wilson',
    avatar: user4
  },
  aiModel: 'GPT-3.5',
  date: '2025-04-28',
  tokens: 760,
  status: 'failed'
}, {
  id: '#AI-5005',
  user: {
    name: 'Ava Carter',
    avatar: user5
  },
  aiModel: 'Claude 2',
  date: '2025-04-27',
  tokens: 1678,
  status: 'completed'
}, {
  id: '#AI-5006',
  user: {
    name: 'Ethan Brooks',
    avatar: user6
  },
  aiModel: 'Gemini Pro',
  date: '2025-04-26',
  tokens: 945,
  status: 'pending'
}, {
  id: '#AI-5007',
  user: {
    name: 'Mia Clarke',
    avatar: user7
  },
  aiModel: 'GPT-4 Turbo',
  date: '2025-04-25',
  tokens: 2189,
  status: 'completed'
}, {
  id: '#AI-5008',
  user: {
    name: 'Lucas Perry',
    avatar: user8
  },
  aiModel: 'Stable Diffusion',
  date: '2025-04-24',
  tokens: 312,
  status: 'failed'
}, {
  id: '#AI-5009',
  user: {
    name: 'Chloe Adams',
    avatar: user9
  },
  aiModel: 'GPT-4',
  date: '2025-04-23',
  tokens: 1784,
  status: 'completed'
}, {
  id: '#AI-5010',
  user: {
    name: 'Benjamin Gray',
    avatar: user10
  },
  aiModel: 'Whisper',
  date: '2025-04-22',
  tokens: 890,
  status: 'pending'
}];
export const modelUsageTable = {
  headers: ['Model', 'Requests', 'Total Tokens', 'Average Tokens', 'Last Used'],
  body: [{
    model: 'GPT-4',
    requests: 1248,
    totalTokens: 2483920,
    averageTokens: 1989,
    lastUsed: '2025-06-15'
  }, {
    model: 'DALL·E',
    requests: 328,
    totalTokens: 194320,
    averageTokens: 592,
    lastUsed: '2025-06-14'
  }, {
    model: 'Claude 2',
    requests: 814,
    totalTokens: 1102390,
    averageTokens: 1354,
    lastUsed: '2025-06-13'
  }, {
    model: 'Whisper',
    requests: 512,
    totalTokens: 653210,
    averageTokens: 1275,
    lastUsed: '2025-06-12'
  }, {
    model: 'Stable Diffusion',
    requests: 102,
    totalTokens: 61400,
    averageTokens: 602,
    lastUsed: '2025-06-10'
  }]
};
export const apiPerformanceMetricsTable = {
  headers: ['Endpoint', 'Latency', 'Requests', 'Error Rate', `Cost (${currency})`],
  body: [{
    endpoint: '/v1/chat/completions',
    latency: '720ms',
    requests: '8,204',
    errorRate: 0.18,
    cost: 128.34
  }, {
    endpoint: '/v1/images/generations',
    latency: '930ms',
    requests: '1,029',
    errorRate: 0.03,
    cost: 43.89
  }, {
    endpoint: '/v1/audio/transcriptions',
    latency: '1.2s',
    requests: '489',
    errorRate: 0.0,
    cost: 16.45
  }, {
    endpoint: '/v1/embeddings',
    latency: '610ms',
    requests: '2,170',
    errorRate: 0.1,
    cost: 24.98
  }, {
    endpoint: '/v1/chat/moderation',
    latency: '450ms',
    requests: '5,025',
    errorRate: 0.01,
    cost: 7.52
  }]
};