
export default function FormSection({ title, children }) {
    return (
        <div>
            <h2>{title}</h2>
            <div className="form-section flex flex-col gap-4">
                {children}
            </div>
        </div>
    )


}