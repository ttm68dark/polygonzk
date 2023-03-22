import React, { useState } from "react"

export default function Header() {
  const [isMenu, setIsMenu] = useState(false)
  const [isClickOffMenu, setIsClickOffMenu] = useState(false)
  return (
    <header className="container font-LucidaConsole">
      <nav className="flex justify-between px-6 md:px-0">
        <div className="flex gap-4 items-center">
          <div className="mr-10 cursor-pointer">
            <img src="/images/icons/logo.png" alt="logo" />
          </div>
          <ul className="text-light-text font-bold gap-8 hidden md:flex">
            <li className="cursor-pointer">TRADE</li>
            <li className="cursor-pointer">EARN</li>
            <li className="cursor-pointer">IAO</li>
            <li className="cursor-pointer">WHITEPAPER</li>
          </ul>
        </div>
        <div className="hidden md:flex items-center">
          <div className="text-light-text flex gap-3 mr-10 border py-[10px] px-5 rounded-md">
            <img src="/images/icons/buff.png" alt="buff" />
            <p> $5/006</p>
          </div>
          <img className="cursor-pointer hover-ani" src="/images/home/con-btn.png" alt="connect" />
        </div>

        {/* mobile  */}
        <div className="md:hidden flex items-center gap-8 z-20">
          <img className="cursor-pointer" src="/images/icons/mb-wallet.png" alt="connect" />
          <img
            className="cursor-pointer"
            src="/images/icons/mb-menu.png"
            alt="menu"
            onClick={() => setIsMenu(true)}
          />
          <nav
            className={`flex fixed bg-nav-bg  h-screen w-full top-0 left-0 justify-start flex-col items-center ${
              isMenu ? "menu-eff-in translate-y-[20%]" : "translate-y-[100%]"
            } ${isClickOffMenu && "menu-eff-out"}`}
          >
            <div
              className="my-10"
              onClick={() => {
                setIsMenu(false)
                setIsClickOffMenu(true)
                setTimeout(() => {
                  setIsClickOffMenu(false)
                }, 1000)
              }}
            >
              <img className="down-ef" src="/images/icons/down-ic.png" alt="buff" />
            </div>
            <div className="text-light-text flex gap-3 border py-[10px] px-5 rounded-md mb-10">
              <img src="/images/icons/buff.png" alt="buff" />
              <p> $5/006</p>
            </div>
            <ul className="text-light-text font-bold flex flex-col gap-6 text-center">
              <li className="cursor-pointer">TRADE</li>
              <li className="cursor-pointer">EARN</li>
              <li className="cursor-pointer">IAO</li>
              <li className="cursor-pointer">WHITEPAPER</li>
            </ul>
            <div className="text-light-text flex gap-3 border border-[#bb3bb5] bg-[#8525ff] font-bold py-[10px] px-5 rounded-md mt-8">
              <img src="/images/icons/buff.png" alt="buff" />
              <p>Disconnect</p>
            </div>
          </nav>
        </div>
      </nav>
    </header>
  )
}
