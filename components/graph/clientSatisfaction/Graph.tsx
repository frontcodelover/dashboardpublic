'use client';

import * as React from 'react';
import { TrendingUp } from 'lucide-react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Legend, ResponsiveContainer } from 'recharts';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { clientSatisfactionData } from './Data';

const chartConfig = {
  serviceClient: {
    label: 'Service Client',
    color: 'hsl(var(--chart-1))',
  },
  qualiteProduit: {
    label: 'Qualité Produit',
    color: 'hsl(var(--chart-2))',
  },
  livraison: {
    label: 'Livraison',
    color: 'hsl(var(--chart-3))',
  },
};

const ClientSatisfaction = () => {
  return (
    <Card className='rounded-xl'>
      <CardHeader>
        <CardDescription>Janvier - Août</CardDescription>
      </CardHeader>
      <CardContent className='p-4'>
        <ChartContainer config={chartConfig} className='w-full h-80'>
          <ResponsiveContainer width='100%' height={300}>
            <LineChart
              data={clientSatisfactionData}
              margin={{
                top: 20,
                left: 10,
                right: 10,
                bottom: 20,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis dataKey='month' tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
              <YAxis domain={[60, 100]} tickCount={5} width={30} tick={{ fontSize: 12 }} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Legend verticalAlign='bottom' height={36} />
              <Line dataKey='serviceClient' type='monotone' stroke={chartConfig.serviceClient.color} strokeWidth={2} dot={false} name={chartConfig.serviceClient.label} />
              <Line dataKey='qualiteProduit' type='monotone' stroke={chartConfig.qualiteProduit.color} strokeWidth={2} dot={false} name={chartConfig.qualiteProduit.label} />
              <Line dataKey='livraison' type='monotone' stroke={chartConfig.livraison.color} strokeWidth={2} dot={false} name={chartConfig.livraison.label} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ClientSatisfaction;
