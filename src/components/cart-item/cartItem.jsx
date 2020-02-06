import React from 'react'

import styles from './cartItem.module.css'

const CartItem = props => {
    console.log('lox')
    return (
        <div className="mt-5">
            {props.data.length > 0 ? (
                <div>
                    <table className="table w-75 m-auto ">
                        <thead>
                            <tr className="table-primary">
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Count</th>
                                <th scope="col">Price</th>
                                <th scope="col" />
                            </tr>
                        </thead>
                        <tbody>
                            {props.data.map((data, idx) => {
                                const { id, name, count, price } = data
                                const className =
                                    idx % 2 === 0 ? 'table' : 'table-active'
                                return (
                                    <tr key={id} className={className}>
                                        <th scope="row">{id}</th>
                                        <td>{name}</td>
                                        <td>{count}</td>
                                        <td>{price} $</td>
                                        <td className={styles.icons}>
                                            <i
                                                onClick={() =>
                                                    props.addToCard(id)
                                                }
                                                className="fa-2x fa fa-plus-circle"
                                            />
                                            <i
                                                onClick={() =>
                                                    props.removeFromCard(id)
                                                }
                                                className="fa-2x fa fa-minus-circle"
                                            />
                                            <i
                                                onClick={() =>
                                                    props.removeAllFromCard(id)
                                                }
                                                className="fa-2x fa fa-trash"
                                            />
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-between w-75 m-auto">
                        <button
                            onClick={() => props.submitCart(props.data)}
                            type="button"
                            className="btn btn-outline-success"
                        >
                            Buy
                        </button>
                        <h3>Total Price: {props.orderTotal} $</h3>
                    </div>
                </div>
            ) : (
                <h3>Your Cart is empty</h3>
            )}
        </div>
    )
}

export default CartItem
