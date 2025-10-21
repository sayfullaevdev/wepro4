import { useState } from "react";
import Header from "./components/Header.jsx";
import TagButton from "./components/CourseTags.jsx";
import CourseCard from "./components/CourseCard.jsx";
import ConditionsSection from "./components/ConditionsSection.jsx";


function App() {
  const [activeTab, setActiveTab] = useState("courses");

  return (
    <>
      <section className="rounded-xl max-w-[1500px] mx-auto mt-3 pt-0 px-[140px] h-[580px] relative w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/herobg.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="relative z-20">
          <Header />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-white">
          <h1 className="text-xs sm:text-6xl font-bold mb-8 max-w-4xl leading-tight mt-10">
            Авторские курсы от специалистов IT & Digital
          </h1>

          <div className="flex flex-wrap gap-10 mb-10">
            <div>
              <p className="text-4xl font-bold">3500+</p>
              <p className="text-gray-300">
                выпускников за 4 года <br /> работы
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold">76.8%</p>
              <p className="text-gray-300">
                студентов находят работу <br /> после обучения
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold">46.8%</p>
              <p className="text-gray-300">
                начинают зарабатывать во <br /> время обучения
              </p>
            </div>
          </div>

          <TagButton />
        </div>
      </section>

      <section className="w-full max-w-[1500px] mx-auto mt-10 px-[140px]">
        <h2 className="text-4xl font-bold text-center mb-6 max-w-[742px] mx-auto">
          Обновленные авторские курсы с использованием{" "}
          <span className="text-pink-500">AI</span>
        </h2>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("courses")}
            className={`px-6 py-3 rounded-full font-medium transition ${activeTab === "courses"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            Офлайн-курсы
          </button>

          <button
            onClick={() => setActiveTab("consultation")}
            className={`px-6 py-3 rounded-full font-medium transition ${activeTab === "consultation"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            Бесплатная консультация
          </button>
        </div>

        <div className="mt-6">
          {activeTab === "courses" ? (
            <div className="flex flex-col items-center">
              <CourseCard />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 mt-10">
              <form className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
                <label className="block mb-2 text-gray-700">Ваше имя</label>
                <input
                  type="text"
                  placeholder="Как вас зовут?"
                  className="w-full mb-4 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="block mb-2 text-gray-700">Номер телефона</label>
                <input
                  type="tel"
                  placeholder="+998"
                  className="w-full mb-4 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label className="block mb-2 text-gray-700">Telegram Username</label>
                <input
                  type="text"
                  placeholder="@username"
                  className="w-full mb-6 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                >
                  Отправить
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      <ConditionsSection />

      <section className="bg-[#07051A] text-white py-20">
        <h2 className="w-[500px] text-4xl font-bold mx-auto text-center mb-[50px]">
          Теперь мы{" "}
          <span className="block text-pink-500">школа нового поколения</span>
        </h2>


        <div className="max-w-[1100px] mx-auto flex flex-col gap-5 lg:flex-row items-center justify-between px-[140px]">
          <div className="flex flex-col gap-8 max-w-[500px]">

            <ul className="flex flex-col gap-5">
              <li className="flex items-center gap-4">
                <img src="../public/new-login.svg" alt="icon" className="" />
                <p className="text-lg text-gray-200">
                  Войдите в аккаунт по номеру телефона
                </p>
              </li>
              <li className="flex items-center gap-4">
                <img src="../public/new-attendance.svg" alt="icon" className="" />
                <p className="text-lg text-gray-200">
                  Просматривайте свои оценки и посещаемость
                </p>
              </li>
              <li className="flex items-center gap-4">
                <img src="../public/new-top.svg" alt="icon" className="" />
                <p className="text-lg text-gray-200">
                  Зарабатывайте монеты и продвигайтесь в ТОП
                </p>
              </li>
              <li className="flex items-center gap-4">
                <img src="../public/new-shop.svg" alt="icon" className="" />
                <p className="text-lg text-gray-200">
                  Обменивайте монеты на призы
                </p>
              </li>
              <li className="flex items-center gap-4">
                <img src="../public/new-heart.svg" alt="icon" className="" />
                <p className="text-lg text-gray-200">
                  Участвуйте в раздаче ценных призов
                </p>
              </li>
            </ul>
          </div>

          {/* Правая часть */}
          <div className="mt-10 lg:mt-0">
            <img
              src="../public/new-1.webp"
              alt="phone"
              className="lg:w-[420px]]"
            />
          </div>
        </div>

        <div className="max-w-[1100px] mx-auto flex flex-col gap-5 lg:flex-row  items-center justify-between px-[140px]">
          <div className="mb-[50px] flex flex-col gap-20 max-w-[500px]">


          </div>


          <div className="mt-10 lg:mt-0 ">
            <img
              src="../public/new-2.webp"
              alt="phone"
              className="lg:w-[420px]]"
            />
          </div>
          <div className="mt-10 lg:mt-0">
            <p className="w-[500px] text-4xl font-bold mb-[25px]">Попади в топ и забирай крутые призы</p>
            <img
              src="../public/new-prizes.webp"
              alt="phone"
              className="lg:w-[420px]]"
            />

          </div>


        </div>
        <div className="max-w-[1100px] mx-auto flex flex-col gap-5 lg:flex-row  items-center justify-between px-[140px]">

          <div className="mt-10 lg:mt-0">
            <p className="w-[500px] text-4xl font-bold mb-[25px]">Обменивай монеты в центре призов</p>
            <img
              src="../public/new-3.webp"
              alt="phone"
              className="lg:w-[420px]]"
            />

          </div>

          <div className="mt-10 lg:mt-0 ">
            <img
              src="../public/new-prizes-center.webp"
              alt="phone"
              className="lg:w-[420px]]"
            />
          </div>
        </div>


      </section>
    </>
  );
}

export default App;
