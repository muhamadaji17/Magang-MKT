export const Button = ({ className, children }) => {
    return (
        <button
            type='submit'
            className={`bg-blue-600 rounded text-white ${className}`}
        >
            {children}
        </button>
    );
};
