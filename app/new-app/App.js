import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import styles from './styles';
import {TracksList} from './TracksList';

const App = () => {
    const { appContainer, content, header, headerTitle } = styles;

    return (
        <SafeAreaView style={appContainer}>
            <StatusBar backgroundColor={'#35427e'} />
            <View style={header}>
                <Text style={headerTitle}>Audio Player</Text>
            </View>
            <View style={content}>
                <TracksList />
            </View>
        </SafeAreaView>
    );
};

export default App;