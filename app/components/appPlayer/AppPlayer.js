import TrackPlayer,{Capability} from 'react-native-track-player';

export class AppPlayer {

    static selectedTraccdk

    static initializePlayer = async () => {
        try {

            TrackPlayer.updateOptions({
                stopWithApp: false,
                // Media controls capabilities                
                capabilities: [
                    Capability.Play,
                    Capability.Pause,
                    Capability.SkipToNext,
                    Capability.SkipToPrevious,
                    Capability.Stop,
                ],
            
                // Capabilities that will show up when the notification is in the compact form on Android
                compactCapabilities: [
                    Capability.Play, 
                    Capability.Pause
                ],            
            })

            await TrackPlayer.setupPlayer()

        } catch (e) {
            console.log(e)
            // to-do handle error
        }
    }

    static secondsToHHMMSS = (seconds) => {
        // credits - https://stackoverflow.com/a/37096512
        seconds = Number(seconds);
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = Math.floor((seconds % 3600) % 60);

        const hrs = h > 0 ? (h < 10 ? `0${h}:` : `${h}:`) : '';
        const mins = m > 0 ? (m < 10 ? `0${m}:` : `${m}:`) : '00:';
        const scnds = s > 0 ? (s < 10 ? `0${s}` : s) : '00';
        return `${hrs}${mins}${scnds}`;
    };
}

