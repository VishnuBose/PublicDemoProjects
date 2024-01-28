import { useCallback, useRef } from "react";
import { Text } from "../atoms/Text"
import { TopVehicleTexts } from "../particles/DataLists"
import Slider from "react-slick";
import { Card } from "../molecules/Card";

import game1 from "../../assets/game1.jpeg";
import game2 from "../../assets/game2.jpeg";
import game3 from "../../assets/game3.jpeg";
import game4 from "../../assets/game4.jpeg";
import game5 from "../../assets/game5.jpeg";



import { Button } from "../atoms/Button";
import { CaretLeft, CaretRight, Jeep } from "@phosphor-icons/react";


const TopDestination = () => {

    const sliderRef = useRef<Slider | null>();

    // Function for next button
    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();

        }
    };
    // function for previous button
    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }

    };

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };

    const renderVehicles = useCallback((element: number) => {
        switch (element) {
            case 0:
                return game1;
            case 1:
                return game2;
            case 2:
                return game3;
            case 3:
                return game4;
            case 4:
                return game5;
            case 5:
                return game2;
            default:
                return game5;
        }
    }, [])

    return (
        <section className="w-full h-auto flex flex-col items-center justify-center relative lg:px-24 md:px-20 px-6 my-20">
            {TopVehicleTexts.firstText && (
                <Text as="p" className="font-light text-base text-color3/80 tracking-widest">
                    {TopVehicleTexts.firstText}
                </Text>
            )}
            {TopVehicleTexts.secondText && (
            <Text as="h2" className="md:text-4xl text-2xl font-medium capitalize text-color3">
                {TopVehicleTexts.secondText}
            </Text>
            )}
            {/* Controllers  */}
            <div className="mt-12 w-full flex justify-end gap-5 items-center md:px-6 px-3">
                <Button onClick={previous} className="cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full" type="button">
                    <CaretLeft size={18} color="currentColor" weight="fill" />
                </Button>
                <Button onClick={next} className="cursor-pointer outline-none border-none bg-color2/30 text-color3 hover:bg-color2 p-2 rounded-full" type="button">
                    <CaretRight size={18} color="currentColor" weight="fill" />
                </Button>
            </div>

            {/* Slides  */}
            <div className="w-full h-auto mt-4">
                <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
                    {
                        TopVehicleTexts.cards.map((card, index) => (
                            <div key={index} className="md:px-6 px-3">
                                <Card cardClass="overflow-hidden shadow-md rounded-lg cursor-pointer group" imageAlt={card.name} imageSrc={renderVehicles(index)} imageWrapperClass="w-full h-[250px] overflow-hidden" cover="group-hover:scale-125 transition duration-500 ease" textWrapperClass="flex flex-col gap-4 w-full px-5 py-5">
                                    {card.name && (
                                    <div className="flex justify-between items-center">
                                        <Text as="h4" className="text-base font-medium text-color3">
                                            {card.name}
                                        </Text>
                                        <Text as="small" className=" text-color3 font-light text-sm">
                                            {card.company}
                                        </Text>
                                    </div>
                                    )}
                                    {card.year && (
                                    <div className="w-full flex gap-4 items-center text-color3">
                                        <Jeep size={20} color="currentColor" weight="fill" />
                                        <Text as="p" className=" text-color3 font-light text-base">
                                            {card.year}
                                        </Text>
                                    </div>
                                    )}
                                    {card.specifications.Graphics && (
                                    <div className="w-full flex gap-4 items-center text-color3">
                                        <Jeep size={20} color="currentColor" weight="fill" />
                                        <Text as="p" className=" text-color3 font-light text-base">
                                            {card.specifications.Graphics}
                                        </Text>
                                    </div>
                                    )}
                                    {card.specifications.Memory && (
                                    <div className="w-full flex gap-4 items-center text-color3">
                                        <Jeep size={20} color="currentColor" weight="fill" />
                                        <Text as="p" className=" text-color3 font-light text-base">
                                            {card.specifications.Memory}
                                        </Text>
                                    </div>
                                    )}
                                    {card.specifications.OS && (
                                    <div className="w-full flex gap-4 items-center text-color3">
                                        <Jeep size={20} color="currentColor" weight="fill" />
                                        <Text as="p" className=" text-color3 font-light text-base">
                                            {card.specifications.OS}
                                        </Text>
                                    </div>
                                    )}
                                    {card.specifications.Processor && (
                                    <div className="w-full flex gap-4 items-center text-color3">
                                        <Jeep size={20} color="currentColor" weight="fill" />
                                        <Text as="p" className=" text-color3 font-light text-base">
                                            {card.specifications.Processor}
                                        </Text>
                                    </div>
                                    )}
                                    {card.specifications.Processor && (
                                    <div className="w-full flex gap-4 items-center text-color3">
                                        <Jeep size={20} color="currentColor" weight="fill" />
                                        <Text as="p" className=" text-color3 font-light text-base">
                                            {card.specifications.Processor}
                                        </Text>
                                    </div>
                                    )}
                                    {card.specifications.Storage && (
                                    <div className="w-full flex gap-4 items-center text-color3">
                                        <Jeep size={20} color="currentColor" weight="fill" />
                                        <Text as="p" className=" text-color3 font-light text-base">
                                            {card.specifications.Storage}
                                        </Text>
                                    </div>
                                    )}
                                </Card>
                            </div>
                        ))
                    }
                </Slider>
            </div>

        </section>
    )
}

export default TopDestination