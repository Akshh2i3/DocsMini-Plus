'use client'
import React, { useContext, useRef } from 'react'
import Card from './Card'
import { MyContext } from '@/Context/Context'


const Foreground = () => {

    const { allTodos, addTodo, updateTodo, deleteTodo } = useContext(MyContext)

    const add = (e) => {
        e.preventDefault()
        if (allTodos.length < 12) addTodo()
    }

    const ref = useRef(null)
    return (
        <MyContext.Provider value={{ updateTodo, deleteTodo }}>
            <div
                onClick={add}
                className='fixed bottom-10 right-10 bg-slate-500 text-xl text-white rounded-2xl px-5 py-2 cursor-pointer'>
                {allTodos.length < 12 ? 'Add Docs' : 'Limit Reached'}
            </div>
            <div ref={ref} className='w-full h-screen flex gap-10 flex-wrap p-5 n'>
                {
                    allTodos.map((todo) => (
                        <Card key={todo.id} todo={todo} reference={ref} />
                    ))
                }
            </div>
        </MyContext.Provider >
    )
}

export default Foreground