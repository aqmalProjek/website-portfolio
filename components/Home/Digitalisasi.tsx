import React from 'react'
import Container from '../Container'
import { Card } from 'flowbite-react'
import { CgWebsite } from 'react-icons/cg'
import { FaHandshakeAngle } from 'react-icons/fa6'
import { RiSpeakFill } from 'react-icons/ri'
import { TbBrandMinecraft } from 'react-icons/tb'

const Digitalisasi = () => {
  return (
    <section className="flex w-full justify-center pt-20" id="skills">
        <Container className="">
          <div className="flex justify-between gap-5 flex-col lg:flex-row w-full text-center">
            <div className="flex flex-col w-full items-center justify-center">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black">Get to know my abilities more deeply</h2>
              <p className="font-normal md:text-base text-sm text-gray-700 w-full md:max-w-[450px] mt-2.5">
              Apart from creating responsive websites from both the frontend and backend, I also like sharing programming knowledge on my YouTube channel. because my goal is to be useful for myself and society.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3 items-center justify-center mt-10">
            <Card href="#" className="max-w-sm h-full">
              <CgWebsite className="text-4xl font-bold tracking-tight text-gray-900" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Fullstack Dev
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              With extensive experience in both front-end and back-end technologies, I excel in creating comprehensive and dynamic web applications.
              </p>
            </Card>
            <Card href="#" className="max-w-sm h-full">
              <FaHandshakeAngle className="text-4xl font-bold tracking-tight text-gray-900" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Knowledge Sharing
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              Passionate about sharing knowledge and fostering a collaborative learning environment.
              </p>
            </Card>
            <Card href="#" className="max-w-sm h-full">
            <RiSpeakFill className="text-4xl font-bold tracking-tight text-gray-900" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Communication
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              Excellent communication skills that facilitate effective collaboration and project success.
              </p>
            </Card>
            <Card href="#" className="max-w-sm h-full">
              <TbBrandMinecraft className="text-4xl font-bold tracking-tight text-gray-900" />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Creativity
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              A strong creative streak that drives innovative problem-solving and design.
              </p>
            </Card>
          </div>
        </Container>
      </section>
  )
}

export default Digitalisasi