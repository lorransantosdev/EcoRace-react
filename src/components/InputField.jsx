export default function InputField({ label, type, value, onChange, placeholder, id, className }) {

    return(
        <>
        <div className="flex flex-col">
            <label htmlFor={id} className="text-white mb-2">
                {label}
            </label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={className}
            />
        </div>
        </>
    );
}