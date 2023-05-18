import React from 'react';
import { View, Text } from 'react-native';
import { VictoryChart, VictoryAxis, VictoryTheme, VictoryBar } from 'victory-native';

export function BarChartComponent (){
    const data = [
        { subject: 'Passwords', performance: 70 },
        { subject: 'Phishing', performance: 50 },
        { subject: 'Antivirus', performance: 35 },
        { subject: 'Firewall', performance: 40 },
        { subject: 'VPN', performance: 100 },
        { subject: 'Social Engineering', performance: 20 },
    ];
    return(
        <VictoryChart
            theme={VictoryTheme.material}
        >
            <VictoryAxis/>
            <VictoryBar
                data={data}
                x="subject"
                y="performance"
            />
        </VictoryChart>
    );
};