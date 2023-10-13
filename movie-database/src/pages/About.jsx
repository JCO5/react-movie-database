import React from 'react';
import { FaGithub, FaEnvelope, FaLinkedin} from 'react-icons/fa';

function About() {
  const people = [
    {
      name: 'Jet Cham',
      github: 'https://github.com/ChamJet',
      linkedin: 'https://www.linkedin.com/in/jarrett-cham-8a9601173/',
      email: 'mailto:jarrett.cham@gmail.com',
    },
    {
      name: 'Joaquin Opulencia',
      github: 'https://github.com/joaquinopulencia',
      linkedin: 'https://www.linkedin.com/in/joaquinopulencia',
      email: 'mailto:joaquin@example.com',
    },
    {
      name: 'Josh Esteban',
      github: 'https://github.com/jestebanito',
      linkedin: 'https://www.linkedin.com/in/joshua-esteban-567776104/',
      email: 'mailto:jodryjay@gmail.com',
    },
  ];
  
  return (
    <div className="about-page h-screen p-16 backdrop-filter relative">
      <div className="h-screen w-full bg-[url('../image/about-us-image.jpg')] blur absolute top-0 left-0"></div>
      <div className='relative z-20'>
        <article>
          <h1 className='heading '>
            For the Movie Lovers
          </h1>
          <div className="p-16">
            <p className="pb-16 text-4xl">
              Find movies you’ve been meaning to see. movies you’re excited to watch, and reminisce on movies you love.
            </p>
            <p>
              JJJ Movies is an API-based movie database. We use the TMDb API for our content generation but we are not affiliated with TMDb in any form
            </p>
            <div className='flex justify-center padding pt-16 pb-16'>
              <img className="h-56 w-56 "src="../src/image/tmdb-logo.svg" alt=""/>
            </div>
            <p>
              An API-based Movie Database
            </p>
            <p>
              For the Movie Lover in You  
            </p>
          </div>
        </article>
        <section>
        <h1 className='heading'>Our Team</h1>
        <ul>
        {people.map((person, index) => (
          <li
            key={index}
            className="hover:shadow-md transition duration-300 p-4"
          >
            <strong className="text-4xl pb-16">{person.name}</strong>
            <ul>
              <li>
                <a
                  href={person.github}
                  className="flex justify-center items-center"
                >
                  <FaGithub className="mr-2" /> GitHub
                </a>
              </li>
              <li>
                <a
                  href={person.linkedin}
                  className="flex justify-center items-center"
                >
                  <FaLinkedin className="mr-2" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={person.email}
                  className="flex justify-center items-center"
                >
                  <FaEnvelope className="mr-2" /> Email
                </a>
              </li>
            </ul>
          </li>
        ))}
      </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
