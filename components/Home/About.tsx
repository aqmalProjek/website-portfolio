import React from "react";
import Container from "../Container";
import Image from "next/image";
import { Button } from "flowbite-react";

const About = () => {
  return (
    <section className="w-full flex min-h-56  md:pt-12 pt-6 items-center mb-96 lg:mb-0" id="about">
      <Container className="bg-white relative">
        <div className="md:w-[75%] lg:w-[800px] w-full bg-white relative z-0 ">
          <Image
            src={"/bg.jpg"}
            alt="Shoes"
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover"
            style={{ width: "100%" }}
          />
        </div>
        <div className="absolute z-10 md:top-5 right-0 box-border p-10 bg-white md:max-w-[50%] h-full flex flex-col gap-3 justify-between">
          <div className="h-full flex flex-col gap-3 w-full">
            <span className="text-sm tracking-wide text-gray-500 dark:text-gray-400">
              Muchamad Aqmal Hidayat
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
              A BRIEF ABOUT MYSELF
            </h2>
            <p className="font-normal md:text-base text-sm text-gray-700 dark:text-gray-400">
              Hi, I'm Muchamad Aqmal Hidayat, a Full Stack Developer with a degree in
              Information Systems from Ma'soem University. My journey in tech
              began in 2021, and since then, I've worked on numerous projects,
              honing my skills in both front-end and back-end development.
            </p>
          </div>
          <Button
            color="warning"
            className="lg:max-w-[40%] max-w-[60%] rounded-none text-sm md:text-base"
          >
            More About Me &gt;
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default About;
