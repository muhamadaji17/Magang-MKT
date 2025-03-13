const Input = ({ id, field, variant, type, ...props }) => {
    return (
        <input
            id={id}
            className={`${variant ? variant : ""} ${
                type === "checkbox"
                    ? "h-5 w-5"
                    : "ring-blue-600 ring-1 rounded p-2 focus:ring-blue-800 outline-none"
            } `}
            autoComplete="off"
            type={type}
            {...props}
            {...(field ? field : {})}
        />
    );
};

export default Input;
