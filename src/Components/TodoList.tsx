import React, {ChangeEvent,KeyboardEvent, useState} from 'react';
import {filterCheckedType} from "../App";

export type tasksType = {
    id: string
    title: string
    isDone: boolean
}
type TodoListType = {
    title: string
    tasks: Array<tasksType>
    removeTask: (id: string) => void
    filterCheck: (value: filterCheckedType) => void
    addTask: (title: string) => void
}

export function TodoList(props: TodoListType) {
    const mapTask = props.tasks.map(t => <li key={t.id}>
        <input type="checkbox" checked={t.isDone}/>
        <span>{t.title}</span>
        <button onClick={() => props.removeTask(t.id)}>x</button>
    </li>)

    let [valueInput, setValueInput] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        {
            setValueInput(e.currentTarget.value)
        }
    }
    const ButtonClickHandler = () => {
        {
            props.addTask(valueInput);
            setValueInput('')
        }
    }
    const clickAllHandler = () => {
        props.filterCheck('All')
    }
    const clickActiveHandler = () => {
        props.filterCheck('Active')
    }
    const clickCompletedHandler = () => {
        props.filterCheck('Completed')
    }
    const onKeyPressHandler=(e:KeyboardEvent<HTMLInputElement>)=>{
        if (e.key==="Enter"){
            props.addTask(valueInput);
            setValueInput('')
        }
    }


    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={valueInput} onChange={onChangeHandler} onKeyPress={onKeyPressHandler}/>
                <button onClick={ButtonClickHandler}>+</button>
            </div>
            <ul>
                {mapTask}
            </ul>
            <div>
                <button onClick={clickAllHandler}>All</button>
                <button onClick={clickActiveHandler}>Active</button>
                <button onClick={clickCompletedHandler}>Completed</button>
            </div>
        </div>

    )
}


