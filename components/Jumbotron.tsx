import Image from "next/image";
import React from "react";
import Container from "./Container";

const Jumbotron = () => {
  return (
    <section className=" w-full min-h-[70vh] bg-black max-h-[800px] relative" id="home">
      <Image
        src="/Bg_1.jpg"
        alt="Gambaran event"
        fill
        objectFit="cover"
        priority={true}
        className="relative"
      />
      <div className="bg-white w-full h-full absolute z-10 top-0 flex gradient items-center ">
        <Container className="pl-5 md:pl-0">
          <div className="flex flex-col text-white gap-2 max-w-[70%]">
            <small className="text-xs md:text-sm tracking-wide text-white ">
              WELCOME TO THE AQMAL CODE PORTFOLIO WEBSITE
            </small>
            <h1 className="text-3xl md:text-5xl font-bold tracking-wider">
            I like programming and I also like sharing knowledge
            </h1>
            <p className="md:text-base text-sm">
              Programmer | Youtuber | Collage
            </p>
            <p className="md:text-base text-sm">
              This website was created as a portfolio, to introduce myself more
              deeply
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Jumbotron;
