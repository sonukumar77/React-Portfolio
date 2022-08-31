// here did not need to  import react in functional component
import dp from "../assets/download.jfif"
const Bio = _ => {
    return(
        <section>
            <img src={dp} alt="My Profile "/>
            <h2>Sonu Kumar</h2>
            <h4>I love to write code.</h4>
        </section>
    )
}

export default Bio;