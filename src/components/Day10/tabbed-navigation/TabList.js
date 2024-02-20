import React,{useState} from 'react'

function TabList({childeren}) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

    return (
    <div>
      <div>
        {React.Children.map(children, (child , index ) => (
            <button key={index} onClick={()=> handleTabClick(index)}>
                {childeren.props.label}
            </button>
                ))}
      </div>
      <div>{React.Childeren.toArray(childeren)[activeTab]}</div>
    </div>
  )
}

export default TabList
