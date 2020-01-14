import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header: React.FC = () => {
    return (
        <header>
            <div className="header-item">
                <Link to="/">Главная страница</Link>
            </div>
            <div className="header-item">
                <Link to="/login">Войти</Link>
            </div>
            <div className="header-item">
                <Link to="/register">Зарегистрироваться</Link>
            </div>
        </header>
    )
}

export default Header