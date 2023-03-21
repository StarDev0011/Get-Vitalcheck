import Image from "next/image";
import check_mark from "../Images/benefits/check.png"
import primary_img from "../Images/services/primary-care-physical-exam.png"
import cholesterol_img from "../Images/services/Cholesterol-screening.png"
import nutritional_img from "../Images/services/Nutritional-counseling.png"
import mental_img from "../Images/services/mental-health-icon.png"
import diabetes_img from "../Images/services/Diabetes-screening.png"
import weight_img from "../Images/services/Weight-management.png"
import healthy_img from "../Images/services/healthy-heart-screening.png"
import stroke_img from "../Images/services/stroke-risk-screening.png"
import tobacco_img from "../Images/services/Tobacco-cessation.png"
import blood_img from "../Images/services/blood-pressure-screening.png"
import flu_img from "../Images/services/flu-shots-and-immunizations.png"
import counseling_img from "../Images/services/Counseling.png"

const Services = () => {
    return (
        <div className = "services">
            <div className = "services_body">
                <div className = "service_img">
                    <Image src = {check_mark} width = {25} height = {25} />
                </div>
                <h1>Services to Employees</h1>
                <h4>The most comprehensive preventive care services available.</h4>
                <div className = "service_items">
                    <div className = "item_row">
                        <div className = "service_item">
                            <div className = "service_item_img">
                                <Image src = {primary_img} width = {65} height = {65} />
                            </div>
                            <div className = "service_item_title">
                            Primary care physical exam
                            </div>
                        </div>

                        <div className = "service_item">
                            <div className = "service_item_img">
                                <Image src = {cholesterol_img} width = {65} height = {65} />
                            </div>
                            <div className = "service_item_title">
                            Cholesterol screening
                            </div>
                        </div>

                        <div className = "service_item">
                            <div className = "service_item_img">
                                <Image src = {nutritional_img} width = {65} height = {65} />
                            </div>
                            <div className = "service_item_title">
                            Nutritional counseling
                            </div>
                        </div>
                    </div>

                    <div className = "item_row">
                        <div className = "service_item">
                            <div className = "service_item_img">
                                <Image src = {mental_img} width = {65} height = {65} />
                            </div>
                            <div className = "service_item_title">
                            Mental Health
                            </div>
                        </div>

                        <div className = "service_item">
                            <div className = "service_item_img">
                                <Image src = {diabetes_img} width = {65} height = {65} />
                            </div>
                            <div className = "service_item_title">
                            Diabetes screening
                            </div>
                        </div>

                        <div className = "service_item">
                            <div className = "service_item_img">
                                <Image src = {weight_img} width = {65} height = {65} />
                            </div>
                            <div className = "service_item_title">
                            Weight management
                            </div>
                        </div>
                    </div>

                    <div className = "item_row">
                        <div className = "service_item">
                            <div className = "service_item_img">
                                <Image src = {healthy_img} width = {65} height = {65} />
                            </div>
                            <div className = "service_item_title">
                            Healthy heart screening
                            </div>
                        </div>

                        <div className = "service_item">
                            <div className = "service_item_img">
                                <Image src = {stroke_img} width = {65} height = {65} />
                            </div>
                            <div className = "service_item_title">
                            Stroke-risk screening
                            </div>
                        </div>

                        <div className = "service_item">
                            <div className = "service_item_img">
                                <Image src = {tobacco_img} width = {65} height = {65} />
                            </div>
                            <div className = "service_item_title">
                            Tobacco cessation
                            </div>
                        </div>
                    </div>

                    <div className = "item_row">
                        <div className = "service_item">
                            <div className = "service_item_img">
                                <Image src = {blood_img} width = {65} height = {65} />
                            </div>
                            <div className = "service_item_title">
                            Blood pressure screening
                            </div>
                        </div>

                        <div className = "service_item">
                            <div className = "service_item_img">
                                <Image src = {flu_img} width = {65} height = {65} />
                            </div>
                            <div className = "service_item_title">
                            Flu shots and immunizations
                            </div>
                        </div>

                        <div className = "service_item">
                            <div className = "service_item_img">
                                <Image src = {counseling_img} width = {65} height = {65} />
                            </div>
                            <div className = "service_item_title">
                            Counseling
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;