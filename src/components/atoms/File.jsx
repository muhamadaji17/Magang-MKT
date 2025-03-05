const File = ({ id, register, addOptionError, ...props }) => {
    return (
        <input
            id={id}
            type="file"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-sky-600"
            accept="image/*"
            {...props}
            {...(register ? register(id, addOptionError) : {})}
        />
    );
};

export default File;
