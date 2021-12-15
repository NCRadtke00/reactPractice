import React from 'react'
import Card from '../UI/Card'
import classes from './AddUser.module.css';

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    }
    return (
        <Card className={classes.input}>
            <from onSubmit={addUserHandler}>
                <label htmlFor="username">UserName</label>
                <input type="text" id="username" />
                <label htmlFor="age">Age</label>
                <input type="number" id="age" />
                <button type="submit">Add User</button>
            </from>
        </Card>
    )
};

export default AddUser
