import React from 'react';
import LeftSidePanel from './LeftSide/LeftSidePanel';
import RightSidePanel from './RightSide/RightSidePanel';
function DisplayContent(props) {
    return(
        
            <div style={{display: 'flex'}}>
                <LeftSidePanel/>
                <RightSidePanel/>
            </div>
    )
}
export default DisplayContent;