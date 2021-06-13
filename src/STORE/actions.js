export const fetchStart = () => ({type: "start"});
export const fetchSucces = data => ({type: "fulfilled", payload: data});
export const fetchFailed = err => ({type: "failed", payload: err});
export const savePreparedData = data => ({type: "saveData", payload: data});

export const fetchData = () => async dispatch => {
  dispatch(fetchStart());
  try {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!resp.ok) return dispatch(fetchFailed(resp.status + resp.statusText));
    const json = await resp.json();
    return dispatch(fetchSucces(json));
  } catch(err) {
      return dispatch(fetchFailed(err));
    }
}