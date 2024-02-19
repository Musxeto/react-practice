import React from 'react';

const ChildComponent = ({ data }) => {
  return (
    <div>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
};

const DynamicRenderer = ({ dataArray }) => {
  return (
    <div>
      {dataArray.map((item, index) => (
        <ChildComponent key={index} data={item} />
      ))}
    </div>
  );
};

const ExampleApp = () => {
  const dataArray = [
    { title: 'Kanye West', description: 'Graduation, My Beautiful Dark Twisted Fantasy, The Life of Pablo' },
    { title: 'The Weeknd', description: 'After Hours, Dawn FM, Beauty Behind The Madness' },
    { title: 'Kendrick Lamar', description: 'To Pimp A Butterfly, good kid, m.A.A.d city, DAMN.' },
  ];

  return (
    <div>
      <h1>Dynamic Rendering Day-9</h1>
      <DynamicRenderer dataArray={dataArray} />
    </div>
  );
};

export default ExampleApp;
