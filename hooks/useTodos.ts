import { useEffect, useState } from 'react'
import { dummyData } from '../src/data/todo'
import type { Todo } from '../src/types/todo'

export default function useTodos() {
    const [todos, setTodos] = useState(() => {
        const storedTodos : Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
        return storedTodos.length > 0 ? storedTodos : dummyData;
    })

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    function setTodoCompleted(id: number, completed: boolean){
        setTodos((prevTodos) =>  
        prevTodos.map(todo => 
        todo.id === id ? { ...todo, completed } : todo))
    }

    function addTodo(title: string) {
        setTodos(prevTodos => [
        {
            id: Date.now(),
            title,
            completed: false
        },
        ...prevTodos
        ])
    }

    function deleteTodo(id: number) {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
    }

    function deleteAllCompleted(){
        setTodos(prevTodos => prevTodos.filter(todo => !todo.completed))
    }

    return {
        todos,
        setTodoCompleted,
        addTodo,
        deleteTodo,
        deleteAllCompleted
    }
}