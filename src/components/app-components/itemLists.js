import { connect } from 'react-redux';

import { withDataService } from '../hoc';
import actionFetchData from '../../actions/actionsFetchData';
import { addToCard } from '../../actions/actionsWithCard';
import ItemList from '../item-list';

const mapAllDataToProps = state => ({
    data: state.stateFetchData,
});

const mapShoesListDispatchToProps = (dispatch, { getAllShoesData }) => ({
    fetchData: actionFetchData(dispatch, getAllShoesData()),
    onAddToCard: id => dispatch(addToCard(id)),
});

const mapBallsListDispatchToProps = (dispatch, { getAllBallsData }) => ({
    fetchData: actionFetchData(dispatch, getAllBallsData()),
    onAddToCard: id => dispatch(addToCard(id)),
});

const ShoesList = withDataService(
    connect(mapAllDataToProps, mapShoesListDispatchToProps)(ItemList),
);

const BallsList = withDataService(
    connect(mapAllDataToProps, mapBallsListDispatchToProps)(ItemList),
);

export { ShoesList, BallsList };
