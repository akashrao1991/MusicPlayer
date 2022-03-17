import React from 'react';
 
// Import React native Components
import {
  Text,
  View,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
 
// Import RNFetchBlob for the file download
import RNFetchBlob from 'rn-fetch-blob';
 
export const downloadTrack = (track) => {
 
  const checkPermission = async () => {
    
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message:
              'Application needs access to your storage to download File',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Start downloading
          downloadFile();
          console.log('Storage Permission Granted.');
        } else {
          // If permission denied then show alert
          Alert.alert('Error','Storage Permission Not Granted');
        }
      } catch (err) {
        // To handle permission related exception
        console.log("++++"+err);
      }
    
  };
 
  const downloadFile = () => {
   
    // Get today's date to add the time suffix in filename
    let date = new Date();
    // File URL which we want to download
    let FILE_URL = track.url   
    // let FILE_URL = 'https://download.novapdf.com/download/samples/pdf-example-encryption.pdf'   
    // Function to get extention of the file url
    let file_ext = getFileExtention(FILE_URL);
   
    file_ext = '.' + file_ext[0];
   
    // config: To get response by passing the downloading related options
    // fs: Root directory path to download
    const { config, fs } = RNFetchBlob;
    let RootDir = fs.dirs.DownloadDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        path:`${RootDir}/${track.id}${file_ext}`,
        description: 'downloading file...',
        notification: true,
        // useDownloadManager works with Android only
        useDownloadManager: true,   
      },
    };
    config(options)
      .fetch('GET', FILE_URL, { credentials: 'include' })
      .then(res => {
        // Alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        alert('File Downloaded Successfully.');
      })
      .catch(err=>{
          console.log(err)
          console.error(err)
      })
  };
 
  const getFileExtention = fileUrl => {
    // To get the file extension
    return /[.]/.exec(fileUrl) ?
             /[^.]+$/.exec(fileUrl) : undefined;
  }

  checkPermission()
}