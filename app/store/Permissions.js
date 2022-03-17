import { createAsyncThunk } from "@reduxjs/toolkit"
import { PermissionsAndroid } from "react-native"

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
  