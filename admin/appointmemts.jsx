// import appointmentList from '../classes/appointmentsData'
// import { observer } from 'mobx-react-lite'; 
// import MeetingDetails from './meetingDetails ';

// const AppointmemtsDisplay = observer(() => {
//     const allAppointments = appointmentList.GetAppoiintments;

//  console.log("Number of appointments:", allAppointments.length);
//     console.log("Appointments:", allAppointments);    const today = new Date().toISOString().split('T')[0];
//     //ממין לתאריך של היום
//     const todayAppointments = allAppointments.filter(
//         appointment => appointment.dateTime.split('T')[0] === today);

//     // ממין לפי שעות
//     const sortedAppointments = todayAppointments.sort((a, b) => {
//         return new Date(a.dateTime) - new Date(b.dateTime);
//     });
//     return (
//         <div>
            
//             {/* <h2>Today's Appointments:</h2>
//             {sortedAppointments.length != 0 ? (
//                 <p>No appointments scheduled for today.</p>
//             ) : (
//                 sortedAppointments.map((appointment, index) => (
//                     <div key={index} style={{ fontWeight: 'bold' }}>
//                         <p>Type of service: {appointment.serviceType}</p>
//                         <p>Person ordering: {appointment.clientName}</p>
//                     </div>
//                 ))
//             )} */}
//                 <h2>Today's Appointments:</h2>
//       {sortedAppointments.length === 0 ? (
//         <p>No appointments scheduled for today.</p>
//       ) : (
//         sortedAppointments.map(appointment => (
//           <MeetingDetails key={appointment.id} meeting={appointment} />
//         ))
//       )}
//         </div>
//     );


// });
// export default AppointmemtsDisplay;



