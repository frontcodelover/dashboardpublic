'use client';
import React from 'react'
import { ResponsiveLine } from '@nivo/line';
import { data } from '@/components/graph/clientSatisfaction/Data'

const ClientSatisfaction = () => {
	return (
		<ResponsiveLine
		data={data}
		margin={{ top: 20, right: 120, bottom: 50, left: 60 }}
		xScale={{ type: 'point' }}
		yScale={{
			type: 'linear',
			min: 'auto',
			max: 'auto',
			stacked: false,
			reverse: false,
		}}
		yFormat=' >-.2f'
		axisTop={null}
		axisRight={null}
		axisBottom={{
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: 'Période',
			legendOffset: 36,
			legendPosition: 'middle',
		}}
		axisLeft={{
			tickSize: 5,
			tickPadding: 5,
			tickRotation: 0,
			legend: 'Score de Satisfaction',
			legendOffset: -40,
			legendPosition: 'middle',
		}}
		pointSize={10}
		pointColor={{ theme: 'background' }}
		pointBorderWidth={2}
		pointBorderColor={{ from: 'serieColor' }}
		pointLabel='data.yFormatted'
		pointLabelYOffset={-12}
		enableTouchCrosshair={true}
		useMesh={true}
		legends={[
			{
				anchor: 'bottom-right',
				direction: 'column',
				justify: false,
				translateX: 100,
				translateY: 0,
				itemsSpacing: 0,
				itemDirection: 'left-to-right',
				itemWidth: 80,
				itemHeight: 20,
				itemOpacity: 0.75,
				symbolSize: 12,
				symbolShape: 'circle',
				symbolBorderColor: 'rgba(0, 0, 0, .5)',
				effects: [
					{
						on: 'hover',
						style: {
							itemBackground: 'rgba(0, 0, 0, .03)',
							itemOpacity: 1,
						},
					},
				],
			},
		]}
	/>
	)
}

export default ClientSatisfaction