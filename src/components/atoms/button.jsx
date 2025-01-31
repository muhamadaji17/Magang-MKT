const Button = ({ className, children, disable, onClick }) => {
    return (
        <button
            type='submit'
            className={`rounded flex items-center justify-center ${className} h-10 disabled:bg-blue-950 disabled:cursor-not-allowed`}
            disabled={disable}
            onClick={onClick}
        >
            {disable ? 'Wait...' : children}
        </button>
    );
};

export default Button;
