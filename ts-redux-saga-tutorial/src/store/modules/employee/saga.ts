import { takeEvery } from "@redux-saga/core/effects";

import API from '../../../apis/modules/employee';
import { createAsyncSaga } from '../../lib';
import { fetch } from './reducer';

const asyncFetchSaga = createAsyncSaga(fetch, API.fetchActivities);

export default [
    takeEvery(fetch.request, asyncFetchSaga)
]