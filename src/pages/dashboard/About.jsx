import { useGetDataHook, useGlobalHooks } from "../../hooks";
import { GetAboutService } from "../../services";
import {
    DescriptionContent,
    DashboardHeader,
} from "../../components/molecules";
import { BsPencilSquare } from "react-icons/bs";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { inputAbout } from "../../pattern";
import { AddAboutService } from "../../services";

const AboutPage = () => {
    const {
        accessToken,
        datas,
        setDatas,
        reGetDatas,
        setReGetDatas,
        setLoadingData,
    } = useGlobalHooks();

    useGetDataHook(
        GetAboutService,
        accessToken,
        setDatas,
        setLoadingData,
        reGetDatas,
        setReGetDatas
    );

    return (
        <div className="w-full space-y-2">
            <DashboardHeader
                pageText="About Page"
                buttonText="Add About"
                dataForm={inputAbout}
                titleModal={"Add About"}
                setReGetDatas={setReGetDatas}
                service={AddAboutService}
            />
            {datas.map((data, i) => (
                <div
                    className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-4"
                    key={data.id}
                >
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">About {i + 1}</h2>
                        <div className="flex items-center gap-2">
                            <BsPencilSquare className="w-6 h-6 text-sky-600 cursor-pointer" />
                            <RiDeleteBin6Fill className="w-6 h-6 text-red-600 cursor-pointer" />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <DescriptionContent
                            title="About (Indonesia Language)"
                            status={data.status}
                            text={data.about_body_id}
                        />
                        <DescriptionContent
                            title="About (Indonesia Language)"
                            status={data.status}
                            text={data.about_body_en}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AboutPage;
