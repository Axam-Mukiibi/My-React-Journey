import Wrapper from "../Util/Wrapper";
import './Output.css';
//import { useState } from "react";

const TodoList = (props) => {
   /* const[checkbox, setCheckbox] = useState(false);

    const onCheckedHandler = () => {
        setCheckbox(true);
    }
    */

    return (
        <Wrapper>
            <div className="title">
                <p>List</p>
            </div>
            <ul >
                {props.items.map((item) => (
                    <li key={item.id} className="display">
                        {item.Task}
                    </li>
                ))}
            </ul>
        </Wrapper>
    );
};

export default TodoList;