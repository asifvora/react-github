'use strict';

import * as type from "../constants";

const initialState = {
    isSuccess: false,
    isLoading: true,
    user: {},
};

const UserProfile = (state = initialState, action) => {
    switch (action.type) {
        case type.GET_USER_DETAILS_SUCCESS:
            return {
                ...state,
                isSuccess: action.state.isSuccess,
                isLoading: action.state.isLoading,
                user: action.state.user,
            };
        case type.GET_USER_DETAILS__FAILURE:
            return {
                ...state,
                isSuccess: action.state.isSuccess,
                isLoading: action.state.isLoading,
                error: action.state.error,
            };
        default:
            return state;
    }
};
export default UserProfile;