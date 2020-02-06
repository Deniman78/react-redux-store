import React from 'react';

import { ServiceConsumer } from '../context';

const withDataService = Wrapper => {
    return props => {
        return (
            <ServiceConsumer>
                {service => {
                    return <Wrapper {...props} {...service} />;
                }}
            </ServiceConsumer>
        );
    };
};

export default withDataService;
