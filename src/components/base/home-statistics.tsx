const statistics = [
    {
        title: "Ümumi şagird",
        count: 6,
        subtitle: "Sistemdə qeydiyyatda",
    },
    {
        title: "Ümumi müəllim",
        count: 4,
        subtitle: "Ümumi müəllim",
    },
    {
        title: "Siniflər",
        count: 5,
        subtitle: "Şagirdlərin sinifləri üzrə",
    },
    {
        title: "Şəhərlər",
        count: 4,
        subtitle: "Şagirdlərin yaşadığı",
    },
];

export default function HomeStatistics() {
    return (
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3">
            {statistics.map((item) => (
                <div
                    key={item.title}
                    className="rounded-xl bg-white border p-3 px-4 sm:p-2 sm:px-4"
                >
                    <p className="text-xs sm:text-sm text-txt-desc font-semibold">
                        {item.title}
                    </p>

                    <h2 className="mt-1 text-xl sm:text-2xl font-bold text-main-txt">
                        {item.count}
                    </h2>

                    <span className="text-[10px] sm:text-xs text-txt-desc font-medium">
                        {item.subtitle}
                    </span>
                </div>
            ))}
        </div>
    );
}