import Image from "next/image"
import footer_logo from '../Images/footer/footer_logo.png'
import site_footer_logo from '../Images/footer/site_footer_logo.png'
import Link from 'next/link'
const Footer = () => {
    return(
        <div className = "main_footer">
            <div className = "footer_body">
                <div className = "footer_top">
                    <div className = "footer_img">
                        <Image src = {footer_logo} width = {210} height = {70} />
                    </div>
                    <div className = "footer_contact">
                        <div className = "contact1">
                            <p><strong>Klarion Wellness Inc.,</strong></p>
                            <p><strong>Administrative Agent</strong></p>
                            <p>201 West 37th Street</p>
                            <p>Suite 402</p>
                            <p>New York, NY 10018</p>
                        </div>
                        <div className = "contact2">
                            <p><strong>ED Medical, P.C.</strong></p>
                            <p>140 Grand Avenue,</p>
                            <p>Englewood, NJ 07631</p>
                        </div>
                        <div className = "contact3">
                            <p>Phone: 646. 450. 7751</p>
                            <p>Email: <span><a href = "mailto:info@getvitalcheck.com">info@getvitalcheck.com</a></span></p>
                        </div>
                    </div>
                    <div className = "footer_logo">
                        <div className = "footer_text">
                        The VitalCheck-Doctors In Your Office Program (the “VitalCheck Program”) is a collaboration between ED Medical, P.C., a New Jersey based medical practice, and Klarion Wellness, Inc., a company located in New York, New York, designed to bring high-quality preventive healthcare to employees at their place of work or via telemedicine. Under the VitalCheck Program board certified physicians conduct wellness and other preventive medical examinations, including back to work screening for COVID-19, and provide related preventive health services, . ED Medical, P.C. oversees the medical services provided under the Program. Klarion Wellness is the administrative agent for the Program and provides administrative services and proprietary technology to the Program.
                        </div>
                        <div className = "footer_site_logo">
                            <Image src = {site_footer_logo} width = {205} height = {132} />
                        </div>
                    </div>
                </div>
                <div className = "footer_bottom">
                    <div className = "footer_privacy">
                        <Link href = "/terms-of-service">Terms of Service</Link>
                        <Link href = "/privacy-policy">Privacy Policy</Link>
                        <Link href = "/notice-of-privacy">Notice of Privacy</Link>
                    </div>
                    <div className = "footer_copy"><p>VitalCheck-Doctors In Your Office © 2020</p></div>
                </div>
            </div>
        </div>
    )
}

export default Footer