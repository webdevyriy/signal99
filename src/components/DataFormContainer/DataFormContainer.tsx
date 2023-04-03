import React, {useReducer, useState, useMemo} from 'react';
import Menu from '../Menu';
import DataFormView from './DataFormView';
import {dataReducer, defaultState} from './DataState';
import getRandomIntegerInRange from '../../service/getRandomIntegerInRange';
import {ActionType, PersonData, PersonDataWithMenu} from '../../types';

const DataFormContainer: React.FC = () => {
    const [data, dispatch] = useReducer(dataReducer, defaultState);
    const [personDataWithMenu, setPersonDataWithMenu] = useState<PersonDataWithMenu[]>([]);

    const isSubmitDisabled = useMemo(
        () => {
            const isEmpty = data.length === 0;
            const isMissingData = !data.every(({name, age, gender}) => !!name && !!age && !!gender);
            return isEmpty || isMissingData;
        },
        [data]
    );

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const personMenu = getRandomIntegerInRange(data);
        setPersonDataWithMenu(personMenu);
    };
    const handleResetForm = () => {
        setPersonDataWithMenu([]);
        dispatch({type: ActionType.RESET_DATA});
    };

    const handleChangePersonData = (payload: Partial<PersonData>) =>
        dispatch({type: ActionType.CHANGE_PERSON_DATA, payload});

    const handleAddPerson = () => dispatch({type: ActionType.ADD_PERSON});
    const handleRemovePerson = (personId: string) =>
        dispatch({type: ActionType.REMOVE_PERSON, payload: {personId}});

    return (
        <main>
            {personDataWithMenu.length ? (
                <Menu personDataWithMenu={personDataWithMenu} resetForm={handleResetForm}/>
            ) : (
                <DataFormView
                    personData={data}
                    handlePersonDataChange={handleChangePersonData}
                    addPerson={handleAddPerson}
                    removePerson={handleRemovePerson}
                    handleFormSubmit={handleFormSubmit}
                    isSubmitDisabled={isSubmitDisabled}
                />
            )}
        </main>
    );
};

export default DataFormContainer;
