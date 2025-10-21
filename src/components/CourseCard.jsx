
// function CourseCard() {
//     const courses = [
//         {
//             id: 1,
//             title: "Motion-дизайнер",
//             tagTop: "Дизайн",
//             tagBottom: "Новый Курс",
//             duration: "2 месяца",
//             link: "/course/motion.html",
//             image: "/card.gif",
//             bgColor: "bg-[#E0EAF8]",
//             svgColor: "#C3D8F8",
//             textColor: "text-[#3A2E1F]",
//         },
//         {
//             id: 2,
//             title: "Мобилограф PRO",
//             tagTop: "ОБЩИЙ КУРС",
//             tagBottom: "Популярное",
//             duration: "1 месяц",
//             link: "/course/mobilo-pro.html",
//             image: "/mobilography.png",
//             bgColor: "bg-[#E0EAF8]",
//             svgColor: "#C3D8F8",
//         },
//         {
//             id: 3,
//             title: "Интерьер-дизайнер",
//             tagTop: "Дизайн",
//             duration: "4 месяца, трудоустройство",
//             link: "/course/interior.html",
//             image: "/public/interior.png",
//             bgColor: "bg-[#060716]",
//             svgColor: "#ffffff",
//         },
//         {
//             id: 4,
//             title: "Графический Дизайнер",
//             tagTop: "Дизайн",
//             tagBottom: "Популярное",
//             duration: "4 месяца, трудоустройство",
//             link: "/course/graphic.html",
//             image: "../../public/card.png",
//             bgColor: "bg-[#E0EAF8]",
//             svgColor: "#C3D8F8",
//         },
//         {
//             id: 5,
//             title: "SMM-Специалист",
//             tagTop: "Маркетинг",
//             tagBottom: "Популярное",
//             duration: "2 месяца, трудоустройство",
//             link: "/course/smm.html",
//             image: "../../public/smm.png",
//             bgColor: "bg-[#E0EAF8]",
//             svgColor: "#C3D8F8",
//         },
//         {
//             id: 6,
//             title: "Компьютерная грамотность",
//             tagTop: "ОБЩИЙ КУРС",
//             tagBottom: "Популярное",
//             duration: "2 месяца",
//             link: "/course/itbase.html",
//             image: "../../public/foundation.png",
//             bgColor: "bg-[#E0EAF8]",
//             svgColor: "#C3D8F8",
//         },
//         {
//             id: 7,
//             title: "Дизайнер соцсетей",
//             tagTop: "Дизайн",
//             duration: "1,5 месяца",
//             link: "/course/social.html",
//             image: "../../public/carddesign.png",
//             bgColor: "bg-[#E0EAF8]",
//             svgColor: "#C3D8F8",
//         },
//         {
//             id: 8,
//             title: "Frontend-разработчик",
//             tagTop: "Программирование",
//             tagBottom: "Популярное",
//             duration: "7 месяцев, трудоустройство",
//             link: "/course/frontend.html",
//             image: "/frontend.png",
//             bgColor: "bg-[#E0EAF8]",
//             svgColor: "#C3D8F8",
//         },
//         {
//             id: 9,
//             title: "iOS/Android-разработчик",
//             tagTop: "Программирование",
//             duration: "5 месяцев, трудоустройство",
//             link: "/course/mobile.html",
//             image: "../../public/flutter.png",
//             bgColor: "bg-[#E0EAF8]",
//             svgColor: "#C3D8F8",
//         },
//         {
//             id: 10,
//             title: "React-разработчик",
//             tagTop: "Программирование",
//             duration: "2 месяца, трудоустройство",
//             link: "/course/react.html",
//             image: "/react.png",
//             bgColor: "bg-[#E0EAF8]",
//             svgColor: "#C3D8F8",
//         },
//     ];

//     return (
//         <section className="max-w-[1500px] mx-auto px-[140px] mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {courses.map((course) => (
//                 <a
//                     key={course.id}
//                     href={course.link}
//                     className={`relative group w-[400px] h-[400px] overflow-hidden rounded-2xl flex flex-col justify-end ${course.bgColor} transition-all duration-300 hover:bg-white hover:shadow-[0_0_0_2px_#00000010]`}
//                 >
//                     {/* SVG фон (на заднем плане) */}
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 315 183"
//                         fill="none"
//                         className="absolute top-[20px] left-[20px] w-[85%] h-[85%] z-0 transition-colors duration-300"
//                     >
//                         <rect
//                             x="10"
//                             y="10"
//                             width="260"
//                             height="150"
//                             rx="20"
//                             stroke={course.svgColor}
//                             strokeWidth="3"
//                             className="transition-colors duration-300 group-hover:stroke-[#9BBEF2]"
//                         />
//                     </svg>

//                     {/* Картинка поверх SVG */}
//                     <img
//                         src={course.image}
//                         alt={course.title}
//                         loading="lazy"
//                         className="absolute top-0 left-0 w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-105"
//                     />

//                     {/* Контент (поверх картинки) */}
//                     <div className="relative z-20 p-6   rounded-t-2xl">
//                         <span className="text-[12px] font-semibold text-gray-800 bg-white/70 px-2 py-1 rounded-md w-fit mb-2 inline-block">
//                             {course.tagTop}
//                         </span>

//                         <h3 className="text-xl font-bold text-black mb-1">{course.title}</h3>

//                         <p className={`text-sm mb-3 ${course.textColor}`}>{course.duration}</p>
//                         {/* <p className="text-gray-800 text-sm mb-3">{course.duration}</p> */}

//                         {course.tagBottom && (
//                             <div className="inline-flex items-center gap-1 bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded-md">
//                                 ⚡ {course.tagBottom}
//                             </div>
//                         )}
//                     </div>
//                 </a>
//             ))}
//         </section>
//     );
// }

// export default CourseCard;










// function CourseCard() {
//     const courses = [
//         {
//             id: 1,
//             title: "Motion-дизайнер",
//             tagTop: "Дизайн",
//             tagBottom: "Новый Курс",
//             duration: "2 месяца",
//             link: "/course/motion.html",
//             image: "/card.gif",
//             bgColor: "bg-[#E0EAF8]",
//             svgColor: "#C3D8F8",
//             textColor: "text-[#3A2E1F]", // 👈 Тёмный текст
//         },
//         {
//             id: 2,
//             title: "Мобилограф PRO",
//             tagTop: "ОБЩИЙ КУРС",
//             tagBottom: "Популярное",
//             duration: "1 месяц",
//             link: "/course/mobilo-pro.html",
//             image: "/mobilography.png",
//             bgColor: "bg-[#E0EAF8]",
//             svgColor: "#C3D8F8",
//         },
//         {
//             id: 3,
//             title: "Интерьер-дизайнер",
//             tagTop: "Дизайн",
//             duration: "4 месяца, трудоустройство",
//             link: "/course/interior.html",
//             image: "/interior.png",
//             bgColor: "bg-[#060716]",
//             svgColor: "#ffffff",
//             textColor: "text-white", // 👈 Белый текст для тёмного фона
//         },
//         {
//             id: 4,
//             title: "Графический Дизайнер",
//             tagTop: "Дизайн",
//             tagBottom: "Популярное",
//             duration: "4 месяца, трудоустройство",
//             link: "/course/graphic.html",
//             image: "/card.png",
//             bgColor: "bg-[#E0EAF8]",
//             svgColor: "#C3D8F8",
//         },
//         {
//             id: 5,
//             title: "SMM-Специалист",
//             tagTop: "Маркетинг",
//             tagBottom: "Популярное",
//             duration: "2 месяца, трудоустройство",
//             link: "/course/smm.html",
//             image: "../../public/smm.png",
//             bgColor: "bg-[#E0EAF8]",
//             svgColor: "#C3D8F8",
//         },
//         {
//             id: 6,
//             title: "Компьютерная грамотность",
//             tagTop: "ОБЩИЙ КУРС",
//             tagBottom: "Популярное",
//             duration: "2 месяца",
//             link: "/course/itbase.html",
//             image: "../../public/foundation.png",
//             bgColor: "bg-[#E0EAF8]",
//             svgColor: "#C3D8F8",
//         },
//         {
//             id: 7,
//             title: "Дизайнер соцсетей",
//             tagTop: "Дизайн",
//             duration: "1,5 месяца",
//             link: "/course/social.html",
//             image: "../../public/carddesign.png",
//             bgColor: "bg-[#E0EAF8]",
//             svgColor: "#C3D8F8",
//         },
//         {
//             id: 8,
//             title: "Frontend-разработчик",
//             tagTop: "Программирование",
//             tagBottom: "Популярное",
//             duration: "7 месяцев, трудоустройство",
//             link: "/course/frontend.html",
//             image: "/frontend.png",
//             bgColor: "bg-[#E0EAF8]",
//             svgColor: "#C3D8F8",
//         },
//         {
//             id: 9,
//             title: "iOS/Android-разработчик",
//             tagTop: "Программирование",
//             duration: "5 месяцев, трудоустройство",
//             link: "/course/mobile.html",
//             image: "../../public/flutter.png",
//             bgColor: "bg-[#E0EAF8]",
//             svgColor: "#C3D8F8",
//         },
//         {
//             id: 10,
//             title: "React-разработчик",
//             tagTop: "Программирование",
//             duration: "2 месяца, трудоустройство",
//             link: "/course/react.html",
//             image: "/react.png",
//             bgColor: "bg-[#E0EAF8]",
//             svgColor: "#C3D8F8",
//         },
//     ];

