const updateCartItem = (newItem, oldItem = {}, quantity) => {
    const {
        id = newItem.id,
        name = newItem.name,
        count = 0,
        price = 0,
    } = oldItem

    return {
        id,
        name,
        count: count + quantity,
        price: price + quantity * newItem.price,
    }
}

const updateCartItems = (cartItem, item, idx) => {
    if (item.count === 0) {
        return [...cartItem.slice(0, idx), ...cartItem.slice(idx + 1)]
    }
    if (idx === -1) {
        return [...cartItem, item]
    }
    return [...cartItem.slice(0, idx), item, ...cartItem.slice(idx + 1)]
}

const updateOrder = (state, itemId, quantity) => {
    const { stateFetchData, stateCartItem } = state

    const itemFromState = stateFetchData.data.find(el => el.id === itemId)
    const idItemFromCart = stateCartItem.data.findIndex(el => el.id === itemId)
    const itemFromCart = stateCartItem.data[idItemFromCart]

    const newItem = updateCartItem(itemFromState, itemFromCart, quantity)
    const newData = updateCartItems(stateCartItem.data, newItem, idItemFromCart)

    let total = 0
    newData.map(el => (total += el.price))

    return {
        data: newData,
        orderTotal: total,
    }
}

const reduceCartItem = (state, action) => {
    if (state === undefined) {
        return {
            data: [],
            totalPrice: 0,
        }
    }
    switch (action.type) {
        case 'ON_ADD_TO_CARD':
            return updateOrder(state, action.payload, 1)

        case 'ON_REMOVE_FROM_CART':
            return updateOrder(state, action.payload, -1)

        case 'ON_REMOVE_ALL_FROM_CART':
            const item = state.stateCartItem.data.find(
                el => el.id === action.payload
            )

            return updateOrder(state, action.payload, -item.count)
        case 'ON_SUBMIT_CART':
            return {
                data: [],
                totalPrice: 0,
            }
        default:
            return state.stateCartItem
    }
}

export default reduceCartItem
