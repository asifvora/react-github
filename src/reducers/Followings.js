'use strict';

import * as type from "../constants";

const initialState = {
    isSuccess: false,
    isLoading: true,
    followings: []
};

const Followings = (state = initialState, action) => {
    switch (action.type) {
        case type.GET_FOLLOWINGS_SUCCESS:
            return {
                ...state,
                isSuccess: action.state.isSuccess,
                isLoading: action.state.isLoading,
                followings: action.state.followings,
            };
        case type.GET_FOLLOWINGS_FAILURE:
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
export default Followings;