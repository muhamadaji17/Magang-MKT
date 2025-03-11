import { FaCircle } from "react-icons/fa";

const Tooltip = ({ logical }) => {
    return (
        <div className="cursor-pointer absolute top-3 right-3 group">
            <FaCircle
                className={`${logical ? "text-green-500" : "text-red-500"}`}
            />
            <span className="absolute -top-3/4 -translate-y-3/4 p-2 bg-black text-white rounded-md whitespace-nowrap group-hover:block hidden">
                {logical ? "Active" : "Inactive"}
            </span>
        </div>
    );
};

export default Tooltip;
