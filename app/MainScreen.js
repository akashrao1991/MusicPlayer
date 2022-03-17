import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { colors } from './common/colors';
import {styles} from './common/styles';
import {TracksList} from './components/tracksList/TracksList';
import { hasPermissions } from './store/playerReducer';
import { store } from './store/store';

const MainScreen = () => {
    const { appContainer,  header, headerTitle } = styles;
    const dispatch = useDispatch()

    useEffect(()=>{
        store.dispatch(hasPermissions())
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