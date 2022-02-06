import React from 'react';

function Content(props) {
    console.log("mise à jour");
    return (

        <div className="content">
            <h1>{props.propsnum}</h1>
        </div>

    );
}

export default React.memo(Content);
