import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todoSlice'

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('') 
    }


  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                placeholder="Write Todo..."
                className="bg-gray-800 rounded border border-gray-700 
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 
                text-base outline-none text-gray-100 py-1 px-3 
                leading-8 transition-colors duration-200 ease-in-out"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" 
            className="rounded-r-lg px-3 py-1 bg-green-600 
            text-white shrink-0">
                Add Todo
            </button>
         </form>
  )
}

export default AddTodo