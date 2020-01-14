import React from 'react'
import './Workspace.css'

const WorkSpace: React.FC = () => {
    return (
        <div>
            <form className="key_form">
                <input className="key_input" type="text" placeholder="Введите ключ"/>
                    <input className="key_button" type="submit" value="Ввести"/>
            </form>
            <form className="workspace">
                <textarea className="doc" cols="30" rows="10"/>
                <input className='button' type="submit" value="Создать"/>
            </form>
        </div>
    )
};

export default WorkSpace