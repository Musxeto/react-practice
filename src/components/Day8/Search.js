import React, { useState } from 'react';

function Search({ titles }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTitles, setFilteredTitles] = useState(titles);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filtered = titles.filter(title => title.toLowerCase().includes(query.toLowerCase()));
    setFilteredTitles(filtered);
  };

  return (
    <div>
      <input type="text" className='input-funny' placeholder='Search here...' value={searchQuery} onChange={handleSearchChange} />
      <ul>
        {filteredTitles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
