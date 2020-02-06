import React from 'react';
import { withRouter } from 'react-router-dom';

import { ShoesList } from '../app-components';

const ShoesPage = ({ history, location }) => {
    return (
        <ShoesList
            onSelected={itemId => {
                history.push(location.pathname + itemId);
            }}
        />
    );
};

export default withRouter(ShoesPage);
