// import React, { useState } from 'react';
// const ServiceForm = ({ handleAddService }) => {
// const [newService, setNewService] = useState({
//     name: '',
//     description: '',
//     price: '',
//     duration: '',
//   });

//   const handleChange = (field, value) => {
//     setNewService(prevData => ({
//       ...prevData,
//       [field]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await handleAddService(newService); // Call the handleAddService callback function
//     setNewService({ // Reset the form fields after submission
//       name: '',
//       description: '',
//       price: '',
//       duration: '',
//     });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="name" value={newService.name} onChange={(e) => handleChange('name', e.target.value)} placeholder="Enter name" />
//       <input type="text" name="description" value={newService.description} onChange={(e) => handleChange('description', e.target.value)} placeholder="Enter description" />
//       <input type="text" name="price" value={newService.price} onChange={(e) => handleChange('price', e.target.value)} placeholder="Enter price" />
//       <input type="text" name="duration" value={newService.duration} onChange={(e) => handleChange('duration', e.target.value)} placeholder="Enter duration" />
//       <button type="submit">Save</button>
//     </form>
//   );
// };

// export default ServiceForm;


//import React from 'react';
import { observer } from 'mobx-react';
import serviceList from '../classes/serviceData'
import { useState, useEffect } from 'react';
import Button from '@mui/joy/Button';
import * as React from 'react';


const ServiceForm = observer(({ setIsAdd }) => {
  const [newService, setNewService] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    duration: '',
  });

  function handleChange(field, value) {
    const tmp = newService;
    tmp[field] = value;
    setNewService(tmp);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await serviceList.AddService(newService);
    console.log('New Service:', newService);
    setIsAdd(false);
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name"  onChange={(e) => handleChange('name', e.target.value)} placeholder="Enter name" />
      <input type="text" name="description"  onChange={(e) => handleChange('description', e.target.value)} placeholder="Enter description" />
      <input type="text" name="price" defaultValue={newService.price} onChange={(e) => handleChange('price', e.target.value)} placeholder="Enter price" />
      <input type="text" name="duration" defaultValue={newService.duration} onChange={(e) => handleChange('duration', e.target.value)} placeholder="Enter duration" />
      {/* <button type="submit">Save</button> */}
      <Button variant="outlined" type="submit">Save</Button>

    </form>
  );


})
export default ServiceForm;
