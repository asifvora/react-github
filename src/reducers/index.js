'use strict';

import { combineReducers } from "redux";
import userProfile from './UserProfile';

const reducer = combineReducers({ userProfile });

export default reducer;