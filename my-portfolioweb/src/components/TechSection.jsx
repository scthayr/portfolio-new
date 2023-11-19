import React from 'react';
import Image from 'next/image';

const TechSection = () => {
 return (
    <section id="tecnologias">
    <div className="w-full lg:h-screen p-2">
      <div className="md:grid mid:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <h2 className="text-4xl font-bold text-white mb-4">Tecnologias</h2>
        <p className="text-white font-bold mb-4 py-4">What Can I Do</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-75">
         <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src="/images/Html.png" 
               width={80} 
               height={80} 
              alt="/"
            />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>HTML</h3>
            </div>
         </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-75">
         <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src="/images/Css.png" 
              width={80} 
              height={80}
              alt="/"
            />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>CSS</h3>
            </div>
         </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-75">
         <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src="/images/Sass.png" 
              width={80} 
              height={80}
              alt="/"
            />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>Sass</h3>
            </div>
         </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-75">
         <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src="/images/Javascript.png" 
              width={80} 
              height={80}
              alt="/"
            />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>Javascript</h3>
            </div>
         </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-75">
         <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src="/images/React.png" 
              width={80} 
              height={80}
              alt="/"
            />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>React</h3>
            </div>
         </div>
        </div>
        <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-75">
         <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <div className="m-auto">
              <Image src="/images/Typescript.png" 
              width={80} 
              height={80}
              alt="/"
            />
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3>Typescript</h3>
            </div>
         </div>
        </div>

        </div>
      </div>
       </div>
       </section>
 );
};

export default TechSection;
