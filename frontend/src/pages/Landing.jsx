import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'

export default function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <div className="bg-white">
      <Navbar />
      <div className="relative isolate h-[100vh] px-6 pt-14 lg:px-8">
        {/* <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div> */}
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div> */}
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Hire2Retire
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Transform your employee lifecycle with AI-driven retirement solutions for employees, tailored annuity options, and organizational enhancements.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button text="Get Started"/>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
        </div>
      </div>
      <div className="flex flex-col justify-between bg-gradient-to-b from-sky-50 to-blue-0 min-h-[100vh]">
        <div className="flex justify-between w-full py-16 px-8">
          <p className='w-[40vw] text-[1.8rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <p className='w-[40vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ex dolorum, quas, accusamus nihil ullam dolores recusandae natus facere optio aliquam nam voluptatem corrupti id odit. Deleniti debitis odio enim?Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quod cumque atque minima repellendus, tenetur incidunt dolorum voluptates. Assumenda, quibusdam!</p>
        </div>
        <div className="flex justify-between py-16 px-8">
          <div className="w-[30vw] ">
            <h3 className='text-[2rem] mb-8'>Lorem ipsum dolor sit.</h3>
            <p className='text-[1.2rem]'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus excepturi officia porro, ducimus maxime eos architecto! Officia labore ea eum aliquam, sed maiores deserunt harum, cumque excepturi facilis eius et optio impedit eligendi iure ullam ratione. Eligendi optio temporibus facilis.
            </p>
            <hr className='border border-[#093b60] mt-20 w-full' />
          </div>
          <div className="w-[30vw]">
            <h3 className='text-[2rem] mb-8'>Lorem ipsum dolor sit.</h3>
            <p className='text-[1.2rem]'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus excepturi officia porro, ducimus maxime eos architecto! Officia labore ea eum aliquam, sed maiores deserunt harum, cumque excepturi facilis eius et optio impedit eligendi iure ullam ratione. Eligendi optio temporibus facilis.
            </p>
            <hr className='mt-20 w-full' />
          </div>
          <div className="w-[30vw]">
            <h3 className='text-[2rem] mb-8'>Lorem ipsum dolor sit.</h3>
            <p className='text-[1.2rem]'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus excepturi officia porro, ducimus maxime eos architecto! Officia labore ea eum aliquam, sed maiores deserunt harum, cumque excepturi facilis eius et optio impedit eligendi iure ullam ratione. Eligendi optio temporibus facilis.
            </p>
            <hr className='mt-20 w-full' />
          </div>
        </div>
      </div>
      <div className="flex justify-between py-12 px-8 h-[80vh] items-center">
        <div className="w-[35vw] h-[45vh]"></div>
        <div className="w-[45vw]">
          <h3 className=' text-[1.8rem] my-8'>Lorem, ipsum dolor.</h3>
          <p className='w-[80%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem consequatur fuga explicabo! Tenetur odio, sit aspernatur laborum minima repellendus facilis vero incidunt nam ratione reiciendis, ea quis hic, molestiae at dignissimos beatae qui velit quia! Quidem, nostrum unde? Perferendis laborum nisi quod, veniam rem fugiat cumque unde laudantium labore autem?</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
