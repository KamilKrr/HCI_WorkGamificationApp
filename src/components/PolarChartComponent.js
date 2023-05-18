import React from 'react';
import { View, Text } from 'react-native';
import { VictoryChart, VictoryPolarAxis, VictoryArea } from 'victory-native';
export function PolarChartComponent () {
    const data = [
        { subject: 'Passwords', performance: 70 },
        { subject: 'Phishing', performance: 50 },
        { subject: 'Antivirus', performance: 35 },
        { subject: 'Firewall', performance: 40 },
        { subject: 'VPN', performance: 100 },
        { subject: 'Social Engineering', performance: 20 },
    ];
    const emptyTickFormat = () => '';
    return (
        <View>
            <VictoryChart polar >
                <VictoryPolarAxis
                    dependentAxis tickFormat={emptyTickFormat}
                />
                <VictoryPolarAxis />
                <VictoryArea
                    data={data}
                    x="subject"
                    y="performance"
                />
            </VictoryChart>
        </View>
    );
};






