import EmptyState from "../components/EmptyState";
import ClientOnly from '../components/ClientOnly';

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservatioins";
import TripsClient from "./TripsClient";

const TripsPage = async () => {
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
    const reservations = await getReservations({
        userId: currentUser.id
    });

    // if reservation is not found
    if(reservations.length ===0) {
        return(
            <ClientOnly>
                <EmptyState
                    title="No trips found"
                    subtitle="Looks like you havent reserved any trips"
                />
            </ClientOnly>
        )
    }

    // when there is reservation 
    return(
        <ClientOnly>
            <TripsClient
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default TripsPage; 