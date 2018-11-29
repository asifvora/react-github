'use strict';

import * as type from "../constants";

const initialState = {
    isSuccess: false,
    isLoading: true,
    organizations: []
};

const Organizations = (state = initialState, action) => {
    switch (action.type) {
        case type.GET_ORGANIZATIONS_SUCCESS:
            return {
                ...state,
                isSuccess: action.state.isSuccess,
                isLoading: action.state.isLoading,
                organizations: action.state.organizations,
            };
        case type.GET_ORGANIZATIONS_FAILURE:
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
export default Organizations;