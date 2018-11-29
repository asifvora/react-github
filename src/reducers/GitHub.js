'use strict';

import * as type from "../constants";

const initialState = {
    success: false,
    isLoading: true,
    userDetails: {},
};

const GitHub = (state = initialState, action) => {
    switch (action.type) {
        case type.GET_USER_DETAILS_SUCCESS:
            return {
                ...state,
                success: action.state.success,
                isLoading: action.state.isLoading,
                userDetails: action.state.userDetails,
            };
        case type.GET_USER_DETAILS__FAILURE:
            return {
                ...state,
                success: action.state.success,
                isLoading: action.state.isLoading,
                error: action.state.error,
            };
        default:
            return state;
    }
};
export default GitHub;