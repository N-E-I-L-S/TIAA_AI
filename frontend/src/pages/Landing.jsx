import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Navbar from '../components/Navbar'

export default function Landing() {
  return (
    <>
    <Navbar/>
      <div className="relative isolate px-6 lg:px-8">
        <div
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className=" sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 font-body text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Retirement Business Challenge....{' '}
              <a href="#" className="font-semibold text-blue-900">
                <span className="absolute inset-0 font-body" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <span className="text-8xl font-title tracking-tight text-blue-100 sm:text-6xl">
              Hire2
            </span>
            <span className="text-8xl font-title tracking-tight text-blue-900 sm:text-6xl">
              Retire
            </span>
            <p className="mt-6 text-lg font-body leading-8 text-gray-600">
              Transform your employee lifecycle with AI-driven retirement solutions for employees, tailored annuity options, and organizational enhancements.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-blue-100 px-3.5 py-2.5 text-md font-body text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-md font-body leading-6 text-black-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        {/* <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
        </div> */}
      </div>
    </>
  )
}
