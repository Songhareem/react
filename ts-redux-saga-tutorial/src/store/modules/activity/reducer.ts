import { IActivity, IError, IRequest } from '../../../apis/modules/activity';
import { createAsyncAction, createActionEntity, createCustomReducer } from '../../lib/index';

const FETCH = createAsyncAction('activity/FETCH');
export const fetch = createActionEntity<IRequest, IActivity[], IError>(FETCH);

const actions = { fetch }
const state = { activities: [] as IActivity[], message: ""}

const reducer = createCustomReducer(state, actions)
    .handleAction(fetch.success, (state, action) => {
        return { ...state, activities: action.payload }
    })
    .handleAction(fetch.failure, (state, action) => {
        return { ...state, message: action.payload.message }
    });

export default reducer