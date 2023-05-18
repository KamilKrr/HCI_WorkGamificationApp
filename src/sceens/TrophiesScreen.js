import React from 'react';
import {TrophyView} from "../components/TrophyView";
import { View } from 'react-native';
import {ScrollView} from "nativewind/dist/preflight";
import {PolarChartComponent} from "../components/PolarChartComponent";
import { BarChartComponent } from '../components/BarChartComponent';
import CenteredContainer from "../components/CenteredContainer";
const TrophiesScreen = () => {
    return (
        <View>
            <CenteredContainer>
                <ScrollView horizontal={true}>
                    <PolarChartComponent />
                    <BarChartComponent />
                </ScrollView>
            </CenteredContainer>
        </View>
    );
};

export default TrophiesScreen;