import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const exitHandler = (e) => {
    window.localStorage.clear()
    window.location.replace("http://localhost:3001/")
}

const Header: React.FC = () => {
    const islog = window.localStorage.getItem('isLogin')
    console.log(islog)
    return (
        <header>
            <div className="header-item">
                <Link to="/">Главная страница</Link>
            </div>
            { !islog && <div className="header-item">
                <Link to="/login">Войти</Link>
            </div>}
            { !islog && <div className="header-item">
                <Link to="/register">Зарегистрироваться</Link>
            </div>}
            { islog && <div className="header-item">
                <Link to="/workspace">Рабочее пространство</Link>
            </div>}
            { islog && <div className="header-item">
                <Link to="/" onClick={exitHandler}>Выйти</Link>
            </div>}
        </header>
    )
}

export default Header