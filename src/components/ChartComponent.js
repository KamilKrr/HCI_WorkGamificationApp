import React from 'react';
import { View } from 'react-native';
import { RadarChart } from 'react-native-chart-kit';
export function ChartComponent() {
    const data = {
        labels: ['Math', 'Science', 'History', 'English', 'Art'],
        datasets: [
            {
                data: [80, 90, 70, 85, 75],
                color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`, // Customize the color of the data points
            },
        ],
    };

    const chartConfig = {
        backgroundColor: '#ffffff',
        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Customize the color of the labels and axis lines
    };

    return (
        <View>
            <ChartComponent
                data={data}
                width={300}
                height={300}
                chartConfig={chartConfig}
            />
        </View>
    );
};


