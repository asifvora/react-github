'use strict';

import { request } from './HttpRequests';
const BASE_URL = 'https://api.github.com';

const API = {
    getUserData: (username) => request.get(`${BASE_URL}/users/${username}`),
    getOrgs: (username) => request.get(`${BASE_URL}/users/${username}/orgs`),
    getRepositories: (username) => request.get(`${BASE_URL}/users/${username}/repos?per_page=250`),
    getStars: (username) => request.get(`${BASE_URL}/users/${username}/starred?per_page=250`),
    getFollowers: (username) => request.get(`${BASE_URL}/users/${username}/followers?per_page=250`),
    getFollowing: (username) => request.get(`${BASE_URL}/users/${username}/following?per_page=250`),
}

export { API };
