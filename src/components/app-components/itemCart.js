import { connect } from 'react-redux'

import withDataService from '../hoc/withDataService'
import CartItem from '../cart-item/cartItem'

import {
    addToCard,
    onCartSubmit,
    removeAllFromCard,
    removeFromCard,
} from '../../actions/actionsWithCard'

const mapStateToProps = state => ({
    data: state.stateCartItem.data,
    orderTotal: state.stateCartItem.orderTotal,
})

const mapDispatchToProps = (dispatch, { submitCart }) => ({
    addToCard: (id) => dispatch(addToCard(id)),
    removeFromCard: (id) => dispatch(removeFromCard(id)),
    removeAllFromCard: (id) => dispatch(removeAllFromCard(id)),
    submitCart: (data) => onCartSubmit(dispatch, submitCart(data)),
})

const CartItemList = withDataService(
    connect(mapStateToProps, mapDispatchToProps)(CartItem)
)

export default CartItemList
