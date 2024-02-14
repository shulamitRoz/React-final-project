import {useRef} from 'react';
import AdminPage from './adminPage';
export default function LoginForm(){
    const nameRef =useRef();
    const passwordRef =useRef();
    const url = "http://localhost:8787";
    async function login(e){
        e.preventDefault();
        try{
            const data ={name: nameRef.current.value, password: passwordRef.current.value}
            const res = await fetch(url+'/login',{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            console.log("res", res);
            if (res.status === 200){               
                <AdminPage></AdminPage>
            }
            else if (res.status === 401) {
                alert("Username or password is incorrect");
                // Clear the login fields on incorrect login attempts
                nameRef.current.value = '';
                passwordRef.current.value = '';
            }
        }
        catch(err){
            console.log("error ");
        }
    
    }
    return(
        <form>
          <input type="text" placeholder='insert name' ref={nameRef}/>
          <input type="text" placeholder='insert password' ref={passwordRef}/>
          <button onClick={login}>submit</button>
        </form>
    )
}
