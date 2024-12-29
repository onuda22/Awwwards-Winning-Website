import React from 'react';

const AnimatedTitle = ({ title, containerClass }) => {
  return (
    <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]">
      {title.split('<br />')}
    </div>
  );
};

export default AnimatedTitle;