//     return (
//         <section className="max-w-[1500px] mx-auto px-[140px] mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {courses.map((course) => (
//                 <a
//                     key={course.id}
//                     href={course.link}
//                     className={`relative group w-[400px] h-[400px] overflow-hidden rounded-2xl flex flex-col justify-end ${course.bgColor} transition-all duration-300 hover:bg-white hover:shadow-[0_0_0_2px_#00000010]`}
//                 >
//                     {/* SVG фон */}
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 315 183"
//                         fill="none"
//                         className="absolute top-[20px] left-[20px] w-[85%] h-[85%] z-0 transition-colors duration-300"
//                     >
//                         <rect
//                             x="10"
//                             y="10"
//                             width="260"
//                             height="150"
//                             rx="20"
//                             stroke={course.svgColor}
//                             strokeWidth="3"
//                             className="transition-colors duration-300 group-hover:stroke-[#9BBEF2]"
//                         />
//                     </svg>

//                     {/* Картинка поверх SVG */}
//                     <img
//                         src={course.image}
//                         alt={course.title}
//                         loading="lazy"
//                         className="absolute top-0 left-0 w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-105"
//                     />

//                     {/* Контент поверх картинки */}
//                     <div
//                         className={`relative z-20 p-6 rounded-t-2xl ${course.textColor ? course.textColor : "text-black"
//                             }`}
//                     >
//                         <span
//                             className={`text-[12px] font-semibold bg-white/70 px-2 py-1 rounded-md w-fit mb-2 inline-block ${course.textColor ? course.textColor : "text-black"
//                                 }`}
//                         >
//                             {course.tagTop}
//                         </span>

//                         <h3
//                             className={`text-xl font-bold mb-1 ${course.textColor ? course.textColor : "text-black"
//                                 }`}
//                         >
//                             {course.title}
//                         </h3>

//                         <p
//                             className={`text-sm mb-3 ${course.textColor ? course.textColor : "text-black"
//                                 }`}
//                         >
//                             {course.duration}
//                         </p>

//                         {course.tagBottom && (
//                             <div className="inline-flex items-center gap-1 bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded-md">
//                                 ⚡ {course.tagBottom}
//                             </div>
//                         )}
//                     </div>
//                 </a>
//             ))}
//         </section>
//     );
// }

// export default CourseCard;

function CourseCard() {
    const courses = [
        {
            id: 1,
            title: "Motion-дизайнер",
            tagTop: "Дизайн",
            tagBottom: "Новый Курс",
            duration: "2 месяца",
            link: "/course/motion.html",
            image: "/card.gif",
            bgColor: "bg-[#E0EAF8]",
            svgColor: "#C3D8F8",
            textColor: "text-[#000000]",
            hoverTextColor: "group-hover:text-[#1D3B6C]",
        },
        {
            id: 2,
            title: "Мобилограф PRO",
            tagTop: "ОБЩИЙ КУРС",
            tagBottom: "Популярное",
            duration: "1 месяц",
            link: "/course/mobilo-pro.html",
            image: "/mobilography.png",
            bgColor: "bg-[#E0EAF8]",
            svgColor: "#C3D8F8",
            textColor: "text-[#000000]",
            hoverTextColor: "group-hover:text-[#1D3B6C]",
        },
        {
            id: 3,
            title: "Интерьер-дизайнер",
            tagTop: "Дизайн",
            duration: "4 месяца, трудоустройство",
            link: "/course/interior.html",
            image: "/interior.png",
            bgColor: "bg-[#060716]",
            svgColor: "#ffffff",
            textColor: "text-white",
            hoverTextColor: "group-hover:text-black",// 👈 Белый текст для тёмного фона
            hoverBtnBg: "group-hover:bg-red",

        },
        {
            id: 4,
            title: "Графический Дизайнер",
            tagTop: "Дизайн",
            tagBottom: "Популярное",
            duration: "4 месяца, трудоустройство",
            link: "/course/graphic.html",
            image: "/card.png",
            bgColor: "bg-[#E0EAF8]",
            svgColor: "#C3D8F8",
        },
        {
            id: 5,
            title: "SMM-Специалист",
            tagTop: "Маркетинг",
            tagBottom: "Популярное",
            duration: "2 месяца, трудоустройство",
            link: "/course/smm.html",
            image: "../../public/smm.png",
            bgColor: "bg-[#E0EAF8]",
            svgColor: "#C3D8F8",
        },
        {
            id: 6,
            title: "Компьютерная грамотность",
            tagTop: "ОБЩИЙ КУРС",
            tagBottom: "Популярное",
            duration: "2 месяца",
            link: "/course/itbase.html",
            image: "../../public/foundation.png",
            bgColor: "bg-[#E0EAF8]",
            svgColor: "#C3D8F8",
        },
        {
            id: 7,
            title: "Дизайнер соцсетей",
            tagTop: "Дизайн",
            duration: "1,5 месяца",
            link: "/course/social.html",
            image: "../../public/carddesign.png",
            bgColor: "bg-[#E0EAF8]",
            svgColor: "#C3D8F8",
        },
        {
            id: 8,
            title: "Frontend-разработчик",
            tagTop: "Программирование",
            tagBottom: "Популярное",
            duration: "7 месяцев, трудоустройство",
            link: "/course/frontend.html",
            image: "/frontend.png",
            bgColor: "bg-[#E0EAF8]",
            svgColor: "#C3D8F8",
        },
        {
            id: 9,
            title: "iOS/Android-разработчик",
            tagTop: "Программирование",
            duration: "5 месяцев, трудоустройство",
            link: "/course/mobile.html",
            image: "../../public/flutter.png",
            bgColor: "bg-[#E0EAF8]",
            svgColor: "#C3D8F8",
        },
        {
            id: 10,
            title: "React-разработчик",
            tagTop: "Программирование",
            duration: "2 месяца, трудоустройство",
            link: "/course/react.html",
            image: "/react.png",
            bgColor: "bg-[#E0EAF8]",
            svgColor: "#C3D8F8",
        },
    ];

  return (
   <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
  {courses.map((course) => (
    <a
      key={course.id}
      href={course.link}
      className={`relative group overflow-hidden rounded-2xl aspect-square flex flex-col justify-end ${course.bgColor} transition-all duration-300 hover:shadow-[0_0_0_2px_#00000010]`}
    >
      {/* 🔹 SVG теперь сзади, под картинкой */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 315 183"
        fill="none"
        className="absolute inset-0 w-full h-full z-0 transition-colors duration-300 pointer-events-none"
      >
        <rect
          x="10"
          y="10"
          width="260"
          height="150"
          rx="20"
          stroke={course.svgColor}
          strokeWidth="3"
          className="transition-colors duration-300 group-hover:stroke-[#9BBEF2]"
        />
      </svg>

      {/* 🖼 Картинка поверх SVG */}
      <img
        src={course.image}
        alt={course.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-500 group-hover:scale-105"
      />

      {/* 📄 Контент поверх всего */}
      <div
        className={`relative z-20 p-6 transition-colors duration-300 ${course.textColor ?? "text-black"} ${course.hoverTextColor ?? ""}`}
      >
        <span className="text-[12px] font-semibold bg-white/70 px-2 py-1 rounded-md w-fit mb-2 inline-block">
          {course.tagTop}
        </span>

        <h3
          className={`text-xl font-bold mb-1 transition-colors duration-300 ${course.textColor ?? "text-black"} ${course.hoverTextColor ?? ""}`}
        >
          {course.title}
        </h3>

        <p
          className={`text-sm mb-3 transition-colors duration-300 ${course.textColor ?? "text-black"} ${course.hoverTextColor ?? ""}`}
        >
          {course.duration}
        </p>

        {course.tagBottom && (
          <div className="inline-flex items-center gap-1 bg-yellow-400 text-black text-sm font-semibold px-3 py-1 rounded-md">
            ⚡ {course.tagBottom}
          </div>
        )}
      </div>
    </a>
  ))}
</section>

  );
}

export default CourseCard;