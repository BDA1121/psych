import React, { useState } from 'react';
import "./styles/search.css"
import {useNavigate } from 'react-router-dom';
const SearchAndSchedulePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedPsychiatrist, setSelectedPsychiatrist] = useState(null);
  const [meetingDate, setMeetingDate] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    // Perform search logic (e.g., send search term to server, retrieve results, etc.)
    // For demonstration purposes, let's assume searchResults is an array of psychiatrist objects
    const results = [
      { id: 1, name: 'Dr. John Doe', specialty: 'Depression' },
      { id: 2, name: 'Dr. Jane Smith', specialty: 'Anxiety' },
      { id: 3, name: 'Dr. Michael Johnson', specialty: 'PTSD' },
    ];
    setSearchResults(results);
  };

  const handleScheduleMeeting = (event) => {
    event.preventDefault();

    // Perform schedule meeting logic (e.g., send meeting details to server, etc.)
    console.log('Scheduled Meeting:', { psychiatrist: selectedPsychiatrist, meetingDate });
    navigate('/chat');
  };

  const navigate = useNavigate();

  return (
    <div className="search-schedule-page">
      <h2>Search and Schedule</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search psychiatrists"
          required
        />
        <button type="submit">Search</button>
      </form>

      {searchResults.length > 0 && (
        <div className="search-results">
          <h3>Search Results:</h3>
          <ul>
            {searchResults.map((psychiatrist) => (
              <li
                key={psychiatrist.id}
                onClick={() => setSelectedPsychiatrist(psychiatrist)}
                className={selectedPsychiatrist === psychiatrist ? 'selected' : ''}
              >
                {psychiatrist.name} - {psychiatrist.specialty}
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedPsychiatrist && (
        <div className="meeting-scheduling">
          <h3>Schedule Meeting</h3>
          <form onSubmit={handleScheduleMeeting}>
            <label htmlFor="meeting-date">Select Date:</label>
            <input
              type="date"
              id="meeting-date"
              value={meetingDate}
              onChange={(e) => setMeetingDate(e.target.value)}
              required
            />
            <button type="submit">Schedule</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SearchAndSchedulePage;
