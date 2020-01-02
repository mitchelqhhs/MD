import React from 'react';

const Home = () => {

    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robot' src={`https://robohash.org/1o?100x100`} />
            <div>
                <h2>Naam</h2>
                <p>Enzo</p>
            </div>
        </div>
    );
}

export default Home;