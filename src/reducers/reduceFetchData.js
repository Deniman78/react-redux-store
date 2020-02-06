const reduceFetchData = (state, action) => {
    if (state === undefined) {
        return {
            data: [],
            loading: true,
            error: false,
        };
    }
    switch (action.type) {
        case 'FETCH_DATA_REQUEST':
            return {
                data: [],
                loading: true,
                error: false,
            };
        case 'FETCH_DATA_SUCCESS':
            return {
                data: action.payload,
                loading: false,
                error: false,
            };
        case 'FETCH_DATA_FAIL':
            return {
                data: [],
                loading: false,
                error: true,
            };
        default:
            return state.stateFetchData;
    }
};

export default reduceFetchData;
