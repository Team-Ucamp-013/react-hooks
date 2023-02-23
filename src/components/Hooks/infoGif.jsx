import React from "react";

const Dataghf = ({info}) => {
 return(
        <div>
            {
                info && info.map(item =>
                    <div key={item.id}>
                        <img src={item.images.fixed_height.url} />
                    </div>
                    )
            }
        </div>
    )
}

export default Dataghf