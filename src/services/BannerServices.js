import { GET_DATAS, POST_DATAS_FILE, PUT_DATAS } from "../api";
import { AlertForm } from "../components/atoms";

export const GetBannerService = async (
    token,
    setState,
    setLoading,
    setReGetDatas
) => {
    try {
        setLoading(true);
        const response = await GET_DATAS(`crud/banner`, token);
        const datas = response.data.payload.map((item) => ({
            id: item.id_banner,
            banner_name: item.banner_name,
            banner_img: item.banner_img,
            start_date_banner: new Date(item.start_date_banner),
            end_date_banner: new Date(item.end_date_banner),
            status: item.status,
        }));
        setState(datas);
        setReGetDatas(true);
    } catch (error) {
        AlertForm({
            icon: "error",
            text: error.response.data.message,
            title: "failed",
        });
    } finally {
        setLoading(false);
    }
};

export const AddBannerService = async (
    data,
    token,
    setShowModal,
    reset,
    setLoading,
    setReGetDatas
) => {
    const { banner_img, ...res } = data;
    const manipulatedBannerImg = banner_img[0];
    data = { ...res, banner_img: manipulatedBannerImg };

    try {
        setLoading(true);
        const response = await POST_DATAS_FILE("crud/banner", data, token);
        reset();
        AlertForm({
            icon: "success",
            text: response.data.message,
            title: "success",
        });
        setReGetDatas(false);
        setShowModal(false);
    } catch (error) {
        AlertForm({
            icon: "error",
            text: error.response.data.message,
            title: "failed",
        });
    } finally {
        setLoading(false);
    }
};

export const EditBannerDateService = async (
    data,
    accessToken,
    setShowModal,
    reset,
    setLoading,
    setReGetDatas
) => {
    try {
        const bodyres = {
            banner_name: data.banner_name,
            banner_img: data.banner_img,
            status: data.status,
            start_date_banner: data.start_date_banner,
            end_date_banner: data.end_date_banner,
        };
        setLoading(true);
        const response = await PUT_DATAS(
            `crud/banner/${data.id}`,
            bodyres,
            accessToken
        );
        reset();
        AlertForm({
            icon: "success",
            text: response.data.message,
            title: "success",
        });
        setReGetDatas(false);
        setShowModal(false);
    } catch (error) {
        console.log(error);
        AlertForm({
            icon: "error",
            text: error.response.data.message,
            title: "failed",
        });
        console.log(error);
    } finally {
        setLoading(false);
    }
};

export const EditBannerService = async (
    data,
    id,
    accessToken,
    setShowModal,
    reset,
    setLoading,
    setReGetDatas
) => {
    try {
        setLoading(true);
        const response = await PUT_DATAS(
            `crud/banner/${id}`,
            data,
            accessToken
        );
        reset();
        AlertForm({
            icon: "success",
            text: response.data.message,
            title: "success",
        });
        setReGetDatas(false);
        setShowModal(false);
    } catch (error) {
        console.log(error);
        AlertForm({
            icon: "error",
            text: error.response.data.message,
            title: "failed",
        });
    } finally {
        setLoading(false);
    }
};
