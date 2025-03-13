import { handleFileChange } from "../../pattern";
import { useGlobalHooks, useGetInstantState } from "../../hooks";

const File = ({ defaultValue, id, field, imageFor, ...props }) => {
    const {
        previewImage,
        setPreviewImage,
        previewImageName,
        setPreviewImageName,
    } = useGlobalHooks();

    useGetInstantState(
        setPreviewImage,
        defaultValue
            ? `${
                  import.meta.env.VITE_VASE_URL_IMAGE
              }/${imageFor}/${defaultValue}`
            : ""
    );

    useGetInstantState(setPreviewImageName, defaultValue || null);

    return (
        <>
            <div>
                {defaultValue || previewImage || previewImageName ? (
                    <>
                        <img
                            src={previewImage}
                            alt={previewImageName}
                            className="w-32 h-32 rounded cursor-pointer border-2 border-gray-300"
                            onClick={() => document.getElementById(id).click()}
                        />
                        <div>
                            <span>{previewImageName}</span>
                        </div>
                    </>
                ) : (
                    <div
                        className="w-32 h-32 rounded cursor-pointer bg-slate-300  flex items-center justify-center"
                        onClick={() => document.getElementById(id).click()}
                    >
                        <span>Upload Image</span>
                    </div>
                )}
                <input
                    id={id}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                        handleFileChange(
                            e,
                            setPreviewImage,
                            setPreviewImageName,
                            field
                        );
                    }}
                    {...props}
                />
            </div>
        </>
    );
};

export default File;
