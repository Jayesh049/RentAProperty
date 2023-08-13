// imported prisma client
import { PrismaClient } from '@prisma/client';

// declared global for prisma so it can work through our code
declare global {
    var prisma : PrismaClient | undefined 

}

// we have created client that either searches for globalthis.prisma or will create new prisma client
const client = globalThis.prisma || new PrismaClient()
// we are applying if clause that we are in development or not by this
if(process.env.NODE_ENV !== 'production' ) globalThis.prisma = client

export default client