export default function Label({ htmlfor, variant, children }) {
    return (
        <label htmlFor={htmlfor} className={variant}>
            {children}
        </label>
    );
}
