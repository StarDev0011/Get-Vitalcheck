import Image from 'next/image'
import check from "../Images/latest/check.png"
import { useState, useEffect } from 'react'

const Clients = () => {
    const [number, setNumber] = useState(0);
    const [patients, setPatients] = useState(0)
    useEffect(() => {        
      if (number === 600) {
          return;
      } else setNumber(number+1)
    }, [number])
    useEffect(() => {
        if(patients === 150000){
            return;
        } else setPatients(patients + 250)
    }, [patients])
    return (
        <div className = "clients">
            <div className = "clients_body">
                <div className = "client_tick">
                    <Image src = {check} width = {30} height = {25} />
                </div>
                <p className = "client_label">OUR CLIENTS</p>
                <p className = "nationwide">Serving clients nationwide.</p>
                <p className = "client_desc">We serve a diverse group of clients of all sizes from different industries across the United States, including financial institutions, educational institutions, industrial companies, sports organizations, law firms, and others.</p>
                <div className = "client_numbers">
                    <div className = "client_companies">
                        <p className = "have_served">We have served over</p>
                        <p className = "numbers">{number}</p>
                        <p className = "companies">organizations/companies</p>
                    </div>
                    <div className = "client_patients">
                        <p className = "have_served">We have served over</p>
                        <p className = "numbers">{patients}</p>
                        <p className = "companies">patients/employees</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Clients;