import BannerPromotion from "../component/HomePage/banner";
import CategoryCard from "../component/HomePage/CategoryCard";
import Service from "../component/HomePage/Service";
import { Provider } from "../component/kzContex";

import { useEffect } from 'react';
import { ScrollSpy } from 'bootstrap';

const HomePage = () => {

    useEffect(() => {
        const spy = new ScrollSpy(document.body, {
          target: '#navbar-example2',
        });
      }, []);

    return(
        <Provider>
            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-smooth-scroll="true">
                <section id="home">
                    <BannerPromotion />
                </section>

                <section id="product" style={{ padding: '1px' }}>
                    <CategoryCard />
                    <Service />
                </section>
            </div>
        </Provider>
    )
}

export default HomePage;