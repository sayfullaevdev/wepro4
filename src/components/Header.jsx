// import { useEffect, useState } from "react";

export default function Header() {


  return (
    <>
      {/* container */}
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between mt-3 p-7">




        {/* header */}
        <header className="flex items-center justify-between w-full gap-2.5">





          {/* leftMenu */}
          <nav className="flex items-center gap-6">
            <img src="/logo-white.svg" alt="Logo" className="" />
            <a className="text-white hover:text-gray-300" href="#">Главная</a>
            <a className="text-white hover:text-gray-300" href="#">Курсы и цены</a>
            <a className="text-white hover:text-gray-300" href="#">Запись в группу</a>
            <a className="text-white hover:text-gray-300" href="#">Партнёрам</a>
          </nav>




          {/* rightMenu */}
          <div className="flex items-center gap-4 text-white">
            <span>RU</span>
            <a
              href="tel:+998781137005"
            >
              +998 78 113-70-05
            </a>
            <button
              className={`px-4 py-2 rounded-md font-medium transition-all} bg-white text-black`
              }
            >
              Личный кабинет
            </button>
          </div>


        </header>


      </div>
    </>
  );
}
