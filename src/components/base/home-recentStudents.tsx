import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";
import AvatarComponents from "../common/avatar";

const students = [
    {
        name: "Aysel Məmmədova",
        email: "aysel@example.com",
        class: "9-cu sinif",
        city: "Bakı",
        phone: "+994501234567",
        date: "13.10.2026 · 16:21",
    },
    {
        name: "Murad Əliyev",
        email: "murad@example.com",
        class: "10-cu sinif",
        city: "Sumqayıt",
        phone: "+994552345678",
        date: "12.10.2026 · 11:05",
    },
    {
        name: "Nərmin Hüseynova",
        email: "nermin@example.com",
        class: "8-ci sinif",
        city: "Gəncə",
        phone: "+994703456789",
        date: "10.10.2026 · 09:42",
    },
    {
        name: "Tural Qasımov",
        email: "tural@example.com",
        class: "11-ci sinif",
        city: "Bakı",
        phone: "+994514567890",
        date: "08.10.2026 · 14:18",
    },
    {
        name: "Leyla Rzayeva",
        email: "leyla.r@example.com",
        class: "9-cu sinif",
        city: "Bakı",
        phone: "+994775678901",
        date: "05.10.2026 · 17:30",
    },
];

const tableHeader = [
    { id: "student", label: "ŞAGİRD" },
    { id: "class", label: "SİNİF" },
    { id: "city", label: "ŞƏHƏR" },
    { id: "phone", label: "TELEFON" },
    { id: "date", label: "QEYDİYYAT" },
];

function RecentStudents() {
    return (
        <div className="overflow-hidden rounded-xl border bg-white min-w-0">
            <div className="flex items-center justify-between py-3 px-4 sm:px-5">
                <h2 className="font-bold text-base sm:text-lg text-main-txt">
                    Son qeydiyyatlar
                </h2>

                <Link
                    to="/students"
                    className="text-xs sm:text-sm font-bold text-primary hover:underline whitespace-nowrap"
                >
                    Hamısına bax
                </Link>
            </div>

            <div className="overflow-x-auto">
                <Table className="min-w-162.5">
                    <TableHeader>
                        <TableRow className="bg-gray-50 hover:bg-gray-50">
                            {tableHeader.map((header) => (
                                <TableHead
                                    key={header.id}
                                    className="text-txt-desc! text-xs h-9"
                                >
                                    {header.label}
                                </TableHead>
                            ))}
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {students.map((student) => (
                            <TableRow key={student.email} className="font-medium">
                                <TableCell className="py-2">
                                    <div className="flex items-center gap-2">
                                        <AvatarComponents name={student.name} />

                                        <div className="min-w-0">
                                            <p className="font-medium text-sm text-[#0E1A16] whitespace-nowrap">
                                                {student.name}
                                            </p>
                                            <p className="text-[11px] text-gray-500">
                                                {student.email}
                                            </p>
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell className="text-xs whitespace-nowrap">
                                    <span className="bg-primary/10 text-primary rounded-full px-2 py-1">
                                        {student.class}
                                    </span>
                                </TableCell>

                                <TableCell className="text-xs">
                                    {student.city}
                                </TableCell>

                                <TableCell className="text-xs whitespace-nowrap">
                                    {student.phone}
                                </TableCell>

                                <TableCell className="whitespace-nowrap text-xs text-gray-500">
                                    {student.date}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default RecentStudents;