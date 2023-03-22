import React from "react"
import { FARM_LIST } from "../../../apis/data"

export default function Farm() {
  return (
    <div className="container">
      <div className="flex flex-col justify-center gap-6 items-center mx-[20px] md:mt-14">
        <h3 className="text-[38px] md:text-[50px] text-light-text text-center max-w-[600px]">
          EARN PASSIVE INCOME WITH CRYPTO
        </h3>
        <div className="flex gap-4 md:gap-6 justify-center">
          <img src="/images/icons/stat-ic.png" className="w-[20%]" alt="stat" />
          <img src="/images/icons/stat-ic.png" className="w-[20%]" alt="stat" />
          <img src="/images/icons/stat-ic.png" className="w-[20%]" alt="stat" />
        </div>
        <p className="text-light-text pb-2 md:pt-4 md:pb-4">
          Alien makes it easy to make your crypto work for you
        </p>
        <div className="flex md:mb-12 mb-8">
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

      {/* FARM LIST  */}
      <div className="container text-light-text flex flex-col items-center justify-center bg-s4-bg bg-cover">
        <div className="flex justify-center items-center text-center relative">
          <img src="/images/home/title-border.png" alt="title" />
          <div className="flex gap-4 absolute translate-x-[0%] items-center">
            <h3 className="font-InterMedium md:text-[28px]">TOP FARM</h3>
            <div>
              <img src="/images/icons/updown-ic.png" alt="updown" />
            </div>
          </div>
        </div>

        <article className="grid grid-cols-5 md:mt-10 w-full">
          {FARM_LIST.map((item, index) => {
            return (
              <div key={index} className="col-span-1 flex flex-col items-center leading-8">
                <p className="text-[#8525FF] text-[22px] font-LucidaConsole">{item.name}</p>
                <p className="text-[#ffffff] text-[18px] font-AldrichRegular">{item.percent}</p>
                <p className="text-grey-text font-LucidaConsole">{item.symbol}</p>
              </div>
            )
          })}
        </article>
      </div>
    </div>
  )
}
