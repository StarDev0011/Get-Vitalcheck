import Image from "next/image";
import check_mark from "../Images/benefits/check.png"
import benefit_logo from "../Images/benefits/check_blue_orange.png"
const Benefit = () => {
    return (
        <div className = "benefits_body">
            <div className = "benefits_description">
                <div className = "benefit_img">
                    <Image src = {check_mark} width = {30} height = {25} />
                </div>
                <h2>Why book clinics for your employees with VitalCheck-Doctors In Your Office?</h2>
                <h5>We are changing the face of healthcare delivery by bringing the doctor directly to you in the comfort of your office or virtually. Our company leverages technologies and a new scalable delivery model to provide the vital medical checks all of us need for preventive care. No missed appointments, no more wasted hours out of the office, no more accommodating to your doctor’s schedule.</h5>
            </div>
            <div className = "benefits_items">
                <div className = "benefit_item">
                    <div className = "item_title">
                        <Image src = {benefit_logo} width = {28} height = {28} />
                        <p className = "benefit_title">Vital</p>
                    </div>
                    <div className = "item_desc">
                    Detects medical problems early to save lives and reduce long term health care costs significantly thru early detection and treatment
                    </div>
                </div>
                <div className = "benefit_item">
                    <div className = "item_title">
                        <Image src = {benefit_logo} width = {28} height = {28} />
                        <p className = "benefit_title">Easy</p>
                    </div>
                    <div className = "item_desc">
                    Employees simply book appointments at their convenience and see one of our top doctors for all preventive healthcare needs in a private onsite office or virtually.
                    </div>
                </div>
                <div className = "benefit_item">
                    <div className = "item_title">
                        <Image src = {benefit_logo} width = {28} height = {28} />
                        <p className = "benefit_title">Free</p>
                    </div>
                    <div className = "item_desc">
                    Wellness exams are absolutely free to employers and employees. The wellness exam is fully covered by the patient’s health insurance plan as an in-network preventive care visit.
                    </div>
                </div>
                <div className = "benefit_item">
                    <div className = "item_title">
                        <Image src = {benefit_logo} width = {28} height = {28} />
                        <p className = "benefit_title">Private</p>
                    </div>
                    <div className = "item_desc">
                    VitalCheck is HIPAA compliant, following the strictest guidelines to protect health data integrity, confidentiality, and insurance portability.
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Benefit;