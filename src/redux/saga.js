// import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'

// //workersaga
// function* fetchProduct(action) {
//   try {
//     const product = yield call('https://jsonplaceholder.typicode.com/todos/1')
//     yield put({ type: 'USER_FETCH_SUCCEEDED', product: product })
//     console.log(product)
//   } catch (e) {

//   }
// }
// //watchsaga
// function watchFetchData() {
//   yield takeEvery('USER_FETCH_REQUESTED', fetchProduct)
// }

// export default function* rootSaga() {
//   yield all([
//     watchFetchData()
//     // Add more watcher sagas if needed
//   ]);
// }