import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';

function fetchUnits() {
  return axios({
    method: "get",
    url: 'https://api.coingecko.com/api/v3/coins/list'
  });
}


fetchUnits().then(response => console.log('response is ', response));

export function* watcherSaga() {
  yield takeLatest("REQUESTED_UNITS", workerSaga);
}

function* workerSaga() {
  try {
    const response = yield call(fetchUnits);
    const units = response.data;
    console.log('saga units are', units);
    yield console.log(units);
    yield put({ type: "REQUEST_SUCCESS", units })
  } catch (error) {
    yield put({ type: "REQUEST_FAILED", error })
  }

}

