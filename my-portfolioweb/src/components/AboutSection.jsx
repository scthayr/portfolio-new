import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="text-white">
  
        <div className="md:grid mid:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
           <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
           <p className="text-base md:text-lg">
           Meu nome é Thaina, sou estudante de front-end developer. Desde 2022 que me interessei na área da programação, 
           estudo diariamente para conseguir minha primeira oportunidade. Tenho facilidade de aprendizado 
           e a todo momento busco me aprimorar cada vez mais.
           </p>
           <p className="text-base md:text-lg">
           Sou apaixonada por desenvolvimento web e fascinada com o quão complexa a programação pode ser. Atualmente estou aprendendo 
           projetos com Javascript, React JS e outras novas tecnologias.
           </p>
        </div>
  
      
    </section>
  )
};

export default AboutSection;
