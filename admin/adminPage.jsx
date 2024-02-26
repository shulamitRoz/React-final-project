import { useContext, useState, useEffect } from 'react'
import { observer } from 'mobx-react-lite';
import EditBusinessDetails from './editBusinessDatails'
// import AppointmemtsDisplay from './appointmemts';
import ServiceDisplay from './serviceDisplay';
import AddService from './addService';
import serviceList from '../classes/serviceData'
import BusinessDetails from '../businessDetails';
import Button from '@mui/joy/Button';
import * as React from 'react';
const AdminPage=observer(()=>{
    const [isEditDatails, setIsEditDatails] = useState(false);
    const [servicesList, setServicesList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                await serviceList.initList();
                setServicesList(serviceList.GetService);
            } catch (error) {
                console.error('Error fetching service list:', error);
            }
        };

        fetchData();
    }, []);

    // function getNextId() {
    //     const id = nextId;
    //     setNextId(prevId => prevId + 1); // Increment the counter for the next ID
    //     return id;
    // }

    function handleClick() {
        setIsEditDatails(true);
    }
    // const updateServicesList = (updatedServices) => {
    //     setServicesList(updatedServices);
    // };

    return (
        <>
            {!isEditDatails ? (

                <div>
                    <BusinessDetails />
                    <AddService  />
                    <Button variant="outlined"   onClick={handleClick} >Edit Business Details</Button>

                    {/* <button onClick={handleClick}>Edit Business Details</button> */}
                    {/* <AppointmemtsDisplay /> */}
                    <h1>Services:</h1>
                    {servicesList.map(service => (
                        <ServiceDisplay key={service.id} {...service} />
                    ))}
                 
                </div>
            ) : (
                <EditBusinessDetails setIsEditDatails={setIsEditDatails} />
            )}

        </>
    )
}) 
export default AdminPage;
   
