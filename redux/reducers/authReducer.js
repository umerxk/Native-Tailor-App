
  const initialState = {
    SearchValue : "",
    recentSearch : ""
  };
  
  function authReducer(state = initialState, action) {
    switch (action.type) {
      case "TEST" : {
        return {
          ...state,
          SearchValue : action.payload
        }
      }
      
      case "RECENT_SEARCH" : {
        return{
          ...state,
          recentSearch : action.payload
        }
      }
      default:
        return state;
    }
  }
  
  export default authReducer;
  