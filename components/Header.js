import React, { useState } from "react";
import Image from 'next/image'
import logo from '../Images/footer/logo.png'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
    const [navclass, setNavclass] = useState("topnav");
    const router = useRouter()
    const Hamburger = ()=> {
        if(navclass == "topnav"){
            setNavclass(navclass + " responsive")
        }
        else setNavclass("topnav")
    }
    
    return (
        <div className = "header">
            <div className = "header_container">
                <div onClick = {Hamburger} className = {navclass} id="myTopnav">
                    <div className = "header_logo">
                        <Image src = {logo} alt = "Logo" onClick = {()=> {router.push("/");}} />
                    </div>
                    <Link href = "/">Home</Link>
                    <Link href="/CovidTest">COVID Tracking</Link>
                    <Link href = "/covid_mandate">Vaccine Mandate</Link>
                    <Link href="/Partner">Partners</Link>
                    <Link href = "/request_info"><a className = "header_more_info">Request Info</a></Link>
                
                    <Link href = ""><a href="#" className="icon" onClick = {Hamburger}><i className="fa fa-bars"></i></a></Link>                   
                </div>                
            </div>
        </div>
    );
}
export default Header;