const lessonTimes = [
    { time: "15:00", name: "Leyla Rzayeva", class: "9-cu sinif", city: "Bakı" },
    { time: "16:30", name: "Murad Əliyev", class: "10-cu sinif", city: "Sumqayıt" },
    { time: "17:00", name: "Nərmin Hüseynova", class: "8-ci sinif", city: "Gəncə" },
    { time: "18:00", name: "Aysel Məmmədova", class: "9-cu sinif", city: "Bakı" },
    { time: "18:30", name: "Elvin Səfərov", class: "7-ci sinif", city: "Şəki" },
    { time: "19:00", name: "Tural Qasımov", class: "11-ci sinif", city: "Bakı" },
];

function LessonTime() {
    return (
        <div className="overflow-hidden rounded-xl border bg-white min-w-0">
            <div className="py-3 px-4 sm:px-5">
                <h2 className="font-bold text-base sm:text-lg text-main-txt">
                    Dərs saatları
                </h2>
            </div>

            <div className="flex flex-col">
                {lessonTimes.map((lesson) => (
                    <div
                        key={`${lesson.time}-${lesson.name}`}
                        className="flex items-center gap-3 w-full px-4 py-2 border-b last:border-b-0"
                    >
                        <div
                            className="text-primary font-semibold text-base shrink-0"
                            style={{ fontFamily: "Digital" }}
                        >
                            {lesson.time}
                        </div>

                        <div className="flex flex-col min-w-0">
                            <p className="text-main-txt text-xs sm:text-sm font-semibold truncate">
                                {lesson.name}
                            </p>
                            <span className="text-txt-desc text-[10px] sm:text-xs font-medium">
                                {lesson.class} · {lesson.city}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LessonTime;