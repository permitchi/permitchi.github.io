        
export default function GridListToggle() {
    return (
        <div className="inline-flex rounded-md shadow-xs bg-gray-100 p-1" role="group">
            <button 
                id="gridBtn"
                className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium transition-colors bg-white text-gray-900 shadow-xs"
                aria-label="Grid view"
            >
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
            </button>
      
            <button 
                id="listBtn"
                className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium transition-colors text-gray-500 hover:text-gray-900"
                aria-label="List view"
            >
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    );
}