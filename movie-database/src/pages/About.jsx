import React from 'react';

function About() {
  return (
    <div className="about-page h-screen flex justify-start flex-col p-16">
      <h1 className='heading p-16'>About Us</h1>
      <p>
        Welcome to our movie database website! 
      </p>
      <p>
        Our mission is to provide innovative solutions that meet the unique
        needs of our clients. With years of experience in the industry, we have
        built a reputation for excellence and customer satisfaction.
      </p>
      <h2 className=''>Our Team</h2>
      <ul>
        <li>John Doe - CEO</li>
        <li>Jane Smith - COO</li>
        <li>Michael Johnson - CTO</li>
        <li>Susan Brown - CFO</li>
      </ul>
      <h2>Our Values</h2>
      <p>
        At our core, we value integrity, teamwork, and innovation. We believe in
        fostering a culture of collaboration and continuous improvement to
        better serve our clients and achieve our goals.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or would like to learn more about our
        services, please don't hesitate to contact us. We are here to assist
        you.
      </p>
      <address>
        Email: info@example.com
        <br />
        Phone: +1 (123) 456-7890
        <br />
        Address: 123 Main Street, Cityville, USA
      </address>
    </div>
  );
}

export default About;
