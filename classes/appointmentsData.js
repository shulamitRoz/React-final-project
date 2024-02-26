
import { makeObservable, observable, computed, action, runInAction } from 'mobx'
const url = "http://localhost:8787"
// const today = new Date();
// const year = today.getFullYear();
// const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 to month because January is 0
// const day = today.getDate().toString().padStart(2, '0'); // Get the day of the month
// const time = '23:00:00.000Z'; // Time is 11:00 p.m. in UTC

// const todayDateTime = `${year}-${month}-${day}T${time}`;
class DataAppointments {
    cntId = 1;
    listAppointmemt = [];
    constructor() {
        makeObservable(this, {
            listAppointmemt: observable,
            initList: action,
            GetAppoiintments: computed,
            AddAppointments: action,

        });
        this.initList();
    }
    async initList() {
        try {
            const res = await fetch(`${url}/appointments`);
            const data = await res.json();
            runInAction(() => {
                this.listAppointmemt = data;
            })
        }
        catch (err) {
            console.log(err);
        }

    }

    get GetAppoiintments() {
        return this.listAppointmemt;
    }
    async AddAppointments(appointment) {
        try {
            const data = {
                serviceType: appointment.serviceType,
                dateTime: appointment.dateTime, // Ensure dateTime is in the correct format
                clientName: appointment.clientName,
                clientPhone: appointment.clientPhone,
                clientEmail: appointment.clientEmail
            };
    
            const res = await fetch(`${url}/appointment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
    
            if (res.status === 200) {
               // const responseData = await res.json(); // Assuming the server returns the new appointment data
                runInAction(() => {
                    this.listAppointmemt.push({ ...appointment, id: this.cntId++ });
                });
            } else {
                console.log('Failed to add appointment');
            }
        } catch (error) {
            console.log('Error adding appointment:', error);
          //  throw error; // Rethrow the error to handle it in the component
        }
    }

    // async AddAppointments(apointment) {
    //     try {
    //         const res = await fetch(`${url}/appointment`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 //   'Accept': 'application/json'
    //             },
    //             body: JSON.stringify(apointment)
    //         });
    //         if (res.status == 200) {
    //             this.listAppointmemt.push({ ...apointment, id: this.cntId++ });
    //         }
    //     } catch (error) {
    //         console.log("cant add: " + error);
    //     }
    // }


    // async AddAppointments(appointment) {
    //     try {

    //         const data = { serviceType: appointment.serviceType, dateTime: appointment.dateTime,
    //             clientName: appointment.clientName,
    //             clientPhone: appointment.clientPhone,
    //             clientEmail: appointment.clientEmail }

    //         const res = await fetch(`${url}/appointment`, {
    //           method: 'POST',
    //           headers: {
    //             'Content-Type': 'application/json',
    //             // 'Accept': 'application/json'
    //           },
    //           body: JSON.stringify(data)
    //         });
    //         if(res.status==200){
    //           this.listAppointmemt.push({ ...data,id: this.cntId++ });
    //         }
    //       } catch (error) {
    //         console.log("cant add: " + error);
    //       }
    // }
    // async AddService(service) {

    //     try {

    //         const res = await fetch(`${url}/service`, {
    //             method: 'POST',

    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(service)
    //         });

    //         this.listService.push({...service, id: this.cntId++})
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    // }

}
const appointmentList = new DataAppointments();
export default appointmentList;