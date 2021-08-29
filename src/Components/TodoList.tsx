import React, {useState} from 'react';
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



    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={valueInput} onChange={e => {
                    setValueInput(e.currentTarget.value)

                }}/>
                <button
                    onClick={() => {props.addTask(valueInput);setValueInput('')}}
                >+</button>
            </div>
            <ul>
                {mapTask}
            </ul>
            <div>
                <button onClick={() => props.filterCheck('All')}>All</button>
                <button onClick={() => props.filterCheck('Active')}>Active</button>
                <button onClick={() => props.filterCheck('Completed')}>Completed</button>
            </div>
        </div>

    )
}


