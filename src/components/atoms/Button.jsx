const Button = ({ className, children, disable, onClick }) => {
    return (
        <button
            type='submit'
            className={`rounded flex items-center justify-center ${
                className ? className : ''
            } h-10 disabled:bg-blue-950 disabled:cursor-not-allowed cursor-pointer`}
            disabled={disable}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
