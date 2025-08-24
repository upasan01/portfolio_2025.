import { Card } from 'pixel-retroui';
import { FaArrowRight } from "react-icons/fa"

export const Projects = () => {
    return (
        <div>
            <p className="lg:text-7xl text-5xl text-white mb-8 text-center pb-40">PROJECTS</p>
            <div className='flex flex-col lg:flex-row items-center gap-10 mb-10'>
                <Card
                    className='p-4 lg:w-[25vw] w-[85vw] flex flex-col gap-5 justify-between'
                    bg='transparent'
                    textColor='white'
                    borderColor='white'
                    shadowColor='black'>
                    <p className='text-2xl'>OuraCode</p>
                    <p className='text-dotgothic text-sm text-red-500'>OuraCode is a collaborative code editor made by me and one of my friend, here you can code with your friends at realtime, here you can run the code in our terminal, you also can download code with its extension. And we also have out AuraFarmer AI which will help you to code more efficiently.</p>
                    <div className='flex flex-wrap lg:flex-nowrap gap-2'>
                        <Card borderColor='white' textColor='black' bg='white' className='font-semibold text-sm'>ReactJS</Card>
                        <Card borderColor='white' textColor='black' bg='white' className='font-semibold text-sm'>ExpressJS</Card>
                        <Card borderColor='white' textColor='black' bg='white' className='font-semibold text-sm'>Docker</Card>
                    </div>
                    <div className='flex justify-end'>
                        <Card borderColor='white' textColor='white' shadowColor='white'>
                            <a
                                className='flex items-center gap-2 font-xs'
                                href='https://github.com/SANJOY-PAUL-0981/OuraCode'
                                target='blank_'>Learn More <FaArrowRight /></a>
                        </Card>
                    </div>
                </Card>

                <Card
                    className='p-4 lg:w-[25vw] w-[85vw] flex flex-col gap-5 justify-between'
                    bg='transparent'
                    textColor='white'
                    borderColor='white'
                    shadowColor='black'>
                    <p className='text-2xl'>LearnAI</p>
                    <p className='text-dotgothic text-sm text-red-500'>LearnAI is a smart chatbot platform that lets users have AI-powered conversations based on YouTube videos. Simply paste a video link, and LearnAI generates interactive, insightful chats to help you understand content better, faster, and in a more engaging way.</p>
                    <div className='flex flex-wrap lg:flex-nowrap gap-2'>
                        <Card borderColor='white' textColor='black' bg='white' className='font-semibold text-sm'>MongoDB</Card>
                        <Card borderColor='white' textColor='black' bg='white' className='font-semibold text-sm'>ExpressJS</Card>
                        <Card borderColor='white' textColor='black' bg='white' className='font-semibold text-sm'>ReactJS</Card>
                    </div>
                    <div className='flex justify-end'>
                        <Card borderColor='white' textColor='white' shadowColor='white'>
                            <a
                                className='flex items-center gap-2 font-xs'
                                href='https://github.com/SANJOY-PAUL-0981/LearnAI'
                                target='blank_'>Learn More <FaArrowRight /></a>
                        </Card>
                    </div>
                </Card>

                <Card
                    className='p-4 lg:w-[25vw] w-[85vw] flex flex-col gap-6 justify-between'
                    bg='transparent'
                    textColor='white'
                    borderColor='white'
                    shadowColor='black'>
                    <p className='text-2xl'>Clipr</p>
                    <p className='text-dotgothic text-sm text-red-500'>Clipr is a URL shortener tool available as both a browser extension and a website. It helps convert long, messy URLs into clean and short links. Built using React for the frontend, Express for the backend, and MongoDB for the database. Simple, fast, and efficient. Trim your links easily with Clipr today!</p>
                    <div className='flex flex-wrap lg:flex-nowrap gap-2'>
                        <Card borderColor='white' textColor='black' bg='white' className='font-semibold text-sm'>MongoDb</Card>
                        <Card borderColor='white' textColor='black' bg='white' className='font-semibold text-sm'>ExpressJS</Card>
                        <Card borderColor='white' textColor='black' bg='white' className='font-semibold text-sm'>ReactJS</Card>
                    </div>
                    <div className='flex justify-end'>
                        <Card borderColor='white' textColor='white' shadowColor='white'>
                            <a
                                className='flex items-center gap-2 font-xs'
                                href='https://github.com/SANJOY-PAUL-0981/Clipr'
                                target='blank_'>Learn More <FaArrowRight /></a>
                        </Card>
                    </div>
                </Card>
            </div>

            <div className='flex flex-col lg:flex-row items-center gap-10'>
                <Card
                    className='p-4 lg:w-[25vw] w-[85vw] flex flex-col gap-5 justify-between'
                    bg='transparent'
                    textColor='white'
                    borderColor='white'
                    shadowColor='black'>
                    <p className='text-2xl'>Cross Platform Student Management App</p>
                    <p className='text-dotgothic text-sm text-red-500'>This is a project which we made for our college, This app can run in both android and ios. The sole purpose of this app is save, manipulate and store the data of students in a structured manner. I basically did the backend part of this project.</p>
                    <div className='flex flex-wrap lg:flex-nowrap gap-2'>
                        <Card borderColor='white' textColor='black' bg='white' className='font-semibold text-sm'>Flutter</Card>
                        <Card borderColor='white' textColor='black' bg='white' className='font-semibold text-sm'>ExpressJS</Card>
                        <Card borderColor='white' textColor='black' bg='white' className='font-semibold text-sm'>ReactJS</Card>
                    </div>
                    <div className='flex justify-end'>
                        <Card borderColor='white' textColor='white' shadowColor='white'>
                            <a
                                className='flex items-center gap-2 font-xs'
                                href='https://github.com/SANJOY-PAUL-0981/Cross-Platform-Student-Management-App'
                                target='blank_'>Learn More <FaArrowRight /></a>
                        </Card>
                    </div>
                </Card>

                <Card
                    className='p-4 lg:w-[25vw] w-[85vw] flex flex-col gap-6 justify-between'
                    bg='transparent'
                    textColor='white'
                    borderColor='white'
                    shadowColor='black'>
                    <p className='text-2xl'>Tsukifetch</p>
                    <p className='text-dotgothic text-sm text-red-500'>Tsukifetch is a CLI based System Information tool like neofetch. From tsukifetch We can fetch system Informations like ram, gpu, processor, memory, used memory etc. Unfortunately it only works in Linux devices. It is build in C language. If you faced any kind of error feel free to contact me.</p>
                    <div className='flex'>
                        <Card borderColor='white' textColor='black' bg='white' className='font-semibold text-sm'>C Language</Card>
                    </div>
                    <div className='flex justify-end'>
                        <Card borderColor='white' textColor='white' shadowColor='white'>
                            <a
                                className='flex items-center gap-2 font-xs'
                                href='https://github.com/SANJOY-PAUL-0981/Tsukifetch'
                                target='blank_'>Learn More <FaArrowRight /></a>
                        </Card>
                    </div>
                </Card>
            </div>
        </div>
    )
}