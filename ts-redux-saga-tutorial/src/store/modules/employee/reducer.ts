import { IEmployee, IError, IRequest, IResponse } from '../../../apis/modules/employee';
import { createAsyncAction, createActionEntity, createCustomReducer } from '../../lib/index';

const FETCH = createAsyncAction('employee/FETCH');
export const fetch = createActionEntity<IRequest, IResponse, IError>(FETCH);

const actions = { fetch }
const state = { employees: [] as IEmployee[], message: ""}

const reducer = createCustomReducer(state, actions)
    .handleAction(fetch.success, (state, action) => {
        return { ...state, employees: action.payload.data }
    })
    .handleAction(fetch.failure, (state, action) => {
        return { ...state, message: action.payload.message }
    });

export default reducer