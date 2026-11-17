const date = new Date();

const months = [
    "yanvar", "fevral", "mart", "aprel",
    "may", "iyun", "iyul", "avqust",
    "sentyabr", "oktyabr", "noyabr", "dekabr",
];

const days = [
    "bazar", "bazar ertəsi", "çərşənbə axşamı",
    "çərşənbə", "cümə axşamı", "cümə", "şənbə",
];

export const today = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}, ${days[date.getDay()]}`;

