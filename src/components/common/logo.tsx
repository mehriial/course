import { Columns2 } from "lucide-react"

function HeaderLogo() {
    return (
        <div className="flex items-center gap-2">
            <div className="flex items-center justify-center bg-primary p-2 rounded-md text-white">
                <Columns2 />
            </div>
            <h1 className="font-bold">Tədris Paneli</h1>
        </div>
    )
}

export default HeaderLogo