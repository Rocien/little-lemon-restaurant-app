export default function TestimonialCard(props) {
    return (
        // PROPS FROM TESTIMONIALS.JS PASSING THROUGH HERE
        <article className="testimonial-card">
            <img src={props.image} alt="delivery Icon"></img>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </article>
    );
}