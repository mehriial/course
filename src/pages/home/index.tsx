import LessonTime from "@/components/base/home-lessonTime";
import RecentStudents from "@/components/base/home-recentStudents";
import HomeStatistics from "@/components/base/home-statistics";
import HomeTeachers from "@/components/base/home-teachers";
import InputIcon from "@/components/common/input-icon";
import { today } from "@/functions";

function Home() {
    const username = "Mehri";

    return (
        <div className="space-y-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <span className="text-gray-600 font-medium text-xs sm:text-sm">
                        {today}
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-bold text-main-txt">
                        Salam, {username}
                    </h1>
                </div>

                <div className="w-full sm:w-64 lg:w-72">
                    <InputIcon
                        placeholder="Şagird və ya müəllim axtar"
                        className="bg-white h-9 rounded-lg text-sm"
                    />
                </div>
            </div>

            <HomeStatistics />

            <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,3fr)_minmax(280px,1fr)] gap-4">
                <RecentStudents />
                <LessonTime />
            </div>

            <HomeTeachers />
        </div>
    );
}

export default Home;