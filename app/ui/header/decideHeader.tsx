'use client'
import Header from "./header"
import LoginHeader from "./headerLogin"
export default function FinalHeader(){
    let admin = 'asd'
    // if(typeof window != 'undefined'){ admin = localStorage.getItem('admin')}
    return(
        <>
        {admin ? <LoginHeader /> : <Header />}
      </>
    )
} 