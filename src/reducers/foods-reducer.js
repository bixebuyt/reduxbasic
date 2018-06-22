import {createStore} from 'redux';

var initialState = {
  status: false,
  sort: {
    by: 'name',
    value: 1
  }
}

var myReducer = (state = initialState, action) => {
  if (action.type === 'TOOGLE_STATUS') {
    state.status = !state.status;
    return state;
  }
  if (action.type === 'SORT') {
      state.sort = {
        by: action.sort.by,
        value: action.sort.value
      }
      return state;
  }
}

const store = createStore(myReducer);

var action = {type : 'TOOGLE_STATUS'};
store.dispatch(action);

console.log('default - ',store.getState());

var sortAction = {
  type: 'SORT',
  sort: {
    by: 'hihi',
    value: -1
  }
}
store.dispatch(sortAction);
