import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Alert, PermissionsAndroid } from 'react-native'
// import { /* downloadFile, downloadTrack, */ hasStoragePermissions } from '../components/tracksList/DownloadFile'
import { tracks } from '../components/tracksList/tracks'
import { download } from './Download'
import { hasPermissions } from './Permissions'

const initialState = {
  value: 0,
  hasPermissions:false,
  tracks: [...tracks]
}

export const downloadTrack = createAsyncThunk(
  '/player/download',
  async (track) => {
    // const hasPermission = await hasStoragePermissions()
    // if (hasPermission) {
    //   downloadFile(track)

    // }
    return false
  }
)


const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    downloadProgress:(state,action)=>{
      const {received, total} = action.payload
      console.log(`recieved ${received} \t total ${total} \t progress ${received/total}`)
    }

  },
  extraReducers: (builder) => {
    builder
    .addCase(downloadTrack.fulfilled, (state, action) => {
      const value = action.payload
      const index = state.tracks.findIndex(track => track.id === value.id)
      state.tracks[index].dowloaded = true
      state.tracks[index].path = value.path
    })
    .addCase(hasPermissions.fulfilled,(state,action)=>{
      state.hasPermissions = action.payload
    })
    .addCase(download.fulfilled,(state,action)=>{
      // state.hasPermissions = action.payload
      console.log('$$$$$$$$$$$$$$$$',JSON.parse(action.payload))
    })
  }
})

export const { downloadProgress } = playerSlice
export default playerSlice
