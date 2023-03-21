import Link from 'next/link'

const Request = () => {
    return (
        <div className = "requests">
            <div className = "request_body">
                <div className = "request_left"></div>
                <div className = "request_right">
                    <p className = "request_info">Interested in learning more about VitalCheck?</p>
                    <button className = "request_more"><Link href = "/request_info">Request More Information</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Request;