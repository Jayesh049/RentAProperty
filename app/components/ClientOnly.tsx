'use client';

// for fixing hydration problems
import { useEffect , useState } from "react";


interface ClientOnlyProps {
    children: React.ReactNode;
}
// to check whether we are in server side rendering or not
const ClientOnly: React.FC<ClientOnlyProps> = ({
    
    children

}) => {
    const [hasMounted , setHasMounted] = useState(false);
    useEffect(() => {

        setHasMounted(true);
    },[])

    if(!hasMounted){
        return null;
    }

    return ( 
        <>
        {children}
        </>
    );
}
 
export default ClientOnly;