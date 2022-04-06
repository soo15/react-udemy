import React, {useState} from 'react';

import Card from '../Ui/Card';
import Button from '../Ui/Button';
import ErrorModal from '../Ui/ErrorModal';

import classes from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername ] = useState('');
    const [enteredAge, setEnteredAge ] = useState('');
    const [error, setError] = useState()
    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'invalid input',
                message: 'Please enter a valid name and age (non-empty values)'
            });
            return;
        }

        if(+enteredAge < 1) {
            setError({
                title: 'invalid age',
                message: 'Please enter a valid age (> 0)'
            });
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    }

    const userNameChangeHandeler = (evnet) => {
        setEnteredUsername(evnet.target.value);
    }

    const ageChangeHandeler = (evnet) => {
        setEnteredAge(evnet.target.value);
    }

    const errorHandler = () => {
        setError(null);
    }

    return (
    <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={userNameChangeHandeler}/>
                    <label htmlFor="age">Age (years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandeler}/>
                    <Button type="submit">Add User</Button>
                </form>
        </Card>
    </div>
    );
};



export default AddUser;
