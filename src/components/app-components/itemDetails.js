import { connect } from 'react-redux'
import { withDataService } from '../hoc'

import ItemDetails from '../item-details'
import { addToCard } from '../../actions/actionsWithCard'

import actionFetchExactData from '../../actions/actionsFetchExactData'

const mapFetchExactShoesToProps = (dispatch, { getShoesData }) => ({
    fetchData: id => actionFetchExactData(dispatch, getShoesData(id)),
    onAddToCard: id => dispatch(addToCard(id)),
})

const mapFetchExactBallToProps = (dispatch, { getBallData }) => ({
    fetchData: id => actionFetchExactData(dispatch, getBallData(id)),
    onAddToCard: id => dispatch(addToCard(id)),
})

const mapStateToProps = state => ({
    data: state.stateFetchExactData,
})

const ShoesDetails = withDataService(
    connect(mapStateToProps, mapFetchExactShoesToProps)(ItemDetails)
)

const BallsDetails = withDataService(
    connect(mapStateToProps, mapFetchExactBallToProps)(ItemDetails)
)

export { ShoesDetails, BallsDetails }
