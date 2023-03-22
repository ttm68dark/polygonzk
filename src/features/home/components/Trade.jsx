import React from "react"

export default function Trade() {
  return (
    <div className="w-full rounded-3xl bg-s2mb-bg md:bg-s2-bg bg-cover md:bg-top  md:border-none md:mt-16  z-10 relative">
      <section className="z-2 grid grid-cols-12 text-light-text gap-3 container mt-8 md:mt-[150px] relative">
        <div className="md:col-span-6 col-span-12 flex justify-center items-start">
          <div>
            <h2 className="xl:text-[54px] md:xl:text-[38px] text-[28px] text-light-text ml-4 max-w-[550px]">
              TRADE ANYTHING NO REGISTRATION, NO HASSLE
            </h2>
            <p className="max-w-[500px] text-[16px] md:text-[20px] ml-4">
              OxZkBullishFi provides safe & low-cost trading experience
            </p>
            <div className="flex mt-4 md:mt-14">
              <img
                className="cursor-pointer md:w-auto hover-ani w-[55%]"
                src="/images/home/traden-btn.png"
                alt="trade"
              />
              <img
                className="cursor-pointer md:w-auto hover-ani w-[55%]"
                src="/images/home/learn-btn.png"
                alt="learn"
              />
            </div>
          </div>
        </div>
        <div className="md:col-span-6 col-span-12">
          <div className="relative">
            <img src="/images/icons/coin1.png" className="" alt="buff" />
            <img
              className="absolute md:top-[10%] top-[20%] md:right-[30%] right-0"
              src="/images/icons/coin2.png"
              alt="buff"
            />
            <img className="ml-[10%] pb-[30%]" src="/images/icons/coin3.png" alt="buff" />
          </div>
        </div>
      </section>
      <img src="/images/home/blur-s2.png" className="absolute bottom-[-2px] z-[-1]" alt="line" />
    </div>
  )
}
