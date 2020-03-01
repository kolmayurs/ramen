import axios from 'axios';

export function fetchData() {
    return function(dispatch) {
        dispatch({ type: 'DATA_FETCHING_START' });
        axios.get('http://starlord.hackerearth.com/TopRamen')
            .then(res => {
                setTimeout(() => {
                    dispatch({ type: 'DATA_FETCHING_SUCCESSFUL', payload: res.data });
                }, 1000)
            })
            .catch(err => {
                dispatch({ type: 'DATA_FETCHING_FAILED', err: err });
            })
    }
}