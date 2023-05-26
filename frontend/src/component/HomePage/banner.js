import { useContext } from "react";
import { Contex } from "../kzContex";
import { Carousel } from 'react-bootstrap';

const BannerPromotion = () => {
    const {banner} = useContext(Contex);

    return(
        <div className="container bannerpromotion">
            <Carousel interval={5000}>
                {banner.map((b, index) => (
                <Carousel.Item key={index} className={index === 0 ? 'active' : ''}>
                    <img
                    className="d-block w-100"
                    src={b.image}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5>{b.title}</h5>
                    <h6>{b.description}</h6>
                    </Carousel.Caption>
                </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default BannerPromotion;