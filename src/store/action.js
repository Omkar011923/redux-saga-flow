// actions.js
export const SOME_ACTION = 'SOME_ACTION';
export const SOME_ACTION_SUCCESS = 'SOME_ACTION_SUCCESS';
export const START_LOADER = "START_LOADER";

export const someAction = () => ({
    type: SOME_ACTION,
});

export const someActionSuccess = (data) => ({
    type: SOME_ACTION_SUCCESS,
    payload: data,
});

export const startLoader = () => ({
  type:START_LOADER,
})