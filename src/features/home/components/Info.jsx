import React from "react"

export default function Info() {
  return (
    <div className="container flex flex-col item-center md:pb-24 pb-12">
      <div className="flex justify-center gap-6 items-center mx-[20px] md:mt-14">
        <div>
          <img src="/images/icons/stat-ic.png" alt="stat" />
        </div>
        <h3 className="text-[38px] md:text-[50px] text-light-text">WHICH SIDE ARE YOU ON?</h3>
      </div>
      <div className="flex items-center md:justify-center flex-col md:flex-row gap-14 md:mt-16 mt-4">
        <div className="bg-clip bg-white relative flex h-[200px] w-[280px]">
          <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#8525FF] to-[#9b54f7] py-4 px-4 bg-clip border absolute top-[1px] left-[1px] right-[2px] bottom-[2px]">
            <p className="text-[90px] font-AldrichRegular leading-10 text-[#FFFFFF] font-bold md:pt-8">
              9
            </p>
            <p className="text-[20px] text-[#FFFFFF] mt-6">THOUSAND USERS</p>
            <p className="uppercase font-bold text-[14px]">in the last 30 days</p>
          </div>
        </div>

        {/* box 2 */}
        <div className="bg-clip bg-white relative flex h-[200px] w-[280px]">
          <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#8525FF] to-[#9b54f7] py-4 px-4 bg-clip border absolute top-[1px] left-[1px] right-[2px] bottom-[2px]">
            <p className="text-[90px] font-AldrichRegular leading-10 text-[#FFFFFF] font-bold md:pt-8">
              55
            </p>
            <p className="text-[20px] text-[#FFFFFF] mt-6">THOUSAND TRADERS</p>
            <p className="uppercase font-bold text-[14px]">made in the last 30 days</p>
          </div>
        </div>

        {/* box 3 */}
        <div className="bg-clip bg-white relative flex h-[200px] w-[280px]">
          <div className="flex flex-col items-center justify-center bg-gradient-to-r from-[#8525FF] to-[#9b54f7] py-4 px-4 bg-clip border absolute top-[1px] left-[1px] right-[2px] bottom-[2px]">
            <p className="text-[90px] font-AldrichRegular leading-10 text-[#FFFFFF] font-bold md:pt-8">
              $15
            </p>
            <p className="text-[20px] text-[#FFFFFF] mt-6">MILLION STAKED</p>
            <p className="uppercase font-bold text-[14px]">Total Value Locked</p>
          </div>
        </div>
      </div>
    </div>
  )
}
