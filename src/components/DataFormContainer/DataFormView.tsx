import React from 'react';
import PersonFormItem from '../PersonFormItem';
import { PersonData } from '../../types';
import Button from "@mui/material/Button";
import {Typography} from "@mui/material";
import styles from './DataFormContainer.module.css';

interface Props {
  personData: PersonData[];
  handlePersonDataChange: (payload: Partial<PersonData>) => void;
  addPerson: () => void;
  removePerson: (personId: string) => void;
  handleFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSubmitDisabled: boolean;
}

const DataFormView: React.FC<Props> = ({
  personData,
  handlePersonDataChange,
  addPerson,
  removePerson,
  handleFormSubmit,
  isSubmitDisabled,
}) => (
  <div>
    <div className={styles.formHeader}>
      <Typography variant="h6" component="h2" gutterBottom>
        Greetings! Kindly complete the form provided below, and we'll
        determine the most suitable daily meal plan for both you and your household.
      </Typography>
    </div>
    <form onSubmit={handleFormSubmit}>
      <div>
        {personData.map(personData => (
          <PersonFormItem
            key={personData.personId}
            personData={personData}
            handlePersonDataChange={handlePersonDataChange}
            removePerson={removePerson}
          />
        ))}
      </div>
      <div className={styles.formBottom}>
        <Button
            type="button"
            onClick={addPerson}
            variant="outlined">
          + Add new person
        </Button>
      </div>
      <Button
          fullWidth
          type="submit"
          variant="outlined"
          disabled={isSubmitDisabled}>
        Submit
      </Button>
    </form>
  </div>
);
export default DataFormView;
