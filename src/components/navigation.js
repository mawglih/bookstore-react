import React, { Component } from 'react';
import { NavData } from '../constants/nav-data';

class Navigation extends Component {
    renderListItem(){
        return NavData.map((item) => {
            return <li className='side-nav__item' key={NavData.indexOf(item)}>
            <a href="#"  className="side-nav__link">
                <svg className="side-nav__icon">
                    <use xlinkHref={item.svgName}></use>
                </svg>
                <span>{item.name}</span>
            </a>
        </li>
        })
    }
    render() {
        return(
            <nav className="side">
                <ul className="side-nav">
                    {this.renderListItem()}
                </ul>
                <div className="legal">
                    &copy; 2018 Oleg Markoff
                </div>
            </nav>
        )
    }
}
export default Navigation;