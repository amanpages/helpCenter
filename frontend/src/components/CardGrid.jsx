import React from 'react';

function CardGrid({ cards }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-8">
            {cards.map((card) => (
                <div key={card.id} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <h2 className="text-xl font-semibold mb-4">{card.title}</h2>
                    <p className="text-gray-600">{card.description}</p>
                </div>
            ))}
        </div>
    );
}

export default CardGrid;
