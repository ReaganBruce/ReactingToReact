import React from 'react';


const Greeter = ({ phrase, name }) => {



    return(
        <div>
            <h1 className="mt-3 p-3 border border-success rounded">{phrase} {name}</h1>
        </div>
    );
}

export default Greeter;