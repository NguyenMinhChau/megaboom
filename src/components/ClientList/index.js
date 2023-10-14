import React from 'react'
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ClientList({ clientLists }) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="flex items-center 2xl:w-[996px] w-full h-[110px] mt-[30px] rounded-[30px] border border-blue-600">
            <Slider {...settings}>
                {
                    clientLists.map((client, index) => (
                        <div key={index} className="mx-[10px] justify-center items-center" style={{ display: 'inline-flex' }}>
                            <Image
                                src={client}
                                objectFit="cover"
                                style={{
                                    width: "120px",
                                }}
                            />
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default ClientList