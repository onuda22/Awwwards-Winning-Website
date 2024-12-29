import React from 'react';

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>
        </div>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Immerse yourself in a rich and ever-expanding universe where a vibrant
          array of products coverge into an interconnected overlay experience on
          your world
        </p>
      </div>

      <div className="border-hsla relative mb-7 w-full overflow-hidden rounded-md md:h-[65vh]">
        {/* Implement Bento Card for every different content */}
      </div>
    </section>
  );
};

export default Features;