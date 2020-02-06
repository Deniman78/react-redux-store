import reduceFetchData from './reduceFetchData';
import reduceFetchExactData from './reduceFetchExactData';
import reduceCartItem from './reduceCartItem';

const reducer = (state, action) => ({
    stateFetchData: reduceFetchData(state, action),
    stateFetchExactData: reduceFetchExactData(state, action),
    stateCartItem: reduceCartItem(state, action),
});

export default reducer;
