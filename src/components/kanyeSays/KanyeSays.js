import React, { useState } from 'react';

const KanyeSays = () => {
    const [kanyeSaid, setKanyeSaid] = useState({
        quote: 'What Kanye Said?'
    });
    const GetKanyeQuote = () => {
        fetch("https://api.kanye.rest")
        .then((res) => res.json())
        .then((data) => {
            setKanyeSaid(data);
        }).catch((error) => {
            console.log(error);
        });
    };
    return (
        <div>
            {kanyeSaid.quote &&
                <h3>{kanyeSaid.quote}</h3>
            }
            <button onClick={GetKanyeQuote}>Kanye Said</button>
        </div>
    );
};

export default KanyeSays;
