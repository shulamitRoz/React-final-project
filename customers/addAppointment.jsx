// 
import { observer } from "mobx-react-lite";
import { useState } from "react";
import appointmentList from "../classes/appointmentsData";
import dayjs from 'dayjs';
import Button from '@mui/joy/Button';
import * as React from 'react';
//import * as dayjs from 'dayjs'
const AddAppointment = observer(({ setIsAdd, selectedService }) => {
    const [dateValue, setdateValue] = useState(dayjs(""))
    const [newAppointment, setNewAppointment] = useState({
        id: '',
        serviceType: '',
        dateTime: '',
        clientName: '',
        clientPhone: '',
        clientEmail: '',
    });

    const [error, setError] = useState('');
    
    function handleChange(field, value) {
        const tmp = newAppointment;
        tmp[field] = value;
        setNewAppointment(tmp);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(dateValue);
        newAppointment['dateTime'] = dateValue;
        let lenBefore = appointmentList.GetAppoiintments.length
        appointmentList.AddAppointments({ ...newAppointment, dateTime: dateValue })

        if (lenBefore < appointmentList.GetAppoiintments.length) {
            console.log("hhhhhh")
            setIsAdd(false)
        }
        else {
            setError(false)
        }
    }
    //    async function handleSubmit(newAppointment) {
    //     e.preventDefault();
    //  const handleSubmit = async (e) => {

    //     e.preventDefault();
    //     let lenBefore = appointmentList.GetAppoiintments.length
    //     console.log(lenBefore)
    //     // 
    //    const res=await appointmentList.AddAppointments({...newAppointment,dateTime: dateValue})
    //    console.log(lenBefore)

    //     if (lenBefore < appointmentList.GetAppoiintments.length) {
    //         console.log("hhhhhh")
    //         setIsAdd(false)
    //     }
    //     else {
    //         setError(false)
    //     }
    // console.log(newAppointment.GetAppoiintments.length)
    // }    
    // }

    return (
        <div style={{ border: error ? '2px solid red' : 'none' }}>
            <form onSubmit={handleSubmit}>
                {error && <div>{error}</div>}
                <input type="text" name="serviceType" value={selectedService.name} onChange={(e) => handleChange('name', e.target.value)} />
                {/* <input type="text" name="dateTime" onChange={(e)=>handleChange('dateTime', e.target.value)} placeholder="Enter dateTime" /> */}

                <input type="text" name="dateTime" onChange={(e) => setdateValue(e.target.value)} placeholder="Enter dateTime" />
                <input type="text" name="clientName" onChange={(e) => handleChange('clientName', e.target.value)} placeholder="Enter clientName" />
                <input type="text" name="clientPhone" onChange={(e) => handleChange('clientPhone', e.target.value)} placeholder="Enter clientPhone" />
                <input type="text" name="clientEmail" onChange={(e) => handleChange('clientEmail', e.target.value)} placeholder="Enter clientEmail" />
                <Button variant="outlined"  type="submit" >Make an appointment</Button>

                    {/* <button type="submit">Make an appointment</button> */}
            </form>
        </div>
    );
});

export default AddAppointment;
