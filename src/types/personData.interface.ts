import { PersonGender } from './personGender.enum';

export interface PersonData {
    personId: string;
    name?: string;
    gender: PersonGender | null;
    age: string | null;
    lactoseIntolerance: boolean;
}

export default PersonData;