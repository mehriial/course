import { Link } from "react-router-dom";
import AvatarComponents from "../common/avatar";

const teachersList = [
    { time: "18:00", name: "Rəşad Məmmədli", class: "9-cu sinif", city: "Bakı" },
    { time: "16:30", name: "Səidə Kərimova", class: "10-cu sinif", city: "Gəncə" },
    { time: "17:00", name: "Orxan Babayev", class: "11-ci sinif", city: "Bakı" },
    { time: "15:00", name: "Ülviyyə Nəsibova", class: "9-cu sinif", city: "Sumqayıt" },
    { time: "18:30", name: "Elvin Səfərov", class: "7-ci sinif", city: "Şəki" },
    { time: "19:00", name: "Tural Qasımov", class: "11-ci sinif", city: "Bakı" },
];

export default function HomeTeachers() {
    return (
        <div>
            <div className="flex items-center justify-between py-2">
                <h2 className="font-bold text-base sm:text-lg text-main-txt">
                    Müəllimlər
                </h2>

                <Link
                    to="/teachers"
                    className="text-xs sm:text-sm font-bold text-primary hover:underline"
                >
                    Hamısına bax
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
                {teachersList.slice(0, 4).map((teacher) => (
                    <div
                        key={teacher.name}
                        className="bg-white border rounded-xl flex flex-col gap-3 p-3 sm:p-4 min-w-0"
                    >
                        <div className="flex items-center gap-2 min-w-0">
                            <AvatarComponents name={teacher.name} />

                            <div className="min-w-0">
                                <h4 className="font-semibold text-sm text-main-txt truncate">
                                    {teacher.name}
                                </h4>
                                <span className="text-txt-desc text-xs font-medium">
                                    {teacher.city}
                                </span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 flex-wrap">
                            <span className="px-3 bg-gray-200 text-main-txt font-medium rounded-xl text-[11px] whitespace-nowrap">
                                {teacher.class}
                            </span>
                            <span className="px-3 bg-gray-200 text-main-txt font-medium rounded-xl text-[11px] whitespace-nowrap">
                                {teacher.time}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}