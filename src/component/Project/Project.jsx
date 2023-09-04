import React from 'react'
import ProjectList from './ProjectList';
const Project = () => {
  return (
    <section id='Project' className='sm:w-[60%]  lg:w-[50%] m-auto text-white p-4'>
      <h1 className='text-xl mb-2 lg:text-2xl text-center font-CustomFont2 tracking-widest p-10'>My Project:</h1>
     <ProjectList/>
    </section>
  );
}

export default Project;