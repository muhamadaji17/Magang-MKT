const Label = ({ htmlfor, children, ...props }) => {
    return (
        <label htmlFor={htmlfor} {...props}>
            {children}
        </label>
    );
};

export default Label;
