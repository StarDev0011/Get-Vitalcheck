import axios from 'axios'
import router from 'next/router'
import Image from 'next/image'
import mobile_banner_img from '../Images/covid/covid_header.png'
import deposit_img from '../Images/covid/deposit.png'
import advantage1_img from '../Images/covid/advantage1.png'
import advantage2_img from '../Images/covid/advantage2.png'
import advantage3_img from '../Images/covid/advantage3.png'
import { useState } from 'react'

const Covidtest = () => {
    const [username, setUsername] = useState("");
    const [useremail, setUseremail] = useState("");
    const [usercompany, setUsercompany] = useState("");

    const onChangeName = (e) => {
        setUsername(e.target.value);
      }
    const onChangeEmail = (e) => {
        setUseremail(e.target.value);
    }
    const onChangeCompany = (e) => {
        setUsercompany(e.target.value);
    }

    const SubmitData = (event) => {
        event.preventDefault();
        
        let touch_url = "https://9o2qfp34mk.execute-api.us-east-1.amazonaws.com/default/forwardMarketingContactSubmission?" + "name=" + username + "&email=" + useremail + "&company=" + usercompany;
        console.log(touch_url)
        axios
        .get(touch_url)
        setTimeout(() => {
            router.push("/confirmation");
        }, 1000);
    }

    return (
        <div>
            <div className="section section--top">
                <div className="top__decoration"></div>
                <div className="container container--top">
                    <div className = "mobile_banner">
                        <Image src = {mobile_banner_img} alt = "Mobile Banner Image" />
                    </div>
                    <div className="container__inner">
                        <h1 className="top__title">VitalCheck Wellness COVID Tracking System</h1>
                        <div className="top__text">Fully automate the process of collecting proof of vaccination and testing with our revolutionary tracking solution.</div>
                    </div>
                </div>
            </div>

            <div className="section section--form">
                <div className="container container--form">
                    <div className="form-text">
                        <p>Our customized solution will facilitate the safe reopening of your workplace or campus. Collect proof of vaccination and test track your staff/students with verification uploaded by your personal.</p>
                    </div>
                    <div className="form-image">
                        <Image src = {deposit_img} layout="responsive" objectFit="contain" quality={100} alt = "Deposit Image" />
                    </div>
                    <div className="form-container">
                        <div className="form__title">Get in touch</div>
                        <form onSubmit = {SubmitData}>
                            <input type="text" name="name" placeholder="Your Full Name" onChange = {onChangeName} value = {username} required />
                            <input type="email" name="email" placeholder="Email Address" onChange = {onChangeEmail} value = {useremail} required />
                            <input type="text" name="company" placeholder="Company" onChange = {onChangeCompany} value = {usercompany} required />
                            <input type="tel" name="phone" placeholder="Phone Number" />
                            <input type="submit" name="message" value="Contact Us" />
                        </form>                        
                    </div>
                </div>
            </div>

            <div className="section section--advantages">
                <div className="container container--advantages">
                    <div className="advantage advantage--one">
                        <div className="advantage__icon">
                            <Image src = {advantage1_img} />
                        </div>
                        <div className = "advantage_title">
                            Fully Automated
                        </div>
                        <div className="advantage__description">Our proprietary technology will simplify the verification review process.</div>
                    </div>

                    <div className="advantage advantage--two">
                        <div className="advantage__icon">
                            <Image src = {advantage2_img} />
                        </div>
                        <div className = "advantage_title">
                            Easy Verification
                        </div>
                        <div className="advantage__description">Staff and students will receive a text and email request every 7 days to update their vaccination status.</div>
                    </div>

                    <div className="advantage advantage--three">
                        <div className="advantage__icon">
                            <Image src = {advantage3_img} />
                        </div>
                        <div className = "advantage_title">
                            HIPAA-compliant
                        </div>
                        <div className="advantage__description">Get the ultimate control with 1-click validation of the results by your administration team.</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Covidtest;