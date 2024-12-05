import React from 'react';
import NavBar from './components/NavBar';
import ChatBot from './components/ChatBot';

const App = () => {
    return (
        <div>
            <NavBar />
            <div id="home">Home Section</div>
            <div id="about">About Section</div>
            <div id="contacts">Contacts Section</div>
            <ChatBot />
        </div>
    );
};

export default App; 