import { createAsyncThunk } from "@reduxjs/toolkit";
import RNFetchBlob from "rn-fetch-blob";
import { getFilePath } from "../common/functions";
// import { downloadProgress, getFilePath } from "./playerReducer";
import { store } from "./store";

const getFileExtention = fileUrl => {
    // To get the file extension
    return /[.]/.exec(fileUrl) ?
        /[^.]+$/.exec(fileUrl) : undefined;
}


export const deleteDownload = createAsyncThunk(
    'player/delete-download',
    async (track) => {

        const path = `${RNFetchBlob.fs.dirs.MusicDir}/${track.filename}}`
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!',path)
        const fileExists =  await RNFetchBlob.fs.exists(path)
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!',fileExists)

        if(!fileExists)
            return track

        RNFetchBlob.fs.unlink(path)

        return track
    }
)


export const download = createAsyncThunk(
    'player/download',
    async (track) => {

        const path = `${RNFetchBlob.fs.dirs.MusicDir}/${track.filename}}`
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!',path)
        const fileExists =  await RNFetchBlob.fs.exists(path)
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!',fileExists)

        if(fileExists)
            return track


        // File URL which we want to download
        let FILE_URL = track.url
        // let FILE_URL = 'https://download.novapdf.com/download/samples/pdf-example-encryption.pdf'   
        // Function to get extention of the file url
        let file_ext = getFileExtention(FILE_URL);

        file_ext = '.' + file_ext[0];

        // config: To get response by passing the downloading related options
        // fs: Root directory path to download
        const { config } = RNFetchBlob
        let options = {
            // fileCache: true,
            addAndroidDownloads: {
                path: path,
                description: 'downloading file...',
                notification: true,
                // useDownloadManager works with Android only
                useDownloadManager: true,
            },
        };
        const result = await config(options)
            .fetch('GET', FILE_URL, { credentials: 'include' })
            // .progress((received, total) => {
            //     const value = received / total
            //     store.dispatch(downloadProgress({received, total}))
            //     // console.log('progress', received / total)
            // })
/*             .then(res => {
                // Alert after successful downloading
                console.log('res -> ', JSON.stringify(res));
                alert('File Downloaded Successfully.');
            })
 */
            console.log('#############',JSON.stringify(result))

        return track
    }

)
