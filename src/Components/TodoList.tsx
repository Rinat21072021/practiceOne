import React, {useState} from 'react';
import {filterCheckedType} from "../App";

export type tasksType = {
    id: number
    title: string
    isDone: boolean
}
type TodoListType = {
    title: string
    tasks: Array<tasksType>
    removeTask: (id: number) => void
    filterCheck:(value:filterCheckedType)=>void
    addTask:()=>void
}

export function TodoList(props: TodoListType) {
    const mapTask = props.tasks.map(t => <li>
        <input type="checkbox" checked={t.isDone}/>
        <span>{t.title}</span>
        <button onClick={()=>props.removeTask(t.id)}>x</button>
    </li>)




    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input />
                <button onClick={()=>props.addTask()}>+</button>
            </div>
            <ul>
                {mapTask}


            </ul>
            <div>
                <button onClick={()=>props.filterCheck('All')}>All</button>
                <button onClick={()=>props.filterCheck('Active')}>Active</button>
                <button onClick={()=>props.filterCheck('Completed')}>Completed</button>
            </div>
        </div>

    )
}


