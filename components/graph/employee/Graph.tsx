'use client';
import * as React from 'react';
import { employeeData, employeeChartConfig } from '@/components/graph/employee/Data';
import { ChartTooltip, ChartTooltipContent, ChartContainer } from '@/components/ui/chart';
import { PieChart, Pie, Label } from 'recharts';
import { Card } from '@/components/ui/card';

export function EmployeeGraph() {
  const totalScore = React.useMemo(() => {
    return employeeData.reduce((acc, curr) => acc + curr.value, 0);
  }, []);

  return (
    <Card className='flex flex-col p-4 rounded-xl'>
      <div className='text-gray-500'>January - June 2024</div>
      <div className='flex-1 pb-0'>
        <ChartContainer className='mx-auto aspect-square max-h-[250px]' config={employeeChartConfig}>
          <PieChart width={250} height={250}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={employeeData} dataKey='value' nameKey='category' innerRadius={60} outerRadius={80} strokeWidth={5}>
              <Label
                position='center'
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor='middle' dominantBaseline='middle'>
                        <tspan x={viewBox.cx} y={viewBox.cy} className='fill-foreground text-3xl font-bold'>
                          {totalScore.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className='fill-muted-foreground'>
                          Score Total
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>

      <div className='leading-none text-muted-foreground flex gap-2'>
        {employeeData.map((item, index) => (
          <div key={index} className='flex items-center gap-2'>
            <div className='w-3 h-3 rounded-full' style={{ backgroundColor: item.fill }} />
            <div className='text-sm'>{item.category}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default EmployeeGraph;
