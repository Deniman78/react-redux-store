import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import styles from './itemDetails.module.css'
import Spinner from '../spinner'

class ItemDetails extends Component {
    componentDidMount() {
        this.props.fetchData(this.props.itemId)()
    }

    render() {
        const { id, name, img, description, price } = this.props.data.data

        return (
            <div className={styles.itemContainer}>
                {!id ? (
                    <Spinner />
                ) : (
                    <div>
                        <img className={styles.itemImage} src={img} alt="#" />
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <div className={styles.lowBottons}>
                            <div>
                                <span className={styles.price}>{price} $</span>
                            </div>
                            <div>
                                <span
                                    onClick={() => this.props.onAddToCard(id)}
                                    className="nav-link"
                                >
                                    <i className="fa-4x fa fa-cart-plus"></i>
                                </span>
                                <span
                                    onClick={() => this.props.history.goBack()}
                                >
                                    <i className="fa-4x fa fa-angle-right"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default withRouter(ItemDetails)
