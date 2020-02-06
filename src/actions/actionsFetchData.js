const actionFetchDataRequest = () => ({
    type: 'FETCH_DATA_REQUEST',
});

const actionFetchDataSuccess = data => ({
    type: 'FETCH_DATA_SUCCESS',
    payload: data,
});

const actionFetchDataFail = () => ({
    type: 'FETCH_DATA_FAIL',
});

const actionFetchData = (dispatch, service) => () => {
    dispatch(actionFetchDataRequest());
    setTimeout(() => {
        service
            .then(data => {
                dispatch(actionFetchDataSuccess(data));
            })
            .catch(() => {
                dispatch(actionFetchDataFail());
            });
    }, 1000)

};

export default actionFetchData;
