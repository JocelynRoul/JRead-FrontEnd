import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const getWebtoons = async () => {
    const response = await fetch('http://localhost:8080/webtoons');
    return response.json();
};

const Webtoon = ({webtoon}: any) => {
    const {id, name} = webtoon;
    return(
        <div>
            {id}{name}
        </div>
    )
}

const App = () => {

    const [webtoons, setWebtoons] = useState([]);

    useEffect(() => {
        getWebtoons().then(res => setWebtoons(res));
    }, []);

    return(
        <div>
            {webtoons.map((webtoon: any) => (
                <Webtoon key={webtoon.id} webtoon={webtoon}/>
            ))}
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);