import check_mark from "../Images/benefits/check.png"
import Image from "next/image";
const LearnMore = () => {
    return(
        <div className = "how_it_works">
            <div className = "how_it_works_body">
                <div className = "how_description">
                    <div className = "how_img">
                        <Image src = {check_mark} width = {30} height = {25} />
                    </div>
                    <h6>SCREEN YOUR EMPLOYEES FOR COVID-19</h6>
                    <h2>How It Works</h2>
                    <h5>In order to promote safety in the workplace Klarion has designed a proprietary software platform to coordinate the screening, ongoing monitoring and reporting of information to employers related to employees’ risk of infection by the coronavirus (“Virus”). This proprietary software platform implements the following screening, testing, monitoring and reporting protocol:</h5>
                </div>

                <div className="partners__highlighted">
                <p>a. All employees are required to certify via a daily electronic questionnaire delivered by text or email that they have no symptoms of the virus and have not come in contact with someone who is infected with the virus. The questionnaire can be customized for each employer.</p>
                <p>b. If requested by an employer, employees undergo an initial screening by a board-certified physician via a telemedicine appointment booked through the platform to assess the employee’s exposure to the virus and their risk of mortality related to the virus due to heart disease, diabetes and other medical problems.</p>
                <p>c. Employees who certify that they may have symptoms or have been exposed are immediately invited to join a telemedicine call with a physician, to determine if this is a false alarm such as seasonal allergies or if the workplace needs to be notified they may be related to the virus.</p>
                <p>d. If deemed warranted by the physician, the employee will be directed to an authorized test center or sent an in-home test kit for testing for the virus under the remote supervision of a physician. Once cleared, an employee will be authorized to return to the workplace.</p>
                <p>e. Employers have access to a customized dashboard, which indicates whether an employee has completed the daily required certification , whether the employee has been screened and tested for the virus, the results of any test for the virus, and whether the employee has been cleared or not cleared to return to the workplace.</p>
                <p>f. All employees are required to electronically sign a HIPAA compliant form authorizing disclosure of certain protected health information to the employer and a consent to treatment form.</p>
                <p>g. All employee health records are maintained electronically on the platform.</p>
                </div>
            </div>
        </div>
    )
}
export default LearnMore;