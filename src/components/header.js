import React from 'react';
import logo from '../images/store-logo.png';
import LoginBlock from './login-block';
export default (props) => {
    return(
        <div >
            <header className="header">
                <img src={logo} alt="bb-logo" className="logo"/>
                    <form action="#" className="search">
                        <input type="text" className="search__input" placeholder="Search" onChange={props.termSearch}/>
                        <button className="search__button" onClick={props.search}>
                            <svg className="search__icon">
                                <use xlinkHref="../images/sprite.svg#icon-magnifying-glass" />
                            </svg>
                        </button>
                    </form>
                
                <div className="login-block">
                    <LoginBlock authUser={props.authUser} login={props.login} logout={props.logout}/>
                </div>
                
            </header>
      </div>
    )
}