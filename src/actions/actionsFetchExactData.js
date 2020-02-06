const actionFetchExactDataRequest = () => ({
    type: 'FETCH_EXACT_DATA_REQUEST',
})

const actionFetchExactDataSuccess = data => ({
    type: 'FETCH_EXACT_DATA_SECCESS',
    payload: data,
})

const actionFetchExactDataFail = () => ({
    type: 'FETCH_EXACT_DATA_FAIL',
})

const actionFetchExactData = (dispatch, service) => () => {
    dispatch(actionFetchExactDataRequest())
    setTimeout(() => {
        service
            .then(data => {
                dispatch(actionFetchExactDataSuccess(data))
            })
            .catch(() => {
                dispatch(actionFetchExactDataFail())
            })
    }, 1000)
}

export default actionFetchExactData
