import React from 'react';

function About() {
  return (
    <div className="about-page h-screen flex justify-start flex-col p-16">
      <h1 className='heading'>
        For the Movie Lovers
      </h1>
      <p>
        Find movies you’ve been meaning to see. movies you’re excited to watch, and reminisce on movies you love.
      </p>
      <p>
        JJJ Movies is an API-based movie database. We use the TMDb API for our content generation but we are not affiliated with TMDb in any form
      </p>
      <p>
        An API-based Movie Database
      </p>
      <p>
        For the Movie Lover in You  
      </p>
      <h2 className=''>Our Team</h2>
      <ul>
        <li>Jet Cham</li>
        <li>Joaquin Opulencia</li>
        <li>Josh Esteban</li>
      </ul>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or would like to learn more about our
        services, please don't hesitate to contact us. We are here to assist
        you.
      </p>
    </div>
  );
}

export default About;
