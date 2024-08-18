import React from 'react';

function Header() {
    return (
        <header className="bg-black text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <img src="https://cdn.prod.website-files.com/5ff3926f03b3ba26b7d639cb/60c388bf3c3ae4d1d10653e7_Abstract_Wordmark-White.svg" alt="logo" className="h-8"/>
                    <span className="text-gray-400">| Help Center</span>
                </div>
                <button className="bg-gray-900 text-white py-2 px-6 rounded hover:bg-gray-800">
                    Submit a request
                </button>
            </div>
        </header>
    );
}

export default Header;
