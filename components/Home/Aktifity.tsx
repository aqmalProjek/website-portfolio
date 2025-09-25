import React from "react";
import Container from "../Container";
import { Button, Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

const Aktifity = () => {
  return (
    <section className="mt-10">
      <Container className="box-border ">
        <div className="grid md:grid-cols-2 gap-1 p-5">
          <div className="h-full ">
            <h3 className="text-2xl tracking-wide font-bold">
              Recent new project
            </h3>
            <Card
              className="w-full shadow-none rounded-none p-5 h-full"
              renderImage={() => (
                <div className="w-full  relative">
                  <Image
                    src={"/erp.png"}
                    alt="Shoes"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="object-cover"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              )}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Complex ERP In PT Kencana Metalindo
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                I have experience developing and maintaining complex ERP systems with hundreds to nearly a thousand tables per branch, where each branch has its own database yet remains interconnected and relational across branches. In this project, I designed, built, and integrated various business modules (sales, purchasing, inventory, accounting, and multi-branch consolidation) using complex data relationships to ensure business processes run efficiently, systematically, and consistently across all branches.
              </p>
              <Link href="/detailproject/erp" className="lg:max-w-[40%] max-w-[60%] rounded-none text-sm md:text-base bg-yellow-400 text-white flex items-center justify-center py-2">     
                Read More &gt;
                </Link>
            </Card>
          </div>
          <div className="mt-5 md:mt-0">
            <h3 className="text-2xl tracking-wide font-bold mt-5 md:mt-0">
              More Project
            </h3>
            <div className="grid gap-3">
              <Card
                href="#"
                className="w-full shadow-none rounded-none border-none"
              >
                <a className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white" href="https://www.airalmasoem.com/"
                  target="_blank">
                  Website Company Profile & Marketing PT Muawanah Al Masoem
                </a>
                <p
                  className="font-normal text-gray-700 dark:text-gray-400"
                  
                >
                  company profile and marketing website, is a website for the
                  company profile of PT Muawanah Al Masoem and organizes all
                  centers and branches as well as this website for ordering Al
                  Masoem water products
                </p>
              </Card>
              <Card
                href="#"
                className="w-full shadow-none rounded-none border-none"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Website Profile & PPDB SMPN 2 Cicalengka
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  This website is currently under development
                </p>
              </Card>
              <Card
                href="https://eventaja.vercel.app/"
                className="w-full shadow-none rounded-none border-none"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Event Aja
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  The website is a bridge between the event owner, service
                  providers and sponsors
                </p>
              </Card>
              <Card
                href="https://spp-teal.vercel.app/"
                className="w-full shadow-none rounded-none border-none"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Website Payment SPP
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  This is an interactive, school payment website whose UI/UX
                  design is close to the original payment
                </p>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Aktifity;
