import axios from 'axios'

class Service {
    getAllShoesData = () =>
        axios.get('/shoes/').then(({ data, status }) => {
            if (status === 200) {
                return data
            }
        })

    getShoesData = id =>
        axios.get(`/shoes/${id}`).then(({ data, status }) => {
            if (status === 200) {
                return data
            }
        })

    getAllBallsData = () =>
        axios.get('/balls/').then(({ data, status }) => {
            if (status === 200) {
                return data
            }
        })

    getBallData = id =>
        axios.get(`/balls/${id}`).then(({ data, status }) => {
            if (status === 200) {
                return data
            }
        })

    submitCart = data =>
        axios.put(`/cart/`, data).then(({ data, status }) => {
            if (status === 200) {
                return data
            }
        })
}

export default Service
