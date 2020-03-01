export default function fetch(
	state={
		loading: false,
		loaded: false,
		data: [],
		err: null,
	}, action){

	switch(action.type){
		case 'DATA_FETCHING_START' : {
			return {...state, loading: true}
		}
		case 'DATA_FETCHING_SUCCESSFUL' : {
			return {...state, loading:false, loaded: true, data: action.payload}
		}
		case 'DATA_FETCHING_FAILED' : {
			return {...state, loading:false, loaded: false, err: action.err}
		}
		default : {
			return{...state}
		}
	}

}