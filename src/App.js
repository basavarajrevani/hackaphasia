import React from 'react';
import NavBar from './components/NavBar';

const App = () => {
    return (
        <div>
            <NavBar />
            <div id="home">Home Section</div>
            <div id="about">About Section</div>
            <div id="contacts">Contacts Section</div>
            <div id="chatbot">Chat Bot Section</div>
            {/* Add your chatbot component here */}
        </div>
    );
};

export default App; 