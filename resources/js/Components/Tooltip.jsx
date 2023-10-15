export default function Tooltip({ message, children }) {
    return (
    <div className="relative flex group">
        {children}
        <span className="absolute p-2 text-xs text-white transition-all scale-0 bg-gray-800 rounded top-10 group-hover:scale-100">{message}</span>
    </div>
    )
}
