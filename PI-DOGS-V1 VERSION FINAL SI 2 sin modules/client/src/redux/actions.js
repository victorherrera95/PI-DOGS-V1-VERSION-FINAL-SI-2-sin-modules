import axios from "axios";

export const GET_DOGS = 'GET_DOGS';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const GET_DETAIL = 'GET_DETAIL';
export const GET_BY_NAME = 'GET_BY_NAME';
export const ORDER_BY = 'ORDER_BY';
export const CLEAN = 'CLEAN'
export const GET_BY_TEMPERAMENTS = 'GET_BY_TEMPERAMENTS'
export const FILTER_BY = 'FILTER_BY'
export const CHARGE_ALL = 'CHARGE_ALL'
export const GET_GROUPS= 'GET_GROUPS'
export const GET_BY_HEIGHT= 'GET_BY_HEIGHT'
export const DELETE_ID= 'DELETE_ID'


export function getDogs() {
  return async function (dispatch) {
    try {
      var res = await axios.get("/dogs");
        return dispatch({
        type: GET_DOGS,
        payload: res.data,
      });
    } catch (error) {
      alert(error);
    }
  };
}

export function getDetail(id) {
  return function (dispatch) {
    axios.get(`/dogs/${id}`)
      .then((res) => {dispatch({ type: GET_DETAIL, payload: res.data });
      })
      .catch((err) => {
        return err;
      });
  };
}

export function getTemperaments() {
  return async function (dispatch) {
    try {
      var res = await axios.get("/temperaments");
      return dispatch({
        type: GET_TEMPERAMENTS,
        payload: res.data,
      });
    } catch (error) {
      alert(error);
    }
  };
}

// export function getByName(payload) {
//   return function (dispatch) {
//     dispatch({ type: GET_BY_NAME, payload });
//    };
// }

export function getByName(name) {
  return function (dispatch) {    
    return axios.get(`/dogs?name=${name}`)
     .then((res) => {dispatch({ type: GET_BY_NAME, payload: res.data });
      })
      .catch((err) => {
       alert ('Breed not found, try again...');
      });
  };
}

export function getGroups() {
  return async function (dispatch) {
    try {
      var res = await axios.get("/groups");
      return dispatch({
        type: GET_GROUPS,
        payload: res.data,
      });
    } catch (error) {
      alert(error);
    }
  };}

  export function getByHeight(payload){
    return function (dispatch){
      console.log(payload)
      dispatch({type: GET_BY_HEIGHT, 
        payload})
    }
  }

  

export function getByTemperaments(payload) {
  return function (dispatch) {
    dispatch({ type: GET_BY_TEMPERAMENTS, payload });
    
  };
}


export function filterBy(payload) {
  return function (dispatch) {
    //console.log()
    dispatch({ type: FILTER_BY, payload });
  };
}

export function chargeAll() {
  return function (dispatch) {
    dispatch({ type: CHARGE_ALL });
    };
}

export function orderBy(order) {
  return function (dispatch) {
    dispatch({ type: ORDER_BY, payload: order });
    };
}

export function clean(){
  return function(dispatch){
    dispatch({type:CLEAN})
  }
}

export function deleteId (id) {
	return async function (dispatch) {
		try {
			const info = await axios.delete(`/dogs/${id}`);
			return dispatch({
      type: 'DELETE_ID',
				payload: info.data
			});
		} catch (error) {
			console.log(error);
		}
	};
};

