import React, {useState} from 'react';
import './App.css';
import {tasksType, TodoList} from "./Components/TodoList";
import {v1} from "uuid";

export type filterCheckedType = 'All' | 'Active' | 'Completed'

function App() {

    let [NewTasks, setNewTask] = useState<Array<tasksType>>([
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'HTML & CSS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'React', isDone: false},
    ])
    let filterTask = NewTasks
    let removeTask = (id: string) => {
        filterTask = NewTasks.filter(t => t.id !== id)
        setNewTask(filterTask)
    }

    let [filterChecked, setFilterChecked] = useState<filterCheckedType>('All')
    if (filterChecked === 'Active') {
        filterTask = filterTask.filter(m => m.isDone)
    }
    if (filterChecked === 'Completed') {
        filterTask = filterTask.filter(m => !m.isDone)
    }
    let filterCheck = (value: filterCheckedType) => {
        setFilterChecked(value)
    }

    let addTask=(title:string)=>{
        let task = {id: v1(), title: title, isDone: false}
        let newTask=[task, ...NewTasks]
        setNewTask(newTask)
       }
    return (
        <div className="App">
            <TodoList
                title={'What to learn?'}
                tasks={filterTask}
                removeTask={removeTask}
                filterCheck={filterCheck}
                addTask={addTask}
            />
        </div>
    );
}

export default App;
