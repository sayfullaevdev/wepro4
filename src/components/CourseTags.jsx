const courses = [
  { id: 1, title: "Бесплатная консультация", color: "bg-yellow-400 text-black font-semibold" },
  { id: 2, title: "⚡ Motion-дизайнер" },
  { id: 3, title: "Дизайнер соцсетей" },
  { id: 4, title: "Frontend-разработчик" }, 
  { id: 5, title: "iOS/Android-разработчик" },
  { id: 6, title: "React-разработчик" },
  { id: 7, title: "Мобилограф PRO" },
  { id: 8, title: "Интерьер-дизайнер" },
  { id: 9, title: "Графический дизайнер" },
  { id: 10, title: "SMM-специалист" },
  { id: 11, title: "Компьютерная грамотность" },
];

function CourseTags() {
  return (
      
    <div className="flex flex-wrap gap-3">
      {courses.map((course) => (
        <span
          key={course.id}
          className={`px-4 py-2 rounded-md text-sm sm:text-base backdrop-blur-md  bg-white text-black transition hover:bg-black  hover:text-white ${
            course.color || ""
          }`}
        >
          {course.title}
        </span>
      ))}
    </div>
  );
}

    
    // <div className="flex flex-wrap gap-1   mt-5">
    //   {courses.map((course) => (
    //     <span
    //       key={course.id}
    //       className={`px-4 py-2 text-center rounded-md text-sm sm:text-base border bg-white text-black backdrop-blur-md transition hover:bg-white hover:text-black ${course.color || ""}`}
    //     >
    //       {course.title}
    //     </span>
    //   ))}
    // </div>
 
export default CourseTags;
