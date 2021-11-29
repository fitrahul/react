// 1. if you want to change something, dispatch/send an action.
// 2. action always go to reducer.
// 3. reducer returns a new store.
// 4. store updates view.

// Action  : object.   { type: "INC_COUNT", payload: 1 }
// Dispatch: function. take action, give it to reducer.
// Reducer:  function. takes a  current store and action. returns new store.
// View:     whatever. DOM, console, terminal.

// class Store {
//   constructor(reducer, initState) {
//     this.reducer = reducer;
//     this.state = initState;
//   }
//   getState() {
//     return this.state;
//   }
//   dispatch(action) {
//     this.state = this.reducer(this.state, action);  ///most impt step;
//   }
// }



//---------------2nd method-------------//

import { createStore } from "redux";
import { decCount, inCount,Todo } from "./store/action.js";
import { reducer } from "./store/reducer.js";


const init = { count: 0 ,todos:[]};

//const store = new Store(reducer, init);

const store = createStore(reducer,init)  // created store using redux...that's cool

store.getState();
store.dispatch(inCount(1));
store.dispatch(decCount(1));
 store.dispatch(Todo({buy:"bread",status:false}))
console.log(store.getState());
