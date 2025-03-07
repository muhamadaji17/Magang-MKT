const File = ({ defaultValue, id, register, addOptionError, ...props }) => {
    const handleClick = () => {
        document.getElementById(id).click();
    };

    return (
        <>
            <div>
                {defaultValue ? (
                    <img
                        src={`${
                            import.meta.env.VITE_VASE_URL_IMAGE
                        }/banner/${defaultValue}`}
                        alt=""
                        className="w-32 h-32 rounded cursor-pointer border-2 border-gray-300"
                        onClick={handleClick}
                    />
                ) : (
                    <div
                        className="w-32 h-32 rounded cursor-pointer bg-slate-300  flex items-center justify-center"
                        onClick={handleClick}
                    >
                        <span>Upload Image</span>
                    </div>
                )}
                <input
                    id={id}
                    type="file"
                    accept="image/*"
                    {...(register ? register(id, addOptionError) : {})}
                    {...props}
                />
            </div>
        </>
    );
};

export default File;
