import React, { Component } from 'react';
import BookItem from './book-item';

import { Books }  from '../constants/books';

class Bookstore extends Component {
    renderItem() {
        var bookArr = [];
        if(!this.props.searchArr) {
            return <div></div>
        }
        console.log("on page bookstore searcharray is: ", this.props.searchArr);
         return this.props.searchArr.map((item, index) => {
            return <BookItem key={index} title={item.title} image={item.image} author={item.author} price={item.price} stock={item.stockPosition} book={item} onBookSelect={this.props.onBookSelect}/>
            
        });
    }
    render() {
        return(
            <div className="book">
                
                <div className="book-list">
                    {this.renderItem()};
                </div>
                
            </div>
        )
    }
}
export default Bookstore;