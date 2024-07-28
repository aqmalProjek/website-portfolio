"use client";


import Jumbotron from "@/components/Jumbotron";
import About from "@/components/Home/About";
import Container from "@/components/Container";
import Digitalisasi from "@/components/Home/Digitalisasi";
import VisiMisi from "@/components/Home/VisiMisi";
import StaffCard from "@/components/Home/StaffCard";
import Aktifity from "@/components/Home/Aktifity";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { TiSocialInstagramCircular } from "react-icons/ti";

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
            <StaffCard url="https://www.youtube.com/@AqmalCode-qu7le" socialName="Youtube" AccountName="Aqmal Code" Logo={<FaYoutube className="w-32 h-32"/>} />
            <StaffCard url="https://www.instagram.com/aqmalh2001/?utm_source=qr&igsh=MWVjemFnem0zZnMxcg%3D%3D" socialName="Instagram" AccountName="aqmalh2001" Logo={<TiSocialInstagramCircular className="w-32 h-32"/>} />
            <StaffCard url="https://github.com/aqmalProjek" socialName="Github" AccountName="aqmalProjek" Logo={<FaGithub className="w-32 h-32"/>} />
            <StaffCard url="https://www.linkedin.com/in/muchamad-aqmal-7840332b5/" socialName="Linkedin" AccountName="Muchamad Aqmal" Logo={<FaLinkedin className="w-32 h-32"/>} />
          </div>
        </Container>
      </section>
    </>
  );
}
