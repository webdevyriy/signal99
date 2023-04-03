import React from 'react';
import {PersonData, PersonGender} from '../../types';
import {AGE_RANGE_OPTIONS} from './AGE_RANGE_OPTIONS';
import styles from './PersonFormItem.module.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
    personData: PersonData;
    handlePersonDataChange: (payload: Partial<PersonData>) => void;
    removePerson: (personId: string) => void;
} 

const PersonFormItem: React.FC<Props> = ({personData, handlePersonDataChange, removePerson}) => {
    const onDataChange = (data: Partial<PersonData>) => handlePersonDataChange({...data, personId: personData.personId});

    return (
        <Box className={styles.PersonFormItemWrapper}>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Full name"
                            variant="outlined"
                            name="name"
                            value={personData.name}
                            onChange={e => onDataChange({name: e.target.value})}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel>Gender *</InputLabel>
                            <Select
                                label="Gender"
                                onChange={e => onDataChange({gender: e.target.value as PersonGender})}>
                                <MenuItem value="">Select gender</MenuItem>
                                <MenuItem value={PersonGender.Male}>Male</MenuItem>
                                <MenuItem value={PersonGender.Female}>Female</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                            <InputLabel>Age *</InputLabel>
                            <Select
                                name="age"
                                label="Gender"
                                onChange={e => onDataChange({age: e.target.value as PersonGender})}>
                                <MenuItem value="">Select age</ MenuItem>
                                {AGE_RANGE_OPTIONS.map(item => (
                                    <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Box sx={{mt: 2}}>
                    <Grid container
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                          spacing={2}>
                        <Grid item>
                            <FormGroup>
                                <FormControlLabel control={
                                    <Checkbox
                                        name="lactoseIntolerance"
                                        checked={personData.lactoseIntolerance}
                                        onChange={e => onDataChange({lactoseIntolerance: e.target.checked})}
                                    />} label="Lactose intolerance"/>
                            </FormGroup>
                        </Grid>

                        <Grid item>
                            <Button
                                type="button"
                                onClick={() => removePerson(personData.personId)}
                                variant="outlined" startIcon={<DeleteIcon/>}>
                                Delete
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default PersonFormItem;
