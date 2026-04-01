import type { Todo } from '../types/todo.ts'
import { Trash2 } from "lucide-react"

interface TodoItemProps {
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

export default function TodoItem({todo, onCompletedChange, onDelete}: TodoItemProps) {
    return (
        <div className="flex gap-2 grow">
            <label className="flex w-full gap-2 border rounded-s-md p-2 border-gray-400 hover:bg-slate-50">
                <input 
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
                    className="scale-125"
                />
                <span className={todo.completed ? "line-through text-gray-400" : ""}>
                    {todo.title}
                </span>
            </label>
            <button 
                type="button"
                onClick={() => onDelete(todo.id)}
                className="w-16 rounded-e-md bg-white hover:bg-red-200 text-gray-500 hover:text-black"
            > <Trash2 size={18} className="mx-auto" />
            </button>
        </div>
    )
}