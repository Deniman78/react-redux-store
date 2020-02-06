import React, { Component } from 'react'
import Item from '../item/item'
import Spinner from '../spinner'

import styles from './itemList.module.css'

class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData()
    }
    render() {
        const {
            data: { data, loading },
        } = this.props
        return (
            <div className={styles.itemListContainer}>
                {loading ? (
                    <Spinner />
                ) : (
                    data.map(item => {
                        return <Item {...this.props} key={item.id} {...item} />
                    })
                )}
            </div>
        )
    }
}

export default ItemList
