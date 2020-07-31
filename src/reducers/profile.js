import * as constants from '../constants';

const initialState = {
    profileData: {},
    isRequestProfileData: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.REQUEST_PROFILE_DATA:
            return {
                ...state,
                isRequestProfileData: true
            }

        case constants.RECEIVE_PROFILE_DATA:
            return {
                ...state,
                profileData: action.profileData,
                isRequestProfileData: false
            }

        default:
            return state
    }
}