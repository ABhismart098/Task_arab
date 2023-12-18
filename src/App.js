// App.js
import React from 'react';
import ImageSlider from './componets/imageSlider';
import './App.css';

const App = () => {
  const slides = [
    {
      image: 'https://placekitten.com/1200/600',
      content: 'A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic.',
    },
    {
      image: 'https://placekitten.com/1200/601',
      content: 'Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs.',
    },
    // Add more slides as needed
  ];

  return (
    <div className="App">
      <ImageSlider slides={slides} parallaxIntensity={0.2} transitionSpeed={800} />
    </div>
  );
};

export default App;
