import Link from 'next/link'
const Latest = () => {
    return (
        <div className = "latest_news_body">
            <div className = "latest_news">
                <div className = "latest_left">
                    <h3>Latest News</h3>
                </div>
                <div className = "latest_right">
                    <h4>Screen your employees for COVID-19</h4>
                    <div>
                        <p>Our customized solution will facilitate the safe reopening of your workplace.</p>
                    </div>
                    <Link href = "/how-it-works"><a className = "latest_more">Learn More</a></Link>
                </div>
            </div>
        </div>
    )
}
export default Latest;