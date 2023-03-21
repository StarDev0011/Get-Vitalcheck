import Head from 'next/head'
import check from "../Images/benefits/check.png"

import styles from '../styles/Home.module.css'
import favicon from '../Images/covid/favicon/apple-touch-icon.png'
import Introduce from '../components/Introduce'
import Latest from '../components/Latest'
import Benefit from '../components/Benefits'
import Services from '../components/Services'
import Employ from '../components/Employ'
import Doctors from '../components/Doctors'
import Testimonial from '../components/Testimonial'
import Clients from '../components/Clients'
import Include from '../components/Include'
import Exams from '../components/Exams'
import Request from '../components/Request'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vital Check</title>
      </Head>
      <Introduce />
      <Latest />
      <Benefit />
      <Services />
      <Employ />
      <Doctors />
      <Clients />
      <Include />
      <Testimonial img = {check} description = '"We have developed a great partnership with VitalCheck over the last 3 months. They have made our return to office process seamless and helped employees feel comfortable and safe when that is of utmost concern during the pandemic. Scheduling telemedicine appointments was so easy and we love the daily symptom checker we receive via text messages."' role = "Recruitment Manager" name = "JNF" />
      <Exams />
      <Request />
    </div>
  )
}
