import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from '@/app/libs/prismadb';


interface IParams{
    reservationId: string;
}

export async function DELETE(
    request: Request,
    { params } : { params: IParams}
){
    const currentUser = await getCurrentUser();

    if(!currentUser){
        return NextResponse.error();
    }

    const { reservationId } = params;

    if(!reservationId || typeof reservationId !== 'string'){
        throw new Error("Invalid Id");
    }

    // giving ownership of cancellation either user can cancel the reservation 
    // or the owner  of that property can cancel their reservation

    const reservation = await prisma.reservation.deleteMany({
        where: {
            id: reservationId,
            OR: [
                {userId: currentUser.id},
                {listing : {userId :currentUser.id}}
            ]
        }
    });

    return NextResponse.json(reservation);
}