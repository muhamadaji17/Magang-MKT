import { Navlink } from "../atoms";
import { sidebarPattern } from "../../pattern/sidebarPattern";
import Accordion from "../molecules/Accordion";
import { useGlobalHooks } from "../../hooks";

const Sidebar = ({ hamburger }) => {
    const { accordion, setAccordion } = useGlobalHooks();

    return (
        <nav
            className={`${
                hamburger ? "flex" : "hidden"
            } w-60 min-h-svh h-full lg:w-24 pt-16 fixed top-0 left-0 z-10 
            lg:hover:w-60 lg:flex flex-col lg:transition-all 
            items-center bg-white shadow-md group`}
        >
            <ul className="space-y-4 mt-5 w-full list-none">
                {sidebarPattern.map((data, i) =>
                    data.subLink ? (
                        <Accordion
                            datas={data.subLink}
                            title={data.text}
                            state={accordion}
                            Icon={data.icon}
                            setState={setAccordion}
                            key={i}
                        />
                    ) : (
                        <Navlink href={data.href} icon={data.icon} key={i}>
                            {data.text}
                        </Navlink>
                    )
                )}
            </ul>
        </nav>
    );
};

export default Sidebar;
