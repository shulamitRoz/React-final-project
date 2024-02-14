
import {makeObservable,observable,computed,action,runInAction} from 'mobx'
const url="http://localhost:8787"
class DataBusiness{
    cntId = 1;
    listbusiness=[];
    constructor(){
        makeObservable(this,{
            listbusiness:observable,
            initList:action,
            GetDataBusiness:computed,
            AddBusiness:action,
            
        });
        this.initList();
    }
    async initList(){
        try{
            const res=await fetch(`${url}/businessData`);
            const data=await res.json();
            runInAction(()=>{
                this.listService=data;
            })
    
    
        }
         catch(err){
             console.log(err);
        }
        
    }
    
    get GetDataBusiness(){
        return this.listbusiness;
    }


    async AddBusiness(business)
    {
       
        try{
            const res=await fetch(`${url}/businessData`,{
                method:'POST',
                body: JSON.stringify(business)
            });
            this.listbusiness.push({...business, id: this.cntId++})
            
        }
        catch(err){
            console.log(err)
        }
    }

}
const businessList=new DataService();
export default businessList;