import React from 'react';

export default () => {
    return(
        <div className="welcome">
            <div className="bg-video">
            <video  className="bg-video__content" autoPlay muted loop>
                <source src='../images/waves.mp4' type='video/mp4'/>
                Your browser is not supported
            </video>
            </div>
            <div className="welcome-text">
            <h1 className="welcome-text__title">Welcome to Front Book Store!</h1>
            <p className="welcome-text__par-1 welcome-text__par">
            In our front store you can find any book on Javascript, Python and Ruby. If you need books on Java and Node - you need to visit Back store!
            </p>
            <p className="welcome-text__par-2 welcome-text__par">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores assumenda iste commodi accusantium sunt molestiae quidem, nulla possimus beatae quasi quae dolor reiciendis repellat distinctio, a necessitatibus atque nihil. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint perspiciatis magnam maiores culpa animi veritatis ea consequuntur error eligendi architecto? Alias, quo? Cupiditate sint veritatis quas accusantium. Voluptatibus, provident eum!
            </p>
            <p className="welcome-text__par-3 welcome-text__par">
            Please select a book on the right to see the details.
            Search for other books by typing book tiitle in the search bar. For example: Python, ruby ..
            </p>
            </div>
        </div>
    );
}