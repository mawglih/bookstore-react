import React, { Component } from 'react';
import { auth } from '../firebase';
import Header from './header';
import Navigation from './navigation';
import Bookstore from './bookstore';
import BookDetail from './book-detail';
import Footer from './footer';
import { Books } from '../constants/books';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
      term: 'java',
      searchArr: [],
      selectedBook: null
    };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.search = this.search.bind(this);
    this.termSearch = this.termSearch.bind(this);
  }

  componentDidMount() {
    auth.doOnStateChange((authUser) => {
      if (authUser) {
        this.setState({ authUser,
          searchArr: Books.filter((el) => {
            return(el.title.toLocaleLowerCase().includes(this.state.term))
          }),
          selectedBook: this.state.searchArr[0]
        });
      } 
    });
  }

  termSearch(event) {
    this.setState({
      term: event.target.value
    }, () => {
      console.log('term is: ', this.state.term);
    });
  }
  search(event) {
    let filter = "title";
    let term = this.state.term;
    let newArr = Books.filter(function(el) {
      return (el.title.toLowerCase().includes(term));
    });
    console.log(newArr, term);
    this.setState({
      searchArr: newArr,
      selectedBook: newArr[0]
    });
    event.preventDefault();
  }


  login() {
    auth.doSignInGoogle()
      .then((result) => {
        const authUser = result.authUser;
        this.setState({authUser}, () => {
          console.log(this.state.authUser);
        });
      });
  }

  logout() {
    auth.doSignOut()
      .then(() => {
        this.setState({authUser: null});
      });
  }

  render() {
    return (
      <div >
        <Header authUser={this.state.authUser} login={this.login} logout={this.logout} termSearch={this.termSearch} search={this.search} />
          <div className="content">
          <div className="sidebar">
                    <Navigation authUser={this.state.authUser}/>
                </div>
                <div className="book-detail">
                    <BookDetail book={this.state.selectedBook}/>
                </div>
          <div className="book">
            <Bookstore searchArr={this.state.searchArr} onBookSelect={selectedBook => this.setState({selectedBook})}/>
          </div>
           </div> 
            <Footer/>

      </div>
    );
  }
}

export default App;
