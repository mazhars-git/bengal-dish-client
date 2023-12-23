import React, { useEffect, useState } from 'react';
import '../Css/Description.css';
import image_1 from '../../images/des-1.png';
import image_2 from '../../images/des-2.png';
import image_3 from '../../images/des-3.png';
import icon_1 from '../../images/icon.png';
import icon_2 from '../../images/icon-2.png';
import icon_3 from '../../images/icon-3.png';
import { Container, Row } from 'react-bootstrap';
import CardData from '../CardData/CardData';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();



const Description = () => {
    const desInfo= [
        {
            id: 101,
            image: image_1,
            icon: icon_1,
            heading: 'Fast Delivery',
            details: 'Keep your systems in sync with automated we hook based notifications each time link is paid and how we dream about our future.'
        },
        {
            id: 102,
            image: image_2,
            icon: icon_2,
            heading: 'A Good Auto Responder',
            details: 'Keep your systems in sync with automated we hook based notifications each time link is paid and how we dream about our future.'
        },
        {
            id: 103,
            image: image_3,
            icon: icon_3,
            heading: 'Home Delivery',
            details: 'Keep your systems in sync with automated we hook based notifications each time link is paid and how we dream about our future.'
        }
    ]

    const [cardInfo, setCardInfo] = useState([]);

    useEffect(() => {
        fetch(desInfo)
        .then(res => res.json())
        .then(data => setCardInfo(data))
        
    }, [])
    
    return (
        <div className="description-area">
            <Container>
                <h2 className="py-3" >Why you choose us?</h2>
                <p style={{fontSize: '13px'}}>Barton waited twenty always repair in within we do. An delighted offending <br/> curiosity my is dashwoods at. Boy prosperous increasing surrounded. </p>

                <Row xs={1} md={3} className="g-4 py-3">
                    {
                        desInfo.map(info => <CardData infos={info}></CardData>)
                    }
                </Row>
            </Container>
         
        </div>
    );
};

export default Description;