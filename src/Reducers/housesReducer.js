
const housesList = [
    'Serpentard',
    'Griffondor',
    'Serdaigle',
    'Pouffsoufle',
  ]

  export default function (state = {housesList, selectedHouse: "Serdaigle"}, action) {
      //let indexSelected
    switch(action.type) {
      case 'UPDATE_CHOICE_WITH_MY_INDEX':
        
        return {...state, selectedHouse: housesList[action.indexSelected]};
  
      /*case 'EAT':
        // decrements the number of remaining bites (cannot go below 0)
        // note that the number of bites is given as a payload in the EAT action
        return {
          ...state,
          remainingBites: Math.max(0, state.remainingBites - action.bites)
        };
  
      case 'ROT':
        // changes the apple's color to brown
        return {...state, color: 'brown'};*/
  
      // we don't know how to handle other actions,
      // so let's just do nothing and return the apple
      default:
        return state;
    }
  }
  