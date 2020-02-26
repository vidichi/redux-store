export const initialState = {
  loaded: false,
  loading: false,
  data: [{label:'Eat pizza', complete: false}]
};
export function reducer(
  state= initialState,
  action:{type: string; payload:any})
{
  switch(action.type){
    case 'ADD_TODO':{
      const todo = action.payload;
      const data = [...state.data, todo]
      //...state just copies the state into a new object
      return {
        ...state,
        // replace the data with the new values
        //data: data is same as following line
        data
      };
    }
  }
  // return this when no special action provided
  return state;
}
