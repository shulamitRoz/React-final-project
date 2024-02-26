
import { makeObservable, observable, computed, action, runInAction } from 'mobx'
const url = "http://localhost:8787"
class DataService {
    cntId = 1;
    listService = [];
    constructor() {
        makeObservable(this, {
            listService: observable,
            initList: action,
            GetService: computed,
            AddService: action,
        });
        this.initList();
    }
    async initList() {
        try {
            const res = await fetch(`${url}/services`);
            const data = await res.json();
            runInAction(() => {
                this.listService = data;
            })
        }
        catch (err) {
            console.log(err);
        }
    }

    get GetService() {
        return this.listService;
    }

    async AddService(service) {

        try {

            const res = await fetch(`${url}/service`, {
                method: 'POST',

                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(service)
            });
           
            this.listService.push({...service, id: this.cntId++})
        }
        catch (err) {
            console.log(err)
        }
    }
}
const serviceList = new DataService();
export default serviceList;