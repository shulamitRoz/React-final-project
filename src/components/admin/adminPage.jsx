import { useContext, useState } from 'react'
import AditBusinessDatails from './editBusinessDatails'
export default function AdminPage() {

    const [isAditDatails, setIsAditDatails] = useState(false);
    function hendleChange() {
        <EditBusinessDatails setAdit={setIsAditDatails}/>
        

    }

    return (
        <>
            <button onClick={hendleChange}>Adit Business Datails</button>
        </>
    )
}