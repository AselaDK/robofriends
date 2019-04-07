import React from 'react';

const Scroll = (props) => {

    return(
        <div style={{overflowY: 'scroll', border: '1px solid blue', height: '800px'}}>    
            {/* another way of doing css javascript { object{} } 
            css : overflow-y
            jsx: overflowY - camelCase            
            */}
            {props.children}    {/* children of props, actually this is card list component's cards*/}
        </div>
    );
};

export default Scroll;