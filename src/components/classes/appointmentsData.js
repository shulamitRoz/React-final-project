
import {makeObservable,observable,computed,action,runInAction} from 'mobx'
const url="http://localhost:8787"
class DataAppointments{
    cntId = 1;
    
    listAppointmemt=[{    id: "758",
    serviceType: "11",
    dateTime: "2021-06-20T10:00:00.000Z",//מבנה של תאריך ושעה סטנדרטי בjs
    clientName: "אבי כהן",
    clientPhone: "050-1234567",
    clientEmail: "m@m.com",}];
    constructor(){
        makeObservable(this,{
            listAppointmemt:observable,
            initList:action,
            GetAppoiintments:computed,
            AddAppointments:action,
            
        });
        this.initList();
    }
    async initList(){
        try{
            const res=await fetch(`${url}/appointments`);
            const data=await res.json();
            runInAction(()=>{
                this.listAppointmemt=data;
            })
    
    
        }
         catch(err){
             console.log(err);
        }
        
    }
    
    get GetAppoiintments(){
        return this.listAppointmemt;
    }


    async AddAppointments(appointment)
    {
       
        try{
            const res=await fetch(`${url}/appointment`,{
                method:'POST',
                body: JSON.stringify(appointment)
            });
            this.listAppointmemt.push({...appointment, id: this.cntId++})
            
        }
        catch(err){
            console.log(err)
        }
    }

}
const appointmentList=new DataAppointments();
export default appointmentList;