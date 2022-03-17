import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import RNFetchBlob from 'rn-fetch-blob'
import { doesFileExist, getFilePath } from '../common/functions'
import { tracks } from '../components/tracksList/tracks'
import { download } from './Download'
import { hasPermissions } from './Permissions'
import { store } from './store'

const initialState = {
  value: 0,
  hasPermissions:false,
  tracks: tracks
}

export const init = createAsyncThunk(
  'player/init',
  async()=>{

    const state = store.getState().player
    const localtracks = [...state.tracks]
    // console.log('before init')
    // localtracks.forEach(track=>console.log(track.id,' ',track.isDownloaded))
/* 
    for(const track in localtracks){
      const path= `${RNFetchBlob.fs.dirs.CacheDir}/${track.filename}`
      const exists = await RNFetchBlob.fs.exists(path)
      track.isDownloaded = exists
      console.log(track)
      console.log(track.id,'#########',exists)
    }
 */    return localtracks
  }
)

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    downloadProgress:(state,action)=>{
      const {received, total} = action.payload
      console.log(`recieved ${received} \t total ${total} \t progress ${received/total}`)
    },
    
  },
  extraReducers: (builder) => {
    builder
    .addCase(hasPermissions.fulfilled,(state,action)=>{
      state.hasPermissions = action.payload
    })
    .addCase(download.fulfilled,(state,action)=>{
      // state.hasPermissions = action.payload
      const track = action.payload
      console.log('$$$$$$$$$$$$$$$$',track)
      const index= state.tracks.findIndex(value=>value.id===track.id)
      state.tracks[index].isDownloaded = true
    })
    .addCase(init.fulfilled,(state,action)=>{
      // state.hasPermissions = action.payload
      state.tracks= action.payload
      // console.log('after init')
      // state.tracks.forEach(track=>console.log(track.id,' ',track.isDownloaded))

    })
    
  }
})

export const { downloadProgress,initialize } = playerSlice.actions
export default playerSlice

