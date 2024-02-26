import React, { useState } from 'react';
import ServiceForm from './serviceForm';
import serviceList from '../classes/serviceData';
import Button from '@mui/joy/Button';


export default function AddService() {
    const [isAdd, setIsAdd] = useState(false);
      return (
        <div>
            {!isAdd ? (
                
                <Button variant="outlined"  onClick={() => setIsAdd(true)} >Add a new service</Button>

                // <button onClick={() => setIsAdd(true)}>Add a new service</button>
            ) : (
                <ServiceForm setIsAdd={setIsAdd}/>
            )}
        </div>
    );
}


// import ServiceForm from "./serviceForm";
// import { useState } from "react";
// export default function AddService() {

//     const [isAdd, setIsAdd] = useState(false);
//     function handleClick(){
//         setIsAdd(true);
//     }
//     return (
//         <div>
//              {!isAdd ?(
//             <div>
//             <button onClick={handleClick}>Add a new service </button>
//             </div>
//         ) : (
//             <ServiceForm setIsAdd={setIsAdd} />
//         )}

//         </div>
//     )

// }