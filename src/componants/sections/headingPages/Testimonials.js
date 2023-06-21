import TestimonialCard from './Cards/TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
                <TestimonialCard image="https://randomuser.me/api/portraits/men/75.jpg" name="Richard" description="I had fun with my fiance, this is one of the best restaurant i have visited!"/>
                <TestimonialCard image="https://randomuser.me/api/portraits/women/74.jpg" name="Rachel " description="Great food seafoods, I really loved the menu and the people serving :)."/>
                <TestimonialCard image="https://randomuser.me/api/portraits/women/23.jpg" name="Mouna" description="I spent great time with, the restaurant is really located at the nice place!"/>
                <TestimonialCard image="https://randomuser.me/api/portraits/men/11.jpg" name="John" description="Great menu and felt welcomed, great place to bring your family."/>
                <TestimonialCard image="https://randomuser.me/api/portraits/men/58.jpg" name="Jackson" description="Great staffs, there were welcoming, my family and i loved the food."/>
            </section>

        </section>
    );
}