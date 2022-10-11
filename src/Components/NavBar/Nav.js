import React from 'react'
import { NavLink } from 'react-router-dom';
import NavStyle from './Nav.module.css';

const Nav = () => {

    const isActive = (props) => {
        return {
            backgroundColor: props.isActive && "rgba(68, 68, 68, 0.3)",
            color: props.isActive && "#EEE",
        }
    }

    return (
        <nav className={NavStyle.Nav}>
            <ul>
                <ul>
                    <li><NavLink style={isActive} to='/' end >About</NavLink></li>
                    <li><NavLink style={isActive} to='/projects' end>Projects</NavLink></li>
                    <li><NavLink style={isActive} to='/courses' end>Courses</NavLink></li>
                    <li><NavLink style={isActive} to='/blog' end>Blog</NavLink></li>
                    <li><NavLink style={isActive} to='/contact' end>Contact</NavLink></li>
                </ul>
            </ul>
        </nav>
    )
}

export default Nav