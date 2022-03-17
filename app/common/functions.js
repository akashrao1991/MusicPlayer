
export const isNull = value => value===null

export const isUndefined = value => value===undefined

export const hasValue = value => !isNull(value) && !isUndefined(value)

// export const doesFileExist = async( track)  => await RNFetchBlob.fs.exists(getFilePath(track)) 

// export const getFilePath = track => `${store.getState().player.RootDir}/${track.filename}`
