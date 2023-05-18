import React, { useState } from 'react';
import {TrophyView} from "../components/TrophyView";
import {ScrollView} from "nativewind/dist/preflight";
import { View, Text, FlatList, Dimensions} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {PolarChartComponent} from "../components/PolarChartComponent";
import { XpPointsComponent } from '../components/XPPointsComponent';
import CenteredContainer from "../components/CenteredContainer";
import AppText from "../components/AppText";

const TrophiesScreen = () => {
    const courseIds = Array.from(Array(10).keys());

    const renderXpPointsComponent = ({ item }) => (
        <CenteredContainer>
            <XpPointsComponent courseId={item} />
        </CenteredContainer>
    );

    return (
        <View style={{ flex: 1 }}>
            <CenteredContainer>
                <AppText>Quiz Performance</AppText>
                <PolarChartComponent />
            </CenteredContainer>
            <FlatList
                data={courseIds}
                renderItem={renderXpPointsComponent}
                keyExtractor={(item) => item.toString()}
                vertical
                decelerationRate="fast"
            />
        </View>
    );
};

export default TrophiesScreen;