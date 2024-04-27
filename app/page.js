'use client'
import React, { useEffect, useState } from 'react'
import { MyContext } from '@/Context/Context'
import Background from '@/Components/Background'
import Foreground from '@/Components/Foreground'

const page = () => {
  const [allTodos, setallTodos] = useState([]);

  const addTodo = () => {
    setallTodos([{ id: Date.now(), todotitle: 'New', todocontent: 'Empty' }, ...allTodos])
  }

  const updateTodo = (id, newTitle, newContent) => {
    setallTodos(
      allTodos.map((eachtodo) =>
        eachtodo.id === id
          ? { id: id, todotitle: newTitle, todocontent: newContent }
          : eachtodo
      )
    )
  }

  const deleteTodo = (id) => {
    setallTodos(
      allTodos.filter((eachtodo) => eachtodo.id !== id)
    )
  }

  useEffect(() => {
    const Data = JSON.parse(localStorage.getItem('data'))
    if (Data?.length > 0) setallTodos(Data)
  }, []);

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(allTodos))
  }, [allTodos]);

  return (
    <MyContext.Provider value={{ allTodos, addTodo, updateTodo, deleteTodo }}>
      <div className='relative w-screen h-screen bg-zinc-800 text-white overflow-hidden no-scrollbar'>
        <Background />
        <Foreground />
      </div>
    </MyContext.Provider>
  )
}

export default page