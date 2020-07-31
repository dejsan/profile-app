import * as constants from '../constants';
import clickSound from '../assets/sound/sound.mp3';

const recieveProfileData = (json) => {
    return dispatch => {
        dispatch({
            type: constants.RECEIVE_PROFILE_DATA,
            profileData: json
        })
    }
}

export const requestProfileData = () => {
    return dispatch => {
        dispatch({ type: constants.REQUEST_PROFILE_DATA })
        return fetch(constants.PROXY_URL + constants.API_URL, { method: "GET" })
            .then(response => response.json())
            .then(json => dispatch(recieveProfileData(json)))
            .catch(err => dispatch({ type: 'profile/FAIL_RECIEVE_PROFILE_DATA', error: err }))
    }
}

export const playProfileSound = () => {
    const sound = new Audio(clickSound)
    sound.play()
    return dispatch => {
        dispatch({
            type: constants.PLAY_SOUND,
        })
    }
}
