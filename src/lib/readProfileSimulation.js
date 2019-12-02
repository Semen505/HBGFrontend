// Written by Fir
// profile read request test

import { readProfileReq } from '../profile/actions'
export function profileReadSimulation ({ dispatch }) {
    // by having a function that returns a function we satisfy 2 goals:
    //
    // 1. grab access to our Redux Store and thus Dispatch to call actions
    // 2. Return a function that includes all the proper .. properties that
    //    React Router expects for us to include and use
    //
    // `nextState` - the next "route" we're navigating to in the router
    // `replace` - a helper to change the route
    // `next` - what we call when we're done messing around
    //
    console.log("simulation for profile read");
    return (nextState, replace, next) => {
      dispatch(readProfileReq('user1'))

      //replace('profile')
      return next()
    }
  }