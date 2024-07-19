import React from 'react';
import { Chart } from 'react-charts';

const GenericLineChart = ({ data, title, xLabel, yLabel, yFormat }
  : {
    data: any[];
    title: string;
    xLabel: string;
    yLabel: string;
    yFormat?: (d: number) => string;
  }
) => {
  const primaryAxis: any = React.useMemo(
    () => ({
      getValue: (datum: any) => datum.x,
      scaleType: 'time',
      position: 'bottom',
      showGrid: true,
      format: '%H:%M',
      title: xLabel,
    }),
    [xLabel]
  );

  const secondaryAxes: any = React.useMemo(
    () => [
      {
        getValue: (datum: any) => datum.y,
        scaleType: 'linear',
        position: 'left',
        min: 0,
        showGrid: true,
        format: yFormat,
        title: yLabel,
      },
    ],
    [yLabel, yFormat]
  );

  return (
    <div
      className='h-[400px] mb-20'
    >
      <h2 className='text-center font-semibold my-4'>{title}</h2>
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
        }}
      />
    </div>
  );
};

export default GenericLineChart;
