import React from 'react';

function Search({ searchQuery, setSearchQuery }) {
    return (
        <div className="flex justify-center mb-8">
            <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-1/2 p-4 rounded-lg border border-gray-300 shadow-sm"
            />
        </div>
    );
}

export default Search;
