import React from 'react';
import {PersonDataWithMenu} from '../../types';
import PersonItem from './PersonItem';
import styles from './Menu.module.css';
import Button from "@mui/material/Button";
import {Typography} from "@mui/material";

interface Props {
    personDataWithMenu: PersonDataWithMenu[];
    resetForm: () => void;
}

const Menu: React.FC<Props> = ({personDataWithMenu, resetForm}) => (
    <div>
        <div className={styles.menuTop}>
            <Typography variant="h6" component="h2">
                Daily menu
            </Typography>
            <Button
                type="submit"
                variant="outlined"
                onClick={resetForm}>
                Back
            </Button>
        </div>
        {personDataWithMenu.map(personDataWithMenu => (
            <PersonItem key={personDataWithMenu.personId} personData={personDataWithMenu}/>
        ))}
    </div>
);

export default Menu;
