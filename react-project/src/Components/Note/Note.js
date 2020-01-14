import React from 'react'
import './Note.css'

const Note: React.FC = (props) => {
    console.log(props)
    const [text, setText] = React.useState();
    const id = props.match.params.id
    const itemGet = React.useCallback(async () => {
        const response = await fetch(
            `http://localhost:3000/notes/${id}`
        );
        const data = await response.json();
        setText( data.text)
        console.log(data);
        console.log(text)
    },[])

    React.useEffect(() => {
        void itemGet(props.match.params.id);
    }, [props.match.params.id]);
    console.log(text)
    return (
        <div>
            <div className="header">
                Заметка номер {id}
            </div>
            <div className="note">
                {text}
            </div>

        </div>
    )
};

export default Note