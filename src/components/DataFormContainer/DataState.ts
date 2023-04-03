import {Action, ActionType,  PersonData} from '../../types';

const getDefaultPersonData = (): PersonData => ({
  personId: Date.now().toString(),
  name: '',
  gender: null,
  age: null,
  lactoseIntolerance: false,
});


export const defaultState: PersonData[] = [getDefaultPersonData()];

export const dataReducer = (state: PersonData[], action: Action) => {
  switch (action.type) {

    case ActionType.ADD_PERSON: {
      return [...state, getDefaultPersonData()];
    }

    case ActionType.CHANGE_PERSON_DATA: {
      return state.map(item =>
          item.personId === action.payload?.personId ? { ...item, ...action.payload } : item
      );
    }

    case ActionType.REMOVE_PERSON: {
      return state.filter(item => item.personId !== action.payload?.personId);
    }

    case ActionType.RESET_DATA: {
      return [getDefaultPersonData()];
    }

    default: {
      return state;
    }
  }
};
