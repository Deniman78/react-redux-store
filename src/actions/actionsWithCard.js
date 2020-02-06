export const addToCard = itemId => ({
    type: 'ON_ADD_TO_CARD',
    payload: itemId,
})

export const removeFromCard = itemId => ({
    type: 'ON_REMOVE_FROM_CART',
    payload: itemId,
})

export const removeAllFromCard = itemId => ({
    type: 'ON_REMOVE_ALL_FROM_CART',
    payload: itemId,
})

const submitCart = () => ({
    type: 'ON_SUBMIT_CART',
})

export const onCartSubmit = (dispatch, service) => {
    service.then(() => {
        dispatch(submitCart())
    })
}
