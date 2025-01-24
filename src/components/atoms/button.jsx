export const Button = ({ className, children, disable }) => {
    return (
        <button
            type='submit'
            className={`bg-blue-600 rounded text-white ${className} h-10 disabled:bg-blue-950 disabled:cursor-not-allowed`}
            disabled={disable}
        >
            {disable ? 'Loading...' : children}
        </button>
    );
};
