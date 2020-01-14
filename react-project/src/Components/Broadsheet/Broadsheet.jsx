import React from 'react'
import './Broadsheet.css'

const Broadsheet: React.FC = () => {
    return (
        <div className="broadsheet">
            <div className="title"> Deadline Day </div>
            <img className="picture" src="./judgement_day.png" alt="здесь могла быть ваша реклама"/>
            <div className="text">Джон Мартин, холст, масло.</div>
        </div>
    )
}

export default Broadsheet