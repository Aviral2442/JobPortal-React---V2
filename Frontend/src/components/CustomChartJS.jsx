import { Suspense, useEffect, useMemo, useState } from 'react';
import Loader from '@/components/Loader';
import { useLayoutContext } from '@/context/useLayoutContext';
import { CategoryScale, Chart as ChartJS, Decimation, Legend, LinearScale, SubTitle, Title, Tooltip } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { getColor } from '@/helpers/chart';
import { merge } from 'lodash';
function getDefaultChartOptions() {
  const bodyFont = getComputedStyle(document.body).fontFamily.trim();
  return {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: -10
      }
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: bodyFont
          },
          color: getColor('secondary-color'),
          display: true
        },
        grid: {
          display: false
        },
        border: {
          display: false
        }
      },
      y: {
        ticks: {
          font: {
            family: bodyFont
          },
          color: getColor('secondary-color')
        },
        grid: {
          display: true,
          color: getColor('chart-border-color'),
          lineWidth: 1
        },
        border: {
          display: false,
          dash: [5, 5]
        }
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            family: bodyFont
          },
          color: getColor('secondary-color'),
          usePointStyle: true,
          pointStyle: 'circle',
          boxWidth: 8,
          boxHeight: 8,
          padding: 15
        }
      },
      tooltip: {
        enabled: true,
        titleFont: {
          family: bodyFont
        },
        bodyFont: {
          family: bodyFont
        }
      }
    }
  };
}
const CustomChartJS = ({
  type,
  height = '100%',
  width = '100%',
  getOptions,
  plugins,
  style
}) => {
  ChartJS.register(Tooltip, Legend, Title, SubTitle, Decimation, CategoryScale, LinearScale, plugins ?? []);
  const {
    skin,
    theme
  } = useLayoutContext();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const {
    data,
    options
  } = useMemo(() => {
    if (!mounted) {
      return {
        data: {
          labels: [],
          datasets: []
        },
        options: {}
      };
    }
    const {
      data,
      options
    } = getOptions();
    const mergedOptions = merge({}, getDefaultChartOptions(), options);
    return {
      data,
      options: mergedOptions
    };
  }, [mounted, skin, theme]);
  return <Suspense fallback={<Loader />}>
            <Chart key={`${theme}-${skin}`} type={type} data={data} options={options} width={width} height={height} style={style} />
        </Suspense>;
};
export default CustomChartJS;