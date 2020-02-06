import React from 'react';

import styles from './item.module.css';

const Item = ({
    onAddToCard,
    onSelected,
    id,
    img,
    name,
    description,
    price,
}) => {
    return (
        <div className={styles.itemContainer}>
            <img className={styles.itemImage} src={img} alt="#" />
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.lowBottons}>
                <div>
                    <span className={styles.price}>{price} $</span>
                </div>
                <div>
                    <span onClick={() => onAddToCard(id)} className="nav-link">
                        <i className="fa-2x fa fa-cart-plus"></i>
                    </span>
                    <span className="nav-link">
                        <i
                            onClick={() => onSelected(id)}
                            className="fa-2x fa fa-info-circle"></i>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Item;
