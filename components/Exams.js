import Image from 'next/image'
import aetna from '../Images/exams/aetna.png'
import newjersey from '../Images/exams/newjersey.png'
import blue from '../Images/exams/blue.png'
import us from '../Images/exams/us.png'
import oxford from '../Images/exams/oxford.png'
import Link from 'next/link'
const Exams = () => {
    return (
        <div className = "exams">
            <div className = "exams_body">
                <p className = "exam_desc">Our wellness exams and preventive care services are covered by major insurance carriers</p>
                <div className = "exam_images">
                    <div className = "single_exam_img">
                        <Image src = {aetna} width = {110} height = {60} />
                    </div>
                    <div className = "single_exam_img">
                        <Image src = {oxford} width = {110} height = {60} />
                    </div>
                    <div className = "single_exam_img">
                        <Image src = {blue} width = {110} height = {60} />
                    </div>
                    <div className = "single_exam_img">
                        <Image src = {newjersey} width = {110} height = {60} />
                    </div>
                    <div className = "single_exam_img">
                        <Image src = {us} width = {110} height = {60} />
                    </div>
                </div>
                <h6><span>Don’t see your insurance?</span><span className = "link_contact"><Link href = "/">Contact Us</Link></span></h6>
            </div>
        </div>
    )
}

export default Exams;