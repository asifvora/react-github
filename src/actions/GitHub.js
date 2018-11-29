'use strict';

import * as types from '../constants';
import { API } from '../utils/API';

export function getUserData(username) {
    return dispatch =>
        API.getUserData(username)
            .then(json => dispatch(getUserDataSuccess(json)))
            .catch(err => dispatch(getUserDataFailure(err)));
}

function getUserDataSuccess({ userDetails = {} }) {
    let response = {
        success: true,
        isLoading: false,
        userDetails: userDetails ? userDetails : {},
    };

    return {
        state: response,
        type: types.GET_USER_DETAILS_SUCCESS,
    };
}

function getUserDataFailure(err) {
    let response = {
        success: false,
        isLoading: false,
        error: err
    };

    return {
        state: response,
        type: types.GET_USER_DETAILS__FAILURE,
    };
}
