import { FaCircle } from "react-icons/fa";
import { sliceMoreCharacters } from "../../utils";

const DescriptionContent = ({ title, status, text }) => {
    return (
        <div className="bg-slate-100 w-full h-80 flex-1 rounded py-2 px-4 space-y-2 flex flex-col">
            <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">{title}</h3>
                <div className="relative group cursor-pointer">
                    <FaCircle
                        className={status ? "text-green-500" : "text-red-500"}
                    />
                    <span className="absolute -top-1/2 left-1/2 -translate-y-1/2 hidden group-hover:block bg-black text-white px-2 py-1 rounded-lg">
                        {status ? "Active" : "Inactive"}
                    </span>
                </div>
            </div>
            <div className="w-full flex-1 overflow-hidden">
                <div
                    dangerouslySetInnerHTML={{
                        __html: sliceMoreCharacters(text, 1300),
                    }}
                />
            </div>
        </div>
    );
};

export default DescriptionContent;
