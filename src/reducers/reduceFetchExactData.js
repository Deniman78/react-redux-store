const reduceFetchExactData = (state, action) => {
    if (state === undefined) {
        return {
            data: '',
            loading: false,
            error: false,
        };
    }
    switch (action.type) {
        case 'FETCH_EXACT_DATA_REQUEST':
            return {
                data: '',
                loading: true,
                error: false,
            };
        case 'FETCH_EXACT_DATA_SECCESS':
            return {
                data: action.payload,
                loading: false,
                error: false,
            };
        case 'FETCH_EXACT_DATA_FAIL':
            return {
                data: '',
                loading: false,
                error: true,
            };
        default:
            return state.stateFetchExactData;
    }
};

export default reduceFetchExactData;
