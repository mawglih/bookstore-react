import React from 'react';
import BookItem from './book-item';

export default (props) => {
    if(!props.searchArr) {
        return <div><h2>Loading...</h2></div>;
    }
    console.log(props.searchArr[0].title);
    return(
        <div className="book">
        <BookItem  title={props.searchArr.title} image={props.searchArr.image} author={props.searchArr.author} price={props.searchArr.price} stock={props.searchArr.stockPosition}/> 
        </div>
    )
}