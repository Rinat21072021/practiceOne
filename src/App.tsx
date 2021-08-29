import React, {useState} from 'react';
import './App.css';
import {tasksType, TodoList} from "./Components/TodoList";

export type filterCheckedType = 'All' | 'Active' | 'Completed'

function App() {

    let [NewTask, setNewTask] = useState<Array<tasksType>>([
        {id: 1, title: 'JS', isDone: true},
        {id: 2, title: 'HTML & CSS', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'React', isDone: false},
    ])
    let filterTask = NewTask
    let removeTask = (id: number) => {
        filterTask = NewTask.filter(t => t.id !== id)
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

    let addTask=()=>{
        console.log('qw')
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
