import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import React from 'react';
import { Alert, PermissionsAndroid } from 'react-native'
// import { /* downloadFile, downloadTrack, */ hasStoragePermissions } from '../components/tracksList/DownloadFile'
import { tracks } from '../components/tracksList/tracks'

const initialState = {
  value: 0,
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

export const hasPermissions = createAsyncThunk(
  '/player/permissions',
  async () =>{
    console.log('before premission request')
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Storage Permission Required',
        message:
          'Application needs access to your storage to download File',
      }
    )
    console.log('after premission request')

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      // Start downloading
      // downloadFile(track);
      console.log('Storage Permission Granted.')
      return true
    } else {
      // If permission denied then show alert
      Alert.alert('Error','Storage Permission Not Granted')
    }
    return false
  }
)

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    

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

    })
  }
})


export default playerSlice
