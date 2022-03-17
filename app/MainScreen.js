import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { colors } from './common/colors';
import {styles} from './common/styles';
import {TracksList} from './components/tracksList/TracksList';
import { hasPermissions } from './store/Permissions';
import { init, initialize } from './store/playerReducer';
import { store } from './store/store';

const MainScreen = () => {
    const { appContainer,  header, headerTitle } = styles;

    useEffect(()=>{

        store.dispatch(hasPermissions())
        store.dispatch(init())

    },[])

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