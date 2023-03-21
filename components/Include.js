import Image from 'next/image'
import ameri from '../Images/clients/ameri.png'
import atlas from '../Images/clients/atlas.png'
import fordham from '../Images/clients/fordham.png'
import jnf from '../Images/clients/jnf.png'
import kpf from '../Images/clients/kpf.png'
import nomura from '../Images/clients/nomura.png'
import party from '../Images/clients/party.png'
import princeton from '../Images/clients/princeton.png'
import success from '../Images/clients/success.png'
import tishman from '../Images/clients/tishman.png'

const Include = () => {
    return (
        <div className = "include_clients">
            <div className = "include_clients_body">
                <p className = "include_label">OUR CLIENTS INCLUDE</p>
                <div className = "images_row">
                    <div className = "single_client_image"><Image src = {nomura} width = {110} height = {60} /></div>
                    <div className = "single_client_image"><Image src = {princeton} width = {110} height = {60} /></div>
                    <div className = "single_client_image"><Image src = {success} width = {110} height = {60} /></div>
                    <div className = "single_client_image"><Image src = {party} width = {110} height = {60} /></div>
                    <div className = "single_client_image"><Image src = {jnf} width = {110} height = {60} /></div>                                       
                    <div className = "single_client_image"><Image src = {fordham} width = {110} height = {60} /></div>
                    <div className = "single_client_image"><Image src = {ameri} width = {110} height = {60} /></div>
                    <div className = "single_client_image"><Image src = {kpf} width = {110} height = {60} /></div>
                    <div className = "single_client_image"><Image src = {atlas} width = {110} height = {60} /></div>
                    <div className = "single_client_image"><Image src = {tishman} width = {110} height = {60} /></div>
                </div>
            </div>
        </div>
    )
}

export default Include;