import { sliceMoreCharacters } from "../../utils";

const Card = ({ image, name, synopsis }) => {
    return (
        <div className="w-full cursor-pointer">
            <img
                src={image}
                alt={name}
                className="w-full h-96 object-center object-cover rounded"
            />
            <div className="flex flex-col gap-2 text-wrap">
                <span className="font-semibold text-lg leading-[22px]">
                    {sliceMoreCharacters(name, 31)}
                </span>
                <span className="text-sm">
                    {sliceMoreCharacters(synopsis, 140)}
                </span>
            </div>
        </div>
    );
};

export default Card;
