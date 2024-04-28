'use client'
import React, { useContext, useState } from 'react'
import { MyContext } from '@/Context/Context';
import { AiFillEdit } from "react-icons/ai";
import { IoMdClose, IoIosSave, IoMdSave } from "react-icons/io";
import { motion } from "framer-motion"

const Card = ({ todo, reference }) => {

    const [newTitle, setNewTitle] = useState(todo.todotitle);
    const [newContent, setNewContent] = useState(todo.todocontent);
    const [isEditable, setIsEditable] = useState(false);

    const { updateTodo, deleteTodo } = useContext(MyContext)

    const edit = () => {
        if (isEditable === true) {
            updateTodo(todo.id, newTitle, newContent)
        } else {
            if (newContent === 'Empty') {
                setNewContent('')
            }
        }

        setIsEditable(!isEditable)
    }

    return (
        <motion.div
            drag
            dragConstraints={reference}
            whileDrag={{ scale: 1.2 }}
            className='relative flex-shrink-0 w-48 h-[17rem] rounded-3xl bg-zinc-900/80 px-4 py-5 overflow-hidden border-2 border-slate-200'>

            <input
                type='text'
                className='font-bold w-full text-xl border-b-2 text-zinc-200 bg-transparent outline-none'
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                spellCheck={false}
                disabled={!isEditable}
            />

            <textarea
                className='mt-3 h-40 text-zinc-500 leading-tight overflow-y-scroll no-scrollbar w-full bg-transparent resize-none outline-none'
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                spellCheck={false}
                disabled={!isEditable}
            />

            <div className='mt-2 flex justify-between'>
                <div onClick={edit}>
                    {isEditable ? <IoMdSave size={'1.5rem'} /> : <AiFillEdit size={'1.5em'} />}
                </div>

                <div>
                    <IoMdClose
                        size={'1.5em'}
                        onClick={() => deleteTodo(todo.id)}
                    />
                </div>
            </div>
        </motion.div >
    )
}

export default Card