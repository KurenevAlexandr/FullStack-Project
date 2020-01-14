import React from 'react'
import './Form.css'

const buttonHandler = () => {
    window.location.replace("http://localhost:3000/workspace")
}

const Form: React.FC = (props) => {
    return (
        <section className="form">
            <form>
                <h3 className="head_form">{props.form_action}</h3>
                <div className="login_input">
                    <label htmlFor="name">Логин</label>
                    <input type="text" name="name" required placeholder="Введите логин"/>
                </div>
                <div className="password_input">
                    <label htmlFor="password">Пароль</label>
                    <input type="password" name="password" required placeholder="Введите пароль"/>
                </div>
                <button type="submit" className="form_button" onClick={buttonHandler}>{props.form_action}</button>
            </form>
        </section>
    )
}

export default Form