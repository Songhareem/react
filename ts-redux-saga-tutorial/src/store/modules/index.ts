import { combineReducers } from 'redux';
import { combineSagas } from '../lib';

import employee from './employee';
import activity from './activity';

export default {
    rootRedecer: combineReducers({ 
        employee: employee.reducer,
        activity: activity.reducer,
    }),
    rootSagas: combineSagas({ 
        employee: employee.saga, 
        activity: activity.saga,
    })
}