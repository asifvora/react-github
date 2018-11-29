'use strict';

import * as type from "../constants";

const initialState = {
    isSuccess: false,
    isLoading: true,
    followers: []
};

const Followers = (state = initialState, action) => {
    switch (action.type) {
        case type.GET_FOLLOWERS_SUCCESS:
            return {
                ...state,
                isSuccess: action.state.isSuccess,
                isLoading: action.state.isLoading,
                followers: action.state.followers,
            };
        case type.GET_FOLLOWERS_FAILURE:
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
export default Followers;