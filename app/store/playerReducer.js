import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Alert } from 'react-native'
import TrackPlayer, { State } from 'react-native-track-player'
import RNFetchBlob from 'rn-fetch-blob'
import { doesFileExist, getFilePath } from '../common/functions'
import { tracks } from '../components/tracksList/tracks'
import { deleteDownload, download } from './Download'
import { hasPermissions } from './Permissions'
import { store } from './store'

const initialState = {
  value: 0,
  hasPermissions: false,
  currentTrack: null,
  isPlaying:true,
  tracks: tracks
}

export const init = createAsyncThunk(
  'player/init',
  async () => {

    const state = store.getState().player
    const localtracks = [...state.tracks]
    console.log('before init')
    localtracks.forEach(track=>console.log(track.id,' ',track.isDownloaded))

    for(const track in localtracks){
      const path= `${RNFetchBlob.fs.dirs.MusicDir}/${track.filename}`
      const exists = await RNFetchBlob.fs.exists(path)
      track.isDownloaded = exists
      console.log(track)
      console.log(track.id,'#########',exists)
    }

    return localtracks
  }
)

export const setCurrentTrack = createAsyncThunk(
  'player/set-current-track',
  async (track) => {

    await TrackPlayer.stop()
    await TrackPlayer.reset()


    const local = {
      id: track.id,
      path: `${RNFetchBlob.fs.dirs.MusicDir}/${track.filename}`,
      title: track.title,
      artist: track.artist,
      artwork: track.artwork,
    }
    // delete local.url

    // const localFileExists = await doesFileExist(local.path)
    const localFileExists = await RNFetchBlob.fs.exists(local.path)
    console.log('local============', local)
    console.log('local============', localFileExists)

    if (localFileExists)
      local.url = `file://${local.path}`
    else
      local.url = track.url

    console.log('local============', local)

    TrackPlayer.add(local)
    TrackPlayer.play()



    return track
  }
)

export const togglePlaying = createAsyncThunk(
  'player/toggle-playing',
  async () => {
    const state = await TrackPlayer.getState();

    if (state === State.Playing) {
        TrackPlayer.pause();
        return false
    }

    if (state === State.Paused) {
        TrackPlayer.play();
        return true 
    }

  }
)

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    downloadProgress: (state, action) => {
      const { received, total } = action.payload
      console.log(`recieved ${received} \t total ${total} \t progress ${received / total}`)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(hasPermissions.fulfilled, (state, action) => {
        state.hasPermissions = action.payload
      })
      .addCase(download.fulfilled, (state, action) => {
        // state.hasPermissions = action.payload
        const track = action.payload
        console.log('$$$$$$$$$$$$$$$$', track)
        const index = state.tracks.findIndex(value => value.id === track.id)
        state.tracks[index].isDownloaded = true
        Alert.alert(
          "Download Status",
          "The file has downloaded successfully",
        )
      })
      .addCase(init.fulfilled, (state, action) => {
        // state.hasPermissions = action.payload
        state.tracks = action.payload
        // console.log('after init')
        // state.tracks.forEach(track=>console.log(track.id,' ',track.isDownloaded))

      })
      .addCase(setCurrentTrack.fulfilled,(state,action)=>{
        state.currentTrack = action.payload
        state.isPlaying = true
        console.log('&&&&&&&&&=========> current track in reducer',state.currentTrack)
      })
      .addCase(deleteDownload.fulfilled,(state,action)=>{
        const track = action.payload
        console.log('^^^^^^^^^',track);
      })
      .addCase(togglePlaying.fulfilled,(state,action)=>{
        state.isPlaying = action.payload
      })

  }
})

export const { downloadProgress, setTrack } = playerSlice.actions
export default playerSlice

