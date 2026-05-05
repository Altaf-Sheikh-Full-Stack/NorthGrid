
import Section from "../../system/section/section"
import Text from "../../system/text/text"
import './last.css'

const Last = () => {
    return (
        <Section className="Last">
            <Text font="playful" size="semiLarge">Book a 30 min free strategy call</Text>
            <div className="calendly-inline-widget" data-url="https://calendly.com/defaultcompny0/30min" ></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>

        </Section>
    )
}

export default Last