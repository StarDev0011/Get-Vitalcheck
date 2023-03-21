import Image from 'next/image'

const Testimonial = (props) => {
    return (
        <div className = "testimonial">
            <div className = "single_testimonial_body">
                <div className = "testimonial_img">
                    <Image src = {props.img} width = {30} height = {25} />
                </div>
                <p className = "testimonial_label">Testimonial</p>
                <p className = "post_desc">{props.description}</p>
                <p className  = "client_role">{props.role}</p>
                <p className = "client_name">{props.name}</p>
            </div>
        </div>
    )
}

export default Testimonial;