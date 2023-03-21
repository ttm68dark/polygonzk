import React, { useState } from "react"
import Header from "../../components/Header"
import Info from "./components/Info"
import Trade from "./components/Trade"

export default function Home() {
  return (
    <>
      <section className="z-10 bg-head-bg bg-no-repeat bg-cover bg-inherit md:bg-center flex flex-col items-center pt-3 md:pt-10 pb-8 md:pb-28 relative font-LucidaConsole">
        <Header />
        <section className="z-2 grid grid-cols-12 text-light-text gap-3 container mt-8 md:mt-24 relative">
          <div className="md:col-span-6 col-span-12 flex justify-center items-center">
            <div>
              <h2 className="xl:text-[54px] md:xl:text-[38px] text-[28px] text-light-text ml-4">
                THE WORLD IS RULED BY HUMANS, UNIVERSE OXZKBULLISH
              </h2>
              <p className="max-w-[500px] ml-4">
                Trade, earn, and win crypto on the most popular decentralized platform in the galaxy
              </p>
              <div className="flex mt-4 md:mt-14">
                <img
                  className="cursor-pointer md:w-auto hover-ani w-[55%]"
                  src="/images/home/cn-btn.png"
                  alt="connect"
                />
                <img
                  className="cursor-pointer md:w-auto hover-ani w-[55%]"
                  src="/images/home/trade-btn.png"
                  alt="trade"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-6 col-span-12">
            <img src="/images/home/buff.png" alt="buff" />
          </div>
        </section>
        <img src="/images/home/line-bg.png" className="absolute bottom-0 z-[-1]" alt="line" />
      </section>
      <section className="bg-head2-bg bg-no-repeat bg-cover flex flex-col items-center relative z-10">
        <Info />
        <img src="/images/home/line-bg.png" className="absolute bottom-0 z-[-1]" alt="line" />
      </section>
      <section className="flex px-4 md:px-20 justify-center bg-[#000000]">
        <Trade />
      </section>
    </>
  )
}
