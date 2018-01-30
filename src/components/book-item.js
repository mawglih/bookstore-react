import React, {Component} from 'react';

class BookItem extends Component {
    constructor(props) {
        super(props);
        this.handleBookSelect = this.handleBookSelect.bind(this);
    }

    handleBookSelect() {
        this.props.onBookSelect(this.props.book);

    }
    render() {
        return(
            <div className="book-item">
                <div>
                <h2 className="book-item__title">{this.props.title}</h2>
                <div className="book-item__block" onClick={this.handleBookSelect} >
                    <div className="book-item__block-img">
                        <img src={this.props.image} alt="" className="book-item__block-image"/>
                    </div>
                    
                    <div className="book-item__block-acc">
                        <div className="book-item__block-acc--author">{this.props.author}</div>
                        <div className="book-item__block-acc--price">$ {this.props.price}</div>
                        <div className="book-item__block-acc--side">{this.props.stock}</div>
                        
                    </div>
                    
                    
                </div>
                <button className="btn btn-inline">Add to cart</button>
                </div>
                
               
                
            </div>
        );
    }
    
}
export default BookItem;