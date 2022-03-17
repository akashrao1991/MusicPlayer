import { Image } from 'react-native';
import TrackPlayer from 'react-native-track-player';

export const tracks = [
    // {
    //     id: '1',
    //     url: require('../../resources/audio/Warm-Memories-Emotional-Inspiring-Piano.mp3'),
    //     title: 'Warm Memories Emotional Inspiring Piano',
    //     artist: 'The Epic Hero',
    //     artwork: Image.resolveAssetSource(require('../../resources/audio/Warm-Memories-Emotional-Inspiring-Piano.jpg')).uri,
    //     album: '',
    //     duration:127,
    // },
    // {
    //     id: '2',
    //     url: require('../../resources/audio/Sunny.mp3'),
    //     title: 'Sunny',
    //     artist: 'LiQWYD',
    //     artwork: Image.resolveAssetSource(require('../../resources/audio/Sunny.jpg')).uri,
    //     album: '',
    //     duration:138,
    // },
    // {
    //     id: '3',
    //     url: require('../../resources/audio/Fluffing-a-Duck.mp3'),
    //     title: 'Fluffing a Duck',
    //     artist: 'Kevin MacLeod',
    //     artwork: Image.resolveAssetSource(require('../../resources/audio/Fluffing-a-Duck.jpg')).uri,
    //     album: '',
    //     duration:67,
    // },
    // {
    //     id: '4',
    //     url: require('../../resources/audio/Feel-Good.mp3'),
    //     title: 'Feel Good',
    //     artist: 'MusicbyAden',
    //     artwork: Image.resolveAssetSource(require('../../resources/audio/Feel-Good.jpg')).uri,
    //     album: '',
    //     duration:158,
    // },
    // {
    //     id: '5',
    //     url: require('../../resources/audio/alexander-nakarada-superepic.mp3'),
    //     title: 'superepic',
    //     artist: 'Alexander Nakarada',
    //     artwork: Image.resolveAssetSource(require('../../resources/audio/alexander-nakarada-superepic.jpg')).uri,
    //     album: '',
    //     duration:44,
    // },
    // {
    //     id: '6',
    //     url: require('../../resources/audio/Good-Morning.mp3'),
    //     title: 'Good Morning',
    //     artist: 'MaxKoMusic',
    //     artwork: Image.resolveAssetSource(require('../../resources/audio/Good-Morning.jpg')).uri,
    //     album: '',
    //     duration:121,
    // },





    {
        id: '1',
        url: 'https://www.bensound.com/bensound-music/bensound-ukulele.mp3',
        title: 'Ukelele',
        artist: 'Benjamin Tissot',
        artwork: 'https://www.bensound.com/bensound-img/ukulele.jpg',
        album: '',
        duration: 146,
        filename:'1-bensound-ukulele.mp3',
        isDownloaded:false,
    },
    
    {
        id: '2',
        url: 'https://www.bensound.com/bensound-music/bensound-creativeminds.mp3',
        title: 'Creative Minds',
        artist: 'Benjamin Tissot ',
        artwork: 'https://www.bensound.com/bensound-img/creativeminds.jpg',
        album: 'Ben Sound',
        duration: 147,
        filename:'2-bensound-creativeminds.mp3',
        isDownloaded:false,
    },


    {
        id: '3',
        url: 'https://www.bensound.com/bensound-music/bensound-cute.mp3',
        title: 'Cute',
        artist: 'Benjamin Tissot',
        artwork: 'https://www.bensound.com/bensound-img/cute.jpg',
        album: '',
        duration: 194,
        filename:'3-bensound-cute.mp3',
        isDownloaded:false,
    },


    {
        id: '4',
        url: 'https://www.bensound.com/bensound-music/bensound-sunny.mp3',
        title: 'Sunny',
        artist: 'Benjamin Tissot',
        artwork: 'https://www.bensound.com/bensound-img/sunny.jpg',
        album: 'Artificial Music',
        duration: 140,
        filename:'4-bensound-sunny.mp3',
        isDownloaded:false,
    },


    {
        id: '5',
        url: 'https://www.bensound.com/bensound-music/bensound-tomorrow.mp3',
        title: 'Tomorrow',
        artist: '',
        artwork: 'https://www.bensound.com/bensound-img/tomorrow.jpg',
        album: 'INOSSI',
        duration: 294,
        filename:'5-bensound-tomorrow.mp3',
        isDownloaded:false,
    },

    {
        id: '6',
        url: 'https://www.bensound.com/bensound-music/bensound-energy.mp3',
        title: 'Energy',
        artist: 'Benjamin Tissot',
        artwork: 'https://www.bensound.com/bensound-img/energy.jpg',
        album: 'Energy',
        duration: 179,
        filename:'6-bensound-energy.mp3',
        isDownloaded:false,
    },
/* 

    {
        id: '1',
        url: 'https://www.chosic.com/wp-content/uploads/2021/07/The-Epic-Hero-Epic-Cinematic-Keys-of-Moon-Music.mp3',
        title: 'Keys of moon',
        artist: 'The Epic Hero',
        artwork: 'https://picsum.photos/id/1003/200/300',
        album: '',
        duration: 149,
    },
    
    {
        id: '2',
        url: 'https://www.chosic.com/wp-content/uploads/2021/07/Raindrops-on-window-sill.mp3',
        title: 'Raindrops on window sill',
        artist: '',
        artwork: 'https://picsum.photos/id/10/200/300',
        album: 'Chosic',
        duration: 119,
    },
    {
        id: '3',
        url: 'https://www.chosic.com/wp-content/uploads/2021/07/purrple-cat-equinox.mp3',
        title: 'Equinox',
        artist: 'Purple Cat',
        artwork: 'https://picsum.photos/id/1016/200/300',
        album: '',
        duration: 140,
    },
    {
        id: '4',
        url: 'https://www.chosic.com/wp-content/uploads/2021/04/And-So-It-Begins-Inspired-By-Crush-Sometimes.mp3',
        title: 'And So It Begins',
        artist: '',
        artwork: 'https://picsum.photos/id/1019/200/300',
        album: 'Artificial Music',
        duration: 208,
    },
    {
        id: '5',
        url: 'https://www.chosic.com/wp-content/uploads/2021/05/inossi-got-you.mp3',
        title: 'Got You',
        artist: '',
        artwork: 'https://picsum.photos/id/103/200/300',
        album: 'INOSSI',
        duration: 178,
    },
    {
        id: '6',
        url: 'https://www.chosic.com/wp-content/uploads/2021/04/kvgarlic__largestreamoverloginforestmarch.mp3',
        title: 'Peaceful water stream',
        artist: '',
        artwork: 'https://picsum.photos/id/1038/200/300',
        album: 'Chosic',
        duration: 66,
    },
 */




];