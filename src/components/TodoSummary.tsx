import type { Todo } from "../types/todo";

interface TodoSummaryProps {
    todos: Todo[];
    deleteAllCompleted: () => void;
}

export default function TodoSummary({ 
    todos, 
    deleteAllCompleted 
}: TodoSummaryProps) {
    const completedCount = todos.filter(todo => todo.completed);

    return (
        <div className="text-center space-y-2 py-4">
            <p className="text-sm font-extrabold text-gray-500">
                {completedCount.length} / {todos.length} tasks completed!
            </p>
            {completedCount.length > 0 && (
                <button
                    onClick={deleteAllCompleted}
                    className="text-red-500 hover:unverline test-sm font-medium"
                >
                Clear Completed Task
                </button>
            )}
        </div>
    );
}