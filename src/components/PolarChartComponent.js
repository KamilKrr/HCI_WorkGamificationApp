import React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { VictoryChart, VictoryPolarAxis, VictoryArea } from 'victory-native';
import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
export function PolarChartComponent () {
    const selectExperiencePointsByCourseId = createSelector(
        state => state.xp.value,
        (_, courseId) => courseId,
        (xpValue, courseId) => xpValue[courseId] > 0 ? xpValue[courseId] : 0 || 0
    );
    const data = [
        { subject: 'Phishing',              performance: useSelector(state => selectExperiencePointsByCourseId(state, 0)) },
        { subject: 'Passwords',             performance: useSelector(state => selectExperiencePointsByCourseId(state, 1)) },
        { subject: 'Antivirus',             performance: useSelector(state => selectExperiencePointsByCourseId(state, 2)) },
        { subject: 'Firewall',              performance: useSelector(state => selectExperiencePointsByCourseId(state, 3)) },
        { subject: 'VPN',                   performance: useSelector(state => selectExperiencePointsByCourseId(state, 4)) },
        { subject: 'Social Engineering',    performance: useSelector(state => selectExperiencePointsByCourseId(state, 5)) },
        { subject: '2FAuth',                performance: useSelector(state => selectExperiencePointsByCourseId(state, 6)) },
        { subject: 'Data Encryption',       performance: useSelector(state => selectExperiencePointsByCourseId(state, 7)) },
        { subject: 'Network Security',      performance: useSelector(state => selectExperiencePointsByCourseId(state, 8)) },
        { subject: 'Basics',                performance: useSelector(state => selectExperiencePointsByCourseId(state, 9)) },
    ];
    const colors = {
        background: 'black',
        axis: 'blue',
        tickLabels: 'blue',
        data: 'lavender',
        grid: 'black',
        axisLabel : 'black',
    };

    const emptyTickFormat = () => '';
    return (
        <View >
            <VictoryChart polar style={{ background: { fill: "gray" } }}>
                <VictoryPolarAxis
                    dependentAxis
                    tickFormat={emptyTickFormat}
                    style={{
                        axis: { stroke: colors.axis },
                        tickLabels: { fill: colors.tickLabels },
                        grid: {stroke: colors.grid},
                        axisLabel: { fill: colors.axisLabel },
                    }}
                />
                <VictoryPolarAxis
                    style={{
                        axis: { stroke: colors.axis },
                        tickLabels: { fill: colors.tickLabels },
                    }}
                />
                <VictoryArea
                    data={data}
                    x="subject"
                    y="performance"
                    style={{
                        data: { fill: colors.data, stroke: colors.data },
                    }}
                />
            </VictoryChart>
        </View>
    );
};






