'use client'
import React, { createContext } from 'react'

export const MyContext = createContext(
    {
        allTodos: [
            //this is how data will look like, array of object
            // {
            //     id: 0,
            //     todotitle: 'title',
            //     todocontent: 'msg'
            // },
        ],
        addTodo: () => { },
        updateTodo: (id, todotitle) => { },
        deleteTodo: (id) => { },
    }
);
