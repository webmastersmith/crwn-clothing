import { DirectoryActionTypes } from './directory.types'
import { directory } from './directory.data'

const INITITAL_STATE = {
  mainDirectory: directory,
}

const directoryReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case DirectoryActionTypes.GET_DIRECTORY:
      return [...directory]
    default:
      return state
  }
}

export default directoryReducer
