import Image from 'next/image'
import check from "../Images/benefits/check.png"

const Doctors = () => {
    return (
        <div className = "doctors_body">
            <div className = "doctors">
                <div className = "doctors_left">
                </div>
                <div className = "doctors_right">
                    <div className = "spacer_doctors"></div>
                    <Image src = {check} width = {30} height = {25} />
                    <p className = "custom_heading_employ">LEADING DOCTORS</p>
                    <h1 className = "custom_title_employ">Get the best preventive care possible</h1>
                    <h4>VitalCheck only brings board-certified physicians for each and every appointment.</h4>
                    <div className = "spacer_doctors"></div>
                </div>
            </div>
        </div>
    )
}
export default Doctors;