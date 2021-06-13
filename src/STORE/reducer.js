const initialState = {
    names: [],
    status: "iddle",
    error: null,
    preparedData: ""
  }
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type){
      case "start": return { ...state, status: "loading"};
      case "fulfilled": return {...state, status: "complete", names: action.payload.map(user => user.name)};
      case "failed": return { ...state, status: "failed", error: action.payload};
      case "saveData": return { ...state, preparedData: action.payload};
      default: return state;
    }
  }