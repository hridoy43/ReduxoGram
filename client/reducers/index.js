import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import post from './posts';
import comments from './comments';

const rootReducer = combineReducers({ post, comments, router: routerReducer });

export default rootReducer;