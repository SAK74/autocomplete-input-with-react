const initialState = {
    names: [],
    status: "iddle",
    error: null,
    preparedData: ""
  }
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type){
      case "start": return { ...state, status: "loading"};
      case "fulfilled": const names = action.payload.map(user => user.name);
        return {...state, status: "complete", names: names};
      case "failed": return { ...state, status: "failed", error: action.payload};
      case "saveData": return { ...state, preparedData: action.payload};
      default: return state;
    }
  }