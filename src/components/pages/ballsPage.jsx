import React from 'react';
import { withRouter } from 'react-router-dom';

import { BallsList } from '../app-components';

const BallsPage = ({ history, location }) => {
    return (
        <BallsList
            onSelected={itemId => {
                history.push(location.pathname + itemId);
            }}
        />
    );
};

export default withRouter(BallsPage);
