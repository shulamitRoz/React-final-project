// EditBusinessDetails.js
import React, { useState,useEffect } from 'react';
import { observer } from 'mobx-react';
import businessStore from '../classes/businessData'
import Button from '@mui/joy/Button';

const EditBusinessDetails = observer(({ setIsEditDatails }) => {
    const [newDetails, setNewDetails] = useState({
      name: '',
      address: '',
      email: '',
      phone: '',
      owner:'',
      logo:'',
      description:'',
    });
  
  useEffect(() => {
    // Check if businessDetails is defined and set initial state
   // if (businessStore.businessObject) {
      setNewDetails({
        name: businessStore.businessObject.name,
        address: businessStore.businessObject.address,
        email: businessStore.businessObject.email,
        phone: businessStore.businessObject.phone,
        owner: businessStore.businessObject.owner,
        logo: businessStore.businessObject.logo,
        description: businessStore.businessObject.description,

      });
   // }
  }, []);

  const handleChange = (e) => {
    setNewDetails({ ...newDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    businessStore.AddBusiness(newDetails);
    setIsEditDatails(false);

    console.log('New Details:', newDetails);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={newDetails.name} onChange={handleChange} placeholder="Enter the name of the studio" />
      <input type="text" name="address" value={newDetails.address} onChange={handleChange} placeholder="Enter the address of the studio" />
      <input type="text" name="email" value={newDetails.email} onChange={handleChange} placeholder="Enter email"/>
      <input type="text" name="phone" value={newDetails.phone} onChange={handleChange} placeholder="Enter a phone number"/>
      <input type="text" name="owner" value={newDetails.owner} onChange={handleChange} placeholder="Enter a owner "/>
      <input type="text" name="logo" value={newDetails.logo} onChange={handleChange} placeholder="Enter a logo"/>
      <input type="text" name="description" value={newDetails.description} onChange={handleChange} placeholder="Enter description"/>
      <Button variant="outlined" type="submit">Save</Button>

      {/* <button type="submit">Save</button> */}
    </form>
  );
});

export default EditBusinessDetails;
























// import { useContext } from "react";
// import { StudioDatails } from "../businessDatails";

// const context = useContext(StudioDatails);

// export default function EditBusinessDatails(props)
// {
    
//     function handleSubmit(e){

//     }

//     return(
//         <>
//         <form onSubmit={handleSubmit}>
//         <input  onBlur={(e) => context.setStudioName(e.target.value)} placeholder="enter name of studiu" type="text" />
//         <input  onBlur={(e) => context.setEmail(e.target.value)} placeholder="enter email" type="text" />
//         <input  onBlur={(e) => context.setPhone(e.target.value)} placeholder="enter phone" type="text" />
//         <input  onBlur={(e) => context.setAddress(e.target.value)} placeholder="enter address" type="text" />
//         <button type='submit'>SAVE_CART</button>

//         </form>

//         </>
//     )
// }