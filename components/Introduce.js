import Link from 'next/link'
const Introduce = () => {
    return (
        <div className = "introduce">
            <div className = "intro_left">
                <div className = "spacer"></div>
                <p className = "custom_heading_intro">Introducing VitalCheck:</p>
                <h1 className = "custom_title_intro">Get your vitals checked with VitalCheck. The highest quality preventive care provided right in your office or virtually.</h1>
                <Link href = "/request_info"><a className = "intro_more_info">Request More Information</a></Link>
            </div>
            <div className = "intro_right"></div>
        </div>
    )
}

export default Introduce;