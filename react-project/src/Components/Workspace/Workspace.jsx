import React from 'react'
import './Workspace.css'

// const searchHandler = (e) => {
//     e.preventDefault()
//     id =
//     window.location.replace(`http://localhost:3001/note/${id}`)
// }

const WorkSpace: React.FC = (props) => {
    const [id, setId] = React.useState();
    const [text, setText] = React.useState();
    const searchHandler = (e) =>{
        e.preventDefault()
        window.location.replace(`http://localhost:3001/note/${id}`)
    }
    const change = React.useCallback(
        (event) => {
            setId(event.target.value)
        },
        [id]
    )

    const changetTextHandler = React.useCallback(
        (event) => {
            setText(event.target.value)
        },
        [text]
    )

    const itemPost = React.useCallback(async (e) => {
        e.preventDefault()
        await fetch('http://localhost:3000/notes', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({text} )
        })
    },[text])

    return (
        <div>
            <form className="key_form">
                <input className="key_input" type="text" value={id} onChange={change} placeholder="Введите ключ"/>
                <input className="key_button" type="submit" value="Ввести" onClick={searchHandler}/>
            </form>
            <form className="workspace">
                <textarea className="doc" cols="30" rows="10" value={text} onChange={changetTextHandler}/>
                <input className='button' type="submit" value="Создать" onClick={itemPost}/>
            </form>
        </div>
    )
};

export default WorkSpace