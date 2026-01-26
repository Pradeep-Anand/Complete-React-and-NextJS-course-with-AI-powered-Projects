export default function Button({label, color, size, disabled, onClick       }) {
    return(
        <button
        onClick={onClick}
        className= 
        {
            `px-3 py-1 rounded-lg text-white font-medium transition-all duration-300 bg-blue-500 hover:bg-blue-600
            ${color === 'primary' ? 'bg-blue-500 hover:bg-blue-600' : ''}
            ${color === 'secondary' ? 'bg-gray-500 hover:bg-gray-600' : ''}
            ${color === 'danger' ? 'bg-red-500 hover:bg-red-600' : ''}
            ${color === 'warning' ? 'bg-yellow-500 hover:bg-yellow-600' : ''}
            ${color === 'success' ? 'bg-green-500 hover:bg-green-600' : ''}
            ${size === 'small' ? 'text-xs' : ''}
            ${size === 'large' ? 'text-3xl px-8 py-3' : ''}    
            ${disabled ? 'bg-gray-400 cursor-not-allowed hover:bg-gray-500' : ''}
            `
        }
        >
            {label}
        </button>
    )
}