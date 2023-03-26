import React from 'react';

const SlotM = (props) => {
    let {x, y, z}=props;

    if(x===y && y===x){
        return(
            <>
                <div className="inner_slot">
                <h1>
                  {x}
                  {y}
                  {z}
                </h1>
                <h1>It's a Match !!!</h1>
                <hr />
              </div>
            </>
        );
    }else{
        return(
            <>
                <div className="inner_slot">
                <h1>
                  {x}
                  {y}
                  {z}
                </h1>
                <h1>It's not a Match.</h1>
                <hr />
              </div>
            </>
        );
    }
  };

export default SlotM;