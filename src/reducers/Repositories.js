'use strict';

import * as type from "../constants";

const initialState = {
    isSuccess: false,
    isLoading: true,
    repositories: []
};

const Repositories = (state = initialState, action) => {
    switch (action.type) {
        case type.GET_REPOSITORIES_SUCCESS:
            return {
                ...state,
                isSuccess: action.state.isSuccess,
                isLoading: action.state.isLoading,
                repositories: action.state.repositories,
            };
        case type.GET_REPOSITORIES_FAILURE:
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
export default Repositories;