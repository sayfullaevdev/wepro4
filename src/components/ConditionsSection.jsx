const conditionsData = [
    {
        icon: "/icon-1.svg",
        title: "Мощные компьютеры",
        text: "Оборудованные классы для комфортного образовательного процесса.",
    },
    {
        icon: "/icon-2.svg",
        title: "Мобильное приложение",
        text: "Войдите в личный кабинет через веб-приложение для студентов.",
    },
    {
        icon: "/icon-3.svg",
        title: "Лучшие специалисты",
        text: "Мы работаем с профессионалами, делающими обучение увлекательным и эффективным.",
    },
    {
        icon: "/icon-4.svg",
        title: "Бесплатный коворкинг",
        text: "Выполняйте задания в нашем центре. Доступно всем учащимся.",
    },
    {
        icon: "/icon-5.svg",
        title: "Призы за обучение",
        text: "Получайте призы, такие как Яндекс Станция, AirPods и другие за успехи.",
    },
];

const ConditionsSection = () => {
    return (
        <section className="max-w-[1500px] mx-auto mt-20 mb-[100px] px-[140px] text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 mx-auto text-center w-[741px]">
                Идеальные условия для твоего{" "}
                <span className="text-pink-500">успешного образования</span>
            </h2>

            {/* Контейнер по центру */}
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[1000px]">
                    {conditionsData.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 bg-white/5 p-5 rounded-2xl shadow-lg hover:shadow-pink-200 transition"
                        >
                            {/* Иконка */}
                            <img
                                src={item.icon}
                                alt={item.title}
                                className="object-contain"
                            />

                            {/* Текст */}
                            <div>
                                <h3 className="text-left text-lg font-semibold mb-1">{item.title}</h3>
                                <p className="text-left text-gray-600 text-sm">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default ConditionsSection;
