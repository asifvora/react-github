'use strict';

import * as type from "../constants";

const initialState = {
    isSuccess: false,
    isLoading: true,
    stars: [],
};

const Stars = (state = initialState, action) => {
    switch (action.type) {
        case type.GET_STARTS_SUCCESS:
            return {
                ...state,
                isSuccess: action.state.isSuccess,
                isLoading: action.state.isLoading,
                stars: action.state.stars,
            };
        case type.GET_STARTS_FAILURE:
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
export default Stars;