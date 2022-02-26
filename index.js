/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './app/new-app/App';
// import App from './app/App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
// import { TrackPlayerService } from './app/new-app/TrackPlayerService';

// AppRegistry.registerComponent(appName, () => App)
AppRegistry.registerComponent(appName, () => App);

// TrackPlayer.registerPlaybackService(()=>require('./app/new-app/TrackPlayerService'))
TrackPlayer.registerPlaybackService(() => require('./app/new-app/TrackPlayerService'))