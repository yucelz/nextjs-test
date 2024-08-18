'use client'

import { useSession } from "next-auth/react";
export default function Profile(){
    const session = useSession();
    
    if(session.data?.user){
        return <div>
            <h1>{session.data.user.name}</h1>
            <p>{session.data.user.email}</p>
        </div>
    }else{
        return <div>
            <h1>You are not logged in</h1>
        </div>
    }
}