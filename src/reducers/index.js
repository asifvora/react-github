'use strict';

import { combineReducers } from "redux";
import user from './User';
import organizations from './Organizations';
import followers from './Followers';
import followings from './Followings';
import repositories from './Repositories';
import stars from './Stars';

const reducer = combineReducers({
    user,
    organizations,
    followers,
    followings,
    repositories,
    stars
});

export default reducer;