// import Carousel from './SpecialsCarousel';
import ItalianSalad from '../../../assets/food/italian-salad.jpeg';
import Calamari from '../../../assets/food/calamari.jpeg';
import Dessert from '../../../assets/food/dessert.jpeg';
import SpecialCard from './Cards/SpecialCard';

export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>Weekend specials</h1>
                <a className="action-button" href={require('../../../assets/menu.jpeg')} target="_blank" rel="noreferrer">Online Menu</a>
            </article>

            <section className="specials-cards">
                <SpecialCard image={ItalianSalad} name="Italian Salad" price="$9.50" description="Rhead leafy romaine lettuce or 2 romaine hearts, roughly chopped
                1/2 medium red onion, thinly sliced
                1/2 cup grated, parmesan cheese."/>
                <SpecialCard image={Calamari}name="Calamari" price="$10.99" description="The mild flavor makes squid a good introductory seafood."/>
                <SpecialCard image={Dessert} name="Dessert" price="$6.99" description="This fudgy cake makes the perfect healthy alternative when you need your chocolate fix. ."/>
            </section>

            {/* <section className="specials-carousel">
                <Carousel />
            </section> */}
        </section>
    );
}