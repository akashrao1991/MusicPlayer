import RNFetchBlob from "rn-fetch-blob"

export const isNull = value => value===null

export const isUndefined = value => value===undefined

export const hasValue = value => !isNull(value) && !isUndefined(value)

// export const doesFileExist = async( track)  => await RNFetchBlob.fs.exists(getFilePath(track)) 

export const doesFileExist = async (path) => await RNFetchBlob.fs.exists(path) 

export const getFilePath = track => `${RNFetchBlob.fs.dirs.MusicDir}/${track.filename}`
