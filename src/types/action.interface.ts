import { ActionType } from './actionType.enum';
import { PersonData } from './personData.interface';

export interface Action {
    type: ActionType;
    payload?: Partial<PersonData>;
}

export default Action;