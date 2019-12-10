import axios from 'axios';

const initialState = {
    leftOutfield: 'Left',
    centerLeftOutField: 'Center Left',
    centerRightOutField: 'Center Right',
    rightOutfield: 'Right',
    thirdBase: 'Third Base',
    secondBase: 'Second Base',
    firstBase: 'First Base',
    shortStop: 'Short Stop',
    pitcher: 'Pitcher',
    catcher: 'Catcher'
};

const GET_PLAYERS = "GET_PLAYERS";

export default function reducer(state=initialState, action) {
  switch (action.type) {
    case (GET_PLAYERS):
      axios.get('/api/getPlayers')
      .then(players => {
        return {
          //
        };
      });
  }
}