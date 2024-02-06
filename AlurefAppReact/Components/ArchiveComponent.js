import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ArchivePage = () => {
  // Mock data for folders (replace with actual data or fetch from a server)
  const [folders, setFolders] = useState([
    { id: 1, date: '2022-03-15' },
    { id: 2, date: '2022-04-20' },
    // Add more folders as needed
  ]);

  const onAddFolderClicked = () => {
    // Generate a new folder with the current timestamp
    const newFolder = { id: Date.now(), date: new Date().toISOString().slice(0, 10) };
    
    // Update the state to add the new folder
    setFolders((prevFolders) => [...prevFolders, newFolder]);
  };

  return (
    <div>
      <h2>Archive</h2>
      
      {/* Render folders with date timestamps */}
      {folders.map((folder) => (
        <Link key={folder.id} to={`/ladles/${folder.date}`}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img
              src="folder_icon.png" // Replace with your folder icon
              alt="Folder Icon"
              style={{ width: '50px', height: '50px', marginRight: '10px', cursor: 'pointer' }}
            />
            <span>{folder.date}</span>
          </div>
        </Link>
      ))}

      {/* Add Folder button */}
      <div onClick={onAddFolderClicked} style={{ cursor: 'pointer' }}>
        <img
          src="plus_icon.png" // Replace with your plus icon
          alt="Add Folder Icon"
          style={{ width: '50px', height: '50px', cursor: 'pointer' }}
        />
      </div>
    </div>
  );
};

export default ArchivePage;
