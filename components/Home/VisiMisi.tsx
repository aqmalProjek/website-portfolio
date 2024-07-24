import React from "react";
import Container from "../Container";

const VisiMisi = () => {
  return (
    <section className="mt-10" id="visi">
      <Container className="bg-violet-200 box-border ">
        <div className="w-[100%] relative flex">
          <div className="w-[20%] h-3 bg-white"></div>
          <div className="w-[60%] h-3 bg-violet-700"></div>
          <div className="w-[20%] h-3 bg-amber-400"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-1 p-5">
          <div>
            <h3 className="text-sm tracking-wide font-bold">VISION</h3>
            <p className="md:text-base text-sm pl-5 mt-5">
              To be a leading Full Stack Developer, leveraging my expertise in
              web technologies to create innovative, user-centric solutions that
              drive success for businesses and enhance the digital experience
              for users worldwide.
            </p>
          </div>
          <div>
            <h3 className="text-sm tracking-wide font-bold mt-5 md:mt-0">
              MISION
            </h3>
            <p className="md:text-base text-sm pl-5 mt-5">
              My mission is to deliver high-quality,
              innovative web solutions by leveraging my expertise in full stack
              development. I am committed to continuous learning and staying
              updated with industry trends to provide cutting-edge applications.
              I aim to foster a collaborative learning environment through
              mentoring and educational content, encouraging growth within the
              tech community. Effective communication and teamwork are key to my
              approach, ensuring successful project outcomes. I prioritize
              creativity in problem-solving and user-centric design to enhance
              the digital experience. Ultimately, I strive to contribute to the
              future of technology by inspiring and nurturing the next
              generation of developers.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VisiMisi;
