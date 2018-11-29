'use strict';

import * as types from '../constants';
import { API } from '../utils/API';

//1
export function getUserData(username) {
    return dispatch =>
        API.getUserData(username)
            .then(json => dispatch(getUserDataSuccess(json)))
            .catch(err => dispatch(getUserDataFailure(err)));
}

function getUserDataSuccess(user = {}) {
    let response = {
        isSuccess: true,
        isLoading: false,
        user: user ? user : {},
    };

    return {
        state: response,
        type: types.GET_USER_DETAILS_SUCCESS,
    };
}

function getUserDataFailure(err) {
    let response = {
        isSuccess: false,
        isLoading: false,
        error: err
    };

    return {
        state: response,
        type: types.GET_USER_DETAILS_FAILURE,
    };
}

//2
export function getOrgs(username) {
    return dispatch =>
        API.getOrgs(username)
            .then(json => dispatch(getOrgsSuccess(json)))
            .catch(err => dispatch(getOrgsFailure(err)));
}

function getOrgsSuccess(organizations = []) {
    let response = {
        isSuccess: true,
        isLoading: false,
        organizations: organizations ? organizations : [],
    };

    return {
        state: response,
        type: types.GET_ORGANIZATIONS_SUCCESS,
    };
}

function getOrgsFailure(err) {
    let response = {
        isSuccess: false,
        isLoading: false,
        error: err
    };

    return {
        state: response,
        type: types.GET_ORGANIZATIONS_FAILURE,
    };
}

//3
export function getRepositories(username) {
    return dispatch =>
        API.getRepositories(username)
            .then(json => dispatch(getRepositoriesSuccess(json)))
            .catch(err => dispatch(getRepositoriesFailure(err)));
}

function getRepositoriesSuccess(repositories = []) {
    let response = {
        isSuccess: true,
        isLoading: false,
        repositories: repositories ? repositories : [],
    };

    return {
        state: response,
        type: types.GET_REPOSITORIES_SUCCESS,
    };
}

function getRepositoriesFailure(err) {
    let response = {
        isSuccess: false,
        isLoading: false,
        error: err
    };

    return {
        state: response,
        type: types.GET_REPOSITORIES_FAILURE,
    };
}

//4
export function getFollowers(username) {
    return dispatch =>
        API.getFollowers(username)
            .then(json => dispatch(getFollowersSuccess(json)))
            .catch(err => dispatch(getFollowersFailure(err)));
}

function getFollowersSuccess(followers = []) {
    let response = {
        isSuccess: true,
        isLoading: false,
        followers: followers ? followers : [],
    };

    return {
        state: response,
        type: types.GET_FOLLOWERS_SUCCESS,
    };
}

function getFollowersFailure(err) {
    let response = {
        isSuccess: false,
        isLoading: false,
        error: err
    };

    return {
        state: response,
        type: types.GET_FOLLOWERS_FAILURE,
    };
}

//5
export function getFollowings(username) {
    return dispatch =>
        API.getFollowing(username)
            .then(json => dispatch(getFollowingsSuccess(json)))
            .catch(err => dispatch(getFollowingsFailure(err)));
}

function getFollowingsSuccess(followings = []) {
    let response = {
        isSuccess: true,
        isLoading: false,
        followings: followings ? followings : [],
    };

    return {
        state: response,
        type: types.GET_FOLLOWINGS_SUCCESS,
    };
}

function getFollowingsFailure(err) {
    let response = {
        isSuccess: false,
        isLoading: false,
        error: err
    };

    return {
        state: response,
        type: types.GET_FOLLOWINGS_FAILURE,
    };
}

//6
export function getStarts(username) {
    return dispatch =>
        API.getStars(username)
            .then(json => dispatch(getStartsSuccess(json)))
            .catch(err => dispatch(getStartsFailure(err)));
}

function getStartsSuccess(stars = []) {
    let response = {
        isSuccess: true,
        isLoading: false,
        stars: stars ? stars : [],
    };

    return {
        state: response,
        type: types.GET_STARTS_SUCCESS,
    };
}

function getStartsFailure(err) {
    let response = {
        isSuccess: false,
        isLoading: false,
        error: err
    };

    return {
        state: response,
        type: types.GET_STARTS_FAILURE,
    };
}