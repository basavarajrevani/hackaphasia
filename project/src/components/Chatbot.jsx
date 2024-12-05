import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const sendMessage = async () => {
        if (userInput.trim() === '') return;

        const newMessages = [...messages, { sender: 'User', text: userInput }];
        setMessages(newMessages);
        setUserInput('');

        // Call the Gemini API
        try {
            const response = await axios.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyD-LRhN77z-JyAG48SKhxOZr7ezAurT0rg', {                            // Replace with the actual Gemini API endpoint
                prompt: userInput,
                max_tokens: 150, // Adjust as needed
            }, {
                headers: {
                    'Authorization': `AIzaSyD-LRhN77z-JyAG48SKhxOZr7ezAurT0rg`, // Replace with your Gemini API key
                    'Content-Type': 'application/json',
                },
            });

            const aiResponse = response.data.choices[0].text; // Adjust based on the actual response structure
            setMessages([...newMessages, { sender: 'AI', text: aiResponse }]);
        } catch (error) {
            console.error('Error fetching AI response:', error);
            setMessages([...newMessages, { sender: 'AI', text: 'Sorry, I could not respond at this time.' }]);
        }
    };

    return (
        <div>
            <button onClick={toggleChat} style={{ position: 'fixed', bottom: '20px', right: '20px', backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }}>
                Chat with AI!
            </button>
            {isOpen && (
                <div style={{ position: 'fixed', bottom: '70px', right: '20px', width: '300px', backgroundColor: 'white', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.5)', zIndex: 1000 }}>
                    <div style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px' }}>
                        <strong>AI Chatbot</strong>
                        <button onClick={toggleChat} style={{ float: 'right', background: 'none', border: 'none', color: 'white' }}>&times;</button>
                    </div>
                    <div style={{ padding: '10px', height: '200px', overflowY: 'auto' }}>
                        {messages.map((msg, index) => (
                            <div key={index} style={{ textAlign: msg.sender === 'User' ? 'right' : 'left' }}>
                                <strong>{msg.sender}:</strong> {msg.text}
                            </div>
                        ))}
                    </div>
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Type your message..."
                        style={{ width: 'calc(100% - 20px)', margin: '10px', padding: '5px' }}
                    />
                    <button onClick={sendMessage} style={{ margin: '10px' }}>Send</button>
                </div>
            )}
        </div>
    );
};

export default Chatbot; 