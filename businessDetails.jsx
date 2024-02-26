import { observer } from "mobx-react-lite";
import businessStore from "./classes/businessData";
import { useState, useEffect } from "react";

const BusinessDetails = observer(() => {
    const [isLoading, setIsLoading] = useState(true);
    const [businessDetailsDisplay, setBusinessDetailsDisplay] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const res=await businessStore.initList();
                const data = businessStore.GetDataBusiness;
                console.log('Fetched business data:', data);
                setBusinessDetailsDisplay(data);
            } catch (error) {
                console.error('Error fetching business data:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    // Return null if data is still loading
    if (isLoading || !businessDetailsDisplay) {
        return null;
    }

    // Accessing properties of the observable object
    const { name, address, phone, owner, logo, description } = businessDetailsDisplay;
    console.log(name);

    return (
        <div>
            <h3>Name: {name}</h3>
            <h3>Address: {address}</h3>
            <h3>Phone: {phone}</h3>
            <h3>Owner: {owner}</h3>
            <h3>Logo: {logo}</h3>
            <h3>Description: {description}</h3>
        </div>
    );
});

export default BusinessDetails;
















// import { observer } from "mobx-react-lite";
// import businessStore from "./classes/businessData"
// const BusinessDetails = observer(() => {
//     const businessDetailsDisplay = businessStore.GetDataBusiness;
//     console.log("fggggggggggggg" + businessDetailsDisplay);

//     return (
//         <div>
//             <h3>Name: {businessDetailsDisplay.studioName}</h3>
//             <h3>Address: {businessDetailsDisplay.address}</h3>
//             <h3>Email: {businessDetailsDisplay.email}</h3>
//             <h3>Phone: {businessDetailsDisplay.phone}</h3>
//             <h3>Owner: {businessDetailsDisplay.owner}</h3>
//             <h3>Logo: {businessDetailsDisplay.logo}</h3>
//             <h3>Description: {businessDetailsDisplay.description}</h3>
//             {/* <h3>{businessDetailsDisplay.name}</h3>
//             <h3>{businessDetailsDisplay.address}</h3>
//             <h3>{businessDetailsDisplay.email}</h3>
//             <h3>{businessDetailsDisplay.phone}</h3>
//             <h3>{businessDetailsDisplay.owner}</h3>
//             <h3>{businessDetailsDisplay.logo}</h3>
//             <h3>{businessDetailsDisplay.description}</h3> */}

//         </div>

//     )
// })
// export default BusinessDetails;