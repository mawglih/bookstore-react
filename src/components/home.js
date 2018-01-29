import React from 'react';
import Bookstore from './bookstore';



export default (props) => {
    return(
        <div className="container">
            <div className="book-view">
                <Bookstore searchArr={props.searchArr} onBookSelect={props.onBookSelect} book={props.book} />
            </div>
               
          </div>
    )
}