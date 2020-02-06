import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../header';
import { HomePage, ShoesPage, BallsPage, CartPage } from '../pages';
import { ShoesDetails, BallsDetails } from '../app-components';

const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/sportshoes/" exact component={ShoesPage} />
                <Route
                    path="/sportshoes/:id"
                    render={({ match }) => {
                        const { id } = match.params;
                        return <ShoesDetails itemId={id} />;
                    }}
                />

                <Route path="/sportballs/" exact component={BallsPage} />
                <Route
                    path="/sportballs/:id"
                    render={({ match }) => {
                        const { id } = match.params;
                        return <BallsDetails itemId={id} />;
                    }}
                />

                <Route path="/cart" component={CartPage} />
            </Switch>
        </div>
    );
};

export default App;
