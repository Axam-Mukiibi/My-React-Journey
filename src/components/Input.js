import Button from "../Util/Button";
import { useState } from "react";
import './Input.css';
import Wrapper from "../Util/Wrapper";

const Todo = (props) => {

    const [enteredTask, setEnteredTask] = useState('');

    const infoHandler = event => {
        event.preventDefault();
        if (enteredTask.trim().length === 0) {
            return;
        }
        props.onAddInfo(enteredTask);
        setEnteredTask('');
        console.log('valid input');
    };
   
    const taskHandler = event => {
        setEnteredTask(event.target.value);
    };

    return (
        <Wrapper>
            <form onSubmit={infoHandler}>
                <div className="paragraph">
                    <h1>TO DO:</h1>
                </div>
                <div className="entered">
                    <label>Add to list</label>
                    <input
                        onChange={taskHandler}
                        type='text'
                        value={enteredTask}
                        id="taskname"
                        placeholder="Add New"
                    />
                </div>
                <Button type='submit' />
            </form>
        </Wrapper>
    );
};

export default Todo;