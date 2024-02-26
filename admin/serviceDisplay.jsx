import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import ServiceForm from './serviceForm';
import serviceList from '../classes/serviceData'

export default function(props){
    const{id,name,description,price,duration}=props;
   
    return (
        <div>
            {/* <h1>Services:</h1> */}
            <h3>{name}</h3>
            <h3>{description}</h3>
            <h3>{price}</h3>
            <h3>{duration}</h3>         
        </div>
    );
}

// const ServiceDisplay = observer((props) => {

//        // const [isAdd, setIsAdd] = useState(false);
//     const{id,name,description,price,duration}=props;
   
//     return (
//         <div>
//             {/* <h1>Services:</h1> */}
//             <h3>{name}</h3>
//             <h3>{description}</h3>
//             <h3>{price}</h3>
//             <h3>{duration}</h3>      
         
      
//         </div>
//     );
// });
// export default ServiceDisplay;



// const ServiceDisplay = observer(() => {
//     function handleClick(){
//         setIsAdd(true);
//     } 
//     const [isAdd, setIsAdd] = useState(false);
//     const allServices = serviceList.GetService;
//     return (
//         <div>
//             {allServices.map(service => (
//                 <div key={service.id}>
//                     <h3>{service.name}</h3>
//                     <p>{service.description}</p>
//                     <p>{service.price}</p>
//                     <p>{service.duration}</p>
//                 </div>
//             ))}
//             {!isAdd ?(
//             <div>
//             <button onClick={handleClick}>Add a new service </button>
//             </div>
//         ) : (
//             <ServiceForm setIsAdd={setIsAdd} />
//         )}
       
//         </div>
//     );
// });
// export default ServiceDisplay;



