import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import CardGrid from './components/CardGrid';
import Footer from './components/Footer';

function App() {
    const [cards, setCards] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Fetch data from the server
        axios.get('http://localhost:5000/cards')
            .then(response => setCards(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const filteredCards = cards.filter(card =>
        card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <Header />
            <div className="bg-indigo-100 py-12"> {/* Updated color for the section before the cards */}
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold text-center mb-8">How can we help?</h1>
                    <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                </div>
            </div>
            <div className="bg-white py-12"> {/* Card section with a different background color */}
                <div className="container mx-auto">
                    <CardGrid cards={filteredCards} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
