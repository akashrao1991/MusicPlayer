import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { colors } from './common/colors';
import {styles} from './common/styles';
import {TracksList} from './components/tracksList/TracksList';

const MainScreen = () => {
    const { appContainer,  header, headerTitle } = styles;

    return (
        <SafeAreaView style={appContainer}>
            {/*
                <StatusBar backgroundColor={colors.APP_BACKGROUND} />
            
            <View style={header}>
                <Text style={headerTitle}>Audio Player</Text>
            </View>
                        */}

            <TracksList />
        </SafeAreaView>
    );
};

export default MainScreen;