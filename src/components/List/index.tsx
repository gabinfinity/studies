import React from 'react'
import style from './style.module.scss'

const List = () => {
    const tasks = [
    {
        name: 'React',
        time: '02:00:00'
    },
    {
        name: 'JavaScript',
        time: '1:00:00'
    },
    {
        name: 'TypeScript',
        time: '03:00:00'
    }
]
  return (
    <aside className={style.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
            {tasks.map((obj, index) => (
                <li key={index} className={style.item}>
                    <h3>{obj.name}</h3>
                    <span>{obj.time}</span>
                </li>
            ))}
        </ul>
    </aside>
  )
}

export default List