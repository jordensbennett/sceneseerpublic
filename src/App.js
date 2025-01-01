// App.js
import React, { useState } from 'react';
import './App.css'; // Link to the CSS file

function App() {
  // State for handling search input
  const [search, setSearch] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleFileUpload = (event) => {
    setUploadedFile(event.target.files[0]);
    alert(`File uploaded: ${event.target.files[0]?.name}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Search and Upload</h1>

        {/* Search bar */}
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearchChange}
          className="search-bar"
        />

        {/* Upload button */}
        <div className="upload-container">
          <input
            type="file"
            onChange={handleFileUpload}
            className="file-input"
            id="fileUpload"
          />
          <label htmlFor="fileUpload" className="upload-label">
            Upload Photo
          </label>
        </div>

        {/* Display uploaded file name */}
        {uploadedFile && <p>Uploaded File: {uploadedFile.name}</p>}
      </header>
    </div>
  );
}

export default App;