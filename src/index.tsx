import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import WebtoonInterface from './interface/Webtoon';
import {WebtoonProps} from './type/Types';

const getWebtoons = async () => {
    const response = fetch('http://localhost:8080/webtoonss');
    return response;
};

const Webtoon = ({webtoon}: WebtoonProps) => {
    const {id, name} = webtoon;
    return(
        <div>{id} {name}</div>
    )
}

const App = () => {

    const [webtoons, setWebtoons] = useState([]);

    useEffect(() => {
        getWebtoons()
            .then(res => res.json())
            .then(res => setWebtoons(res))
            .catch();
    }, []);

    return(
        <div>
            {webtoons.length !== 0 ? 
                <>
                {webtoons.map((webtoon: WebtoonInterface) => (
                <Webtoon key={webtoon.id} webtoon={webtoon}/>
                ))}
                </>
                :
                <div>Aucun webtoon</div>
            }
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);