import router, {useRouter} from 'next/router'
import { useState } from 'react'
import Image from 'next/image'
import check from '../Images/latest/check.png'
import axios from 'axios'

const Request_Info = () => {
    const [notifiction, setNotifiction] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [role, setRole] = useState("");

    const onChangeName = (e) => {
        setName(e.target.value);
      }
    const onChangeEmail = (e) => {
    setEmail(e.target.value);
    }
    const onChangeCompany = (e) => {
    setCompany(e.target.value);
    }
    const onChangeTitle = (e) => {
        setTitle(e.target.value);
      }
    const onChangeSubject = (e) => {
        setSubject(e.target.value);
    }
    const onChangeMessage = (e) => {
        setMessage(e.target.value);
    }
    const onChangeRole = (e) => {
        setRole (e.target.value);
    }

    const SubmitData = async event => {
        event.preventDefault();
    
        let requested_url = "https://9o2qfp34mk.execute-api.us-east-1.amazonaws.com/default/forwardMarketingContactSubmission?" + "name=" + name + "&email=" + email + "&company=" + company
        + "&title=" + title + "&subject=" + subject + "&message=" + message + "&role=" + role;
        console.log(requested_url)
        axios
        .get(requested_url)
        setTimeout(() => {
            router.push("/confirmation");
        }, 1000);   
    }    

    return (
        <div className = "request_form_body">
            <div className = "request_form_left"></div>
            <div className = "request_form">
                <Image src = {check} width = {30} height = {25} />
                <p className = "form_label">Request More Information</p>
                <p className = "form_desc">Please complete our Request More Information form and we will contact you to set up a call to discuss how VitalCheck may assist your organization.</p>
                <p className = "radio_label">I am a*</p>
                <form onSubmit = {SubmitData}>
                    <div className="radio-buttons">
                        <div className = "single_role">
                            <input id="hr" value="HR / Benefits / Executive" name="platform" type="radio" onChange={onChangeRole} />
                            HR / Benefits / Executive
                        </div>
                        <div className = "single_role">
                            <input id="wellness" value="Wellness Manager" name="platform" type="radio" onChange={onChangeRole} />
                            Wellness 
                        </div>
                        <div className = "single_role">
                            <input id="carrier" value="Insurance Broker / Carrier" name="platform" type="radio" onChange={onChangeRole} />
                            Insurance Broker / Carrier
                        </div>
                        <div className = "single_role">
                            <input id="employee" value="Employee / Individual" name="platform" type="radio" onChange={onChangeRole} />
                            Employee / Individual
                        </div>
                    </div>
                    <div className = "form_inputs">
                        <div className = "form_left">
                            <input type="text" name="name" placeholder="Your Full Name" onChange = {onChangeName} value = {name} required />
                            <input type="email" name="email" placeholder="Email Address" onChange = {onChangeEmail} value = {email} required />
                            <input type="text" name="company" placeholder="Company" onChange = {onChangeCompany} value = {company} required />
                            <input type="tel" name="title" placeholder="Business Title" onChange = {onChangeTitle} value = {title} />
                        </div>
                        <div className = "form_right">
                            <input type="text" name="subject" placeholder="Subject" onChange = {onChangeSubject} value = {subject} required />
                            <textarea name = "message" placeholder = "Message" onChange = {onChangeMessage} value = {message} />
                        </div>
                    </div>
                    <input className = "send" type="submit" name="message" value="Send" />
                </form> 
            </div>
        </div>
    )
}
export default Request_Info;