"use client";


import Jumbotron from "@/components/Jumbotron";
import About from "@/components/Home/About";
import Container from "@/components/Container";
import Digitalisasi from "@/components/Home/Digitalisasi";
import VisiMisi from "@/components/Home/VisiMisi";
import StaffCard from "@/components/Home/StaffCard";
import Aktifity from "@/components/Home/Aktifity";

export default function Home() {
  return (
    <>
      <Jumbotron />
      <About />
      <Digitalisasi />
      <VisiMisi />
      <Aktifity />
      <section className="flex flex-col w-full justify-center pt-20" id="social">
        <div className="flex justify-between gap-5 flex-col lg:flex-row w-full text-center">
          <div className="flex flex-col w-full items-center justify-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black">
            My Social Media
            </h2>
          </div>
        </div>
        <Container className="" >
          <div className="grid md:grid-cols-4 gap-2 mt-10">
            <StaffCard socialName="Youtube" AccountName="Aqmal Code" Logo="yt.jpg" />
            <StaffCard socialName="Instagram" AccountName="aqmalh2001" Logo="ig.png" />
            <StaffCard socialName="Facebook" AccountName="Muchamad Aqmal" Logo="fb.jpg" />
            <StaffCard socialName="Linkedin" AccountName="Muchamad Aqmal" Logo="linkedin.png" />
          </div>
        </Container>
      </section>
    </>
  );
}
