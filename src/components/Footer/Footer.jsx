import React from 'react'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-[#19183B] text-white">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo alt="logo" width={150} height={120} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-300">
                                    &copy; Copyright 2023. All Rights Reserved by DevUI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-300">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <a className=" text-base font-medium text-gray-300 hover:text-gray-100" href="#">Features</a>
                                </li>
                                <li className="mb-4">
                                    <a className=" text-base font-medium text-gray-300 hover:text-gray-100" href="#">Pricing</a>
                                </li>
                                <li className="mb-4">
                                    <a className=" text-base font-medium text-gray-300 hover:text-gray-100" href="#">Affiliate Program</a>
                                </li>
                                <li>
                                    <a className=" text-base font-medium text-gray-300 hover:text-gray-100" href="#">Press Kit</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-300">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <a className=" text-base font-medium text-gray-300 hover:text-gray-100" href="#">Account</a>
                                </li>
                                <li className="mb-4">
                                    <a className=" text-base font-medium text-gray-300 hover:text-gray-100" href="#">Help</a>
                                </li>
                                <li className="mb-4">
                                    <a className=" text-base font-medium text-gray-300 hover:text-gray-100" href="#">Contact Us</a>
                                </li>
                                <li>
                                    <a className=" text-base font-medium text-gray-300 hover:text-gray-100" href="#">Customer Support</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-300">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <a className=" text-base font-medium text-gray-300 hover:text-gray-100" href="#">Terms &amp; Conditions</a>
                                </li>
                                <li className="mb-4">
                                    <a className=" text-base font-medium text-gray-300 hover:text-gray-100" href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a className=" text-base font-medium text-gray-300 hover:text-gray-100" href="#">Licensing</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer