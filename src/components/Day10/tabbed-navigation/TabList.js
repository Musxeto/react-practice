import React, { useState } from 'react';

function TabList({ children }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div>
        {React.Children.map(children, (child, index) => (
          <button key={index} onClick={() => handleTabClick(index)}>
            {child.props.label}
          </button>
        ))}
      </div>
      <div>{React.Children.toArray(children)[activeTab]}</div>
    </div>
  );
}

export default TabList;
