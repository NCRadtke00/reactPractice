import React, { useState, useRef } from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css';
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper.js'
const AddUser = (props) => {
    //const [enteredUsername, setEnteredUsername] = useState('');
    //const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = (nameInputRef.current.value);
        const enteredUserAge = (ageInputRef.current.value);
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invald input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (+enteredUserAge < 1) {
            setError({
                title: 'Invald age',
                message: 'Please enter a valid age (age > 0).'
            }); return;
        }
        props.onAddUser(enteredName, enteredUserAge);
        //setEnteredUsername('');
        //setEnteredAge('');
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
        //using refs creates uncontrolled components as react doesn't control state
    }
    // const usernameChangeHandler = (event) => {
    //     setEnteredUsername(event.target.value);
    // }
    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // }
    const errorHandler = () => {
        setError(null);
    }
    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">UserName</label>
                    <input type="text" id="username" /* < value={enteredUsername} onChange={usernameChangeHandler} */ ref={nameInputRef} />
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" /* value={enteredAge} onChange={ageChangeHandler} */ ref={ageInputRef} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    )
};

export default AddUser
