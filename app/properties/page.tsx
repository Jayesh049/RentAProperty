import EmptyState from "../components/EmptyState";
import ClientOnly from '../components/ClientOnly';

import getCurrentUser from "../actions/getCurrentUser";
import TripsClient from "./PropertiesClient";
import getListings from "../actions/getListings";
import PropertiesClient from "./PropertiesClient";

const PropertiesPage = async () => {
    // await currentuser
    const currentUser = await getCurrentUser();

    // if there is no currentuser with the help of empty state show unauthorized and please login
    if(!currentUser) {
        return (
            <ClientOnly>
                <EmptyState 
                    title="Unauthorized"
                    subtitle="Please login"
                />
            </ClientOnly>
        )
    }
// we can find reservations from userId
    const listings = await getListings({
        userId: currentUser.id
    });

    // if reservation is not found
    if(listings.length ===0) {
        return(
            <ClientOnly>
                <EmptyState
                    title="No properties found"
                    subtitle="Looks like you have no properties"
                />
            </ClientOnly>
        )
    }

    // when there is reservation 
    return(
        <ClientOnly>
            <PropertiesClient
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default PropertiesPage; 