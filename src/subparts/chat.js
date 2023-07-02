import React, { useState } from 'react';
import "./styles/chat.css"


const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const generateCalendarDates = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();

    const calendarDates = [];

    // Fill preceding empty cells
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendarDates.push('');
    }

    // Fill calendar dates
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      calendarDates.push(date.toLocaleString('en-US', { day: 'numeric' }));
    }

    return calendarDates;
  };

  const calendarDates = generateCalendarDates();

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        id: Date.now(),
        text: inputValue,
        sender: 'user',
      };

      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  return (
    <div className="chat-page">
      <div className="description-section">
        <h2>About The Doc</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor dui in eros
          eleifend feugiat. Curabitur sagittis eleifend ligula vitae feugiat. Quisque venenatis
          lectus sed velit vulputate vestibulum. Morbi porttitor fringilla ullamcorper. In hac
          habitasse platea dictumst. Mauris ac nunc eu lectus sollicitudin mollis ac a enim.
        </p>
      </div>
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.sender === 'user' ? 'user' : 'bot'}`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
      <div className="schedule-section">
        <h2>Schedule a Meeting</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor dui in eros
          eleifend feugiat. Curabitur sagittis eleifend ligula vitae feugiat. Quisque venenatis
          lectus sed velit vulputate vestibulum.
        </p>
        <button className="schedule-button">Schedule</button>
        <div className="calendar">
          {calendarDates.map((date) => (
            <div
              key={date}
              className={`calendar-date ${selectedDate === date ? 'selected-date' : ''}`}
              onClick={() => handleDateClick(date)}
            >
              {date}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
