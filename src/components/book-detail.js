import React from 'react';
import Welcome from './welcome';


const BookDetail = ({book}) => {
    if(!book) {
        return <div><Welcome /></div>;
    }
    

        return(
            <div>
                <div className="book-details">
                <h1 className="book-details__title">{book.title}</h1>
                <div className="book-details__block">
                    <div className="book-details__block-img">
                        <img src={book.image} alt="" className="book-details__block-image"/>
                    </div>
                    
                    <div className="book-details__block-acc">
                        <div className="book-details__block-acc--author">{book.author}</div>
                        <div className="book-details__block-acc--price">$ {book.price}</div>
                        <div className="book-details__block-acc--side">{book.stock}</div>
                        <button className="btn btn-inline">Add to cart</button>
                    </div>
                    
                    
                </div>
                </div>
                <div className="book-details__features">
                
                <div className="book-details__features-1">
                    <p className="book-details__features-isbn">ISBN: {book.ISBN}</p>
                    <p className="book-details__features-rating">Rating: {book.rating}</p>
                    <p className="book-details__features-pages">Pages: {book.pages}</p>
                    <p className="book-details__features-publisher">Publisher: {book.publisher}</p>
                    <p className="book-details__features-published">Published: {book.published}</p>
                </div>
                <div className="book-details__comments">
                    <p className="book-details__comments-description"><strong>Book description: </strong><br /> {book.description}</p>
                    <p className="book-details__comments-review"><strong>Editor's review: </strong><br /> {book.editReview}</p>
                </div>
                </div>
               
            </div>
        );
    };

export default BookDetail;