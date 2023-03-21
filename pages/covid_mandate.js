import Image from "next/image";
import top_right from "../Images/mandate/top_right.png"
import service_1 from "../Images/mandate/s1.png"
import service_2 from "../Images/mandate/s2.png"
import service_3 from "../Images/mandate/s3.png"
import service_4 from "../Images/mandate/s4.png"
import service_5 from "../Images/mandate/s5.png"
import service_6 from "../Images/mandate/s6.png"
import trusted_1 from "../Images/mandate/t1.png"
import trusted_2 from "../Images/mandate/t2.png"
import trusted_3 from "../Images/mandate/t3.png"
import trusted_4 from "../Images/mandate/t4.png"
import trusted_5 from "../Images/mandate/t5.png"
import trusted_6 from "../Images/mandate/t6.png"
import trusted_7 from "../Images/mandate/t7.png"
import trusted_8 from "../Images/mandate/t8.png"
import trusted_9 from "../Images/mandate/t9.png"
import details from "../Images/mandate/details.png"
import Link from "next/link"

const Mandate = () => {
    return (
        <div className = "mandate">
            <div className = "mandate_body">
                <div className = "vaccine_mandate">
                    <div className = "vaccine_text">
                        <h2>The Vaccine Mandate is here. VitalCheck can help.</h2>
                        <p>
                            Companies with at least 100 employees must ensure their workers get a COVID-19 vaccine or undergo weekly testing.
                            The mandate ncreases protections for 84M private sector workers.<br/>
                            Scroll down to see how VitalCheck can assist your organization.
                        </p>
                    </div>
                    <div className = "vaccine_img">
                        <Image src = {top_right} width = {540} height = {360} alt = "Mandate Banner" />
                    </div>
                </div>
                <div className = "mandate_our_services">
                    <div className = "services_main">
                        <h1>Our Services</h1>
                        <div className = "single_service">
                            <div className = "single_service_img">
                                <Image src = {service_1} alt = "Service 1" width = {56} height = {56} />
                            </div>
                            <div className = "single_sevice_desc">
                                Our technology provides an easy platform for employees to upload proof of vaccination and weekly COVID test results via text, email or app. Our HIPAA-compliant system generates comprehensive OSHA-mandated reports in a matter of seconds. 
                            </div>
                        </div>

                        <div className = "single_service">
                            <div className = "single_service_img">
                                <Image src = {service_2} alt = "Service 2" width = {56} height = {56} />
                            </div>
                            <div className = "single_sevice_desc">
                                Supply our customers with FDA-approved Rapid and PCR COVID tests <strong>In bulk.</strong>
                            </div>
                        </div>

                        <div className = "single_service">
                            <div className = "single_service_img">
                                <Image src = {service_3} alt = "Service 3" width = {56} height = {56} />
                            </div>
                            <div className = "single_sevice_desc">
                                Administers onsite covid vaccine clinics and onsite testing clinics. Supports at-home COVID testing for employees, contractors, vendors and visitors.
                            </div>
                        </div>

                        <div className = "single_service">
                            <div className = "single_service_img">
                                <Image src = {service_4} alt = "Service 4" width = {56} height = {56} />
                            </div>
                            <div className = "single_sevice_desc">
                                Integrate with your security badging system to ensure only compliant individuals can access the workplace. 
                            </div>
                        </div>

                        <div className = "single_service">
                            <div className = "single_service_img">
                                <Image src = {service_5} alt = "Service 5" width = {56} height = {56} />
                            </div>
                            <div className = "single_sevice_desc">
                                Provide support for medical and religious exemptions. 
                            </div>
                        </div>

                        <div className = "single_service">
                            <div className = "single_service_img">
                                <Image src = {service_6} alt = "Service 6" width = {56} height = {56} />
                            </div>
                            <div className = "single_sevice_desc">
                                VitalCheck takes responsibility for platform data audits and protects your company from liability. 
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "trusted">
                    <h1>Trusted By</h1>
                    <div className = "trusted_images">
                        <div className = "three_trusted">
                            <div className = "single_trusted_img">
                                <Image src = {trusted_1} alt = "Trusted By" />
                            </div>
                            <div className = "single_trusted_img">
                                <Image src = {trusted_2} alt = "Trusted By" />
                            </div>
                            <div className = "single_trusted_img">
                                <Image src = {trusted_3} alt = "Trusted By" />
                            </div>
                        </div>
                        <div className = "three_trusted">
                            <div className = "single_trusted_img">
                                <Image src = {trusted_4} alt = "Trusted By" />
                            </div>
                            <div className = "single_trusted_img">
                                <Image src = {trusted_5} alt = "Trusted By" />
                            </div>
                            <div className = "single_trusted_img">
                                <Image src = {trusted_6} alt = "Trusted By" />
                            </div>
                        </div>
                        <div className = "three_trusted">
                            <div className = "single_trusted_img">
                                <Image src = {trusted_7} alt = "Trusted By" />
                            </div>
                            <div className = "single_trusted_img">
                                <Image src = {trusted_8} alt = "Trusted By" />
                            </div>
                            <div className = "single_trusted_img">
                                <Image src = {trusted_9} alt = "Trusted By" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "mandate_details">
                    <div className = "mandate_details_body">
                        <h1>Vaccine Mandate Details</h1>
                        <div className = "mandate_details_summary">
                            In early September, President Biden announced he was taking steps to get more Americans 
                            vaccinated and turn the tide on COVID-19.<br />
                            On Thursday, the administration rolled out two of those steps — two different vaccine rules 
                            covering more than 100 million workers.  <span className = "view_osha"><Link href = "https://www.osha.gov/news/newsreleases/national/11042021">View the OSHA federal mandate here.</Link></span><br />
                            Here are the details:
                        </div>
                        <div className = "mandate_detail_items">
                            <div className = "detail_items_txt">
                                <div className = "single_detail">
                                    <h3>Fully Vaccinated By Jan 4</h3>
                                    <p>
                                        Companies with 100 or more employees must ensure that their employees are fully vaccinated by Jan 4 
                                        or test negative at least once a week, as issued by Occupational Safety and Health Administration (OSHA).
                                    </p>
                                </div>
                                <div className = "single_detail">
                                    <h3>Paid Time Off for Vaccine</h3>
                                    <p>
                                        Companies must pay for the time off needed by employees to get the vaccine and provide sick leave 
                                        for workers who need to recover from vaccine side effects
                                    </p>
                                </div>
                                <div className = "single_detail">
                                    <h3>Employers Don’t Need to Pay for Testing</h3>
                                    <p>
                                        Employers are not required to pay for testing to workers who decline the vaccine.
                                    </p>
                                </div>
                                <div className = "single_detail">
                                    <h3>Unvaccinated Workers Need to Wear Masks</h3>
                                    <p>
                                        Starting Dec 5, unvaccinated employees need to wear masks while on the job.
                                    </p>
                                </div>
                                <div className = "single_detail">
                                    <h3>Healthcare and Federal Workers Have No Testing Option</h3>
                                    <p>
                                        The government has ordered all healthcare workers to be vaccinated with no 
                                        weekly testing option and it covers all employees, clinical and nonclinical. 
                                        Federal workers and contractors are also required to get the vaccine.
                                    </p>
                                </div>
                            </div>
                            <div className = "detail_items_img">
                                <Image src = {details} alt = "Mandate Details" width = {400} height = {720} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mandate;