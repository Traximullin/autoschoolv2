import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

export default function Menu() {
  return (
    <nav className="menu__wrapper">
      <ul>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/schedule">Расписание</Link>
        </li>
        <li>
          <Link to="/instructor">Инструктора</Link>
        </li>
      </ul>
    </nav>
  );  
}
