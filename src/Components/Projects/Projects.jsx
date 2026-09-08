import React from "react";
import './Projects.css'

const Projects = () => {
  return (
    <div>
      <div className="pro-con">
        <div className="sec1">
          <h1>Projects</h1>
        </div>
        <div className="sec2">
          <div className="pro">
            <h2>React E-Commerce Store</h2>
            <ul>
              <li>
                Built a responsive e-commerce web application using React,
                JavaScript, HTML, and CSS.
              </li>
              <li>
                {" "}
                Developed reusable components for product listing, shopping
                cart, search, filtering, and product details.
              </li>
              <li>
                Managed application state using React Hooks (useState) and
                implemented conditional rendering.
              </li>
              <li>
                {" "}
                Designed a responsive user interface using CSS, Flexbox, and
                Grid.
              </li>
            </ul>
            <a href="https://github.com/hariwith/Basic-E-commerce-page-using-react">Github</a>
            <hr/>
          </div>
          <div className="pro">
            <h2>Weather App</h2>
            <ul>
                <li>Developed a responsive weather application using React and the OpenWeatherMap API.</li>
                <li> Implemented city-based weather search displaying temperature, humidity, wind speed, and weather
conditions.</li>
<li>Utilized React Hooks, asynchronous API requests, and environment variables for secure API integration.</li>
<li> Implemented error handling and conditional rendering to enhance the user experience.</li>

            </ul>
            <a href="https://github.com/hariwith/weather-app">Github</a>
            <hr/>
          </div>
          <div className="pro">
            <h2>PavanXDCL Clone Website</h2>
            <ul>
                <li> Developed a responsive clone of the PavanXDCL educational platform using HTML and CSS.</li>
                <li> Recreated the homepage with sections including navigation, hero banner, course cards, statistics, and
footer.</li>
                <li>Utilized CSS Flexbox, Grid, media queries, and hover effects to build a responsive layout.</li>
                <li> Managed version control with Git and GitHub and deployed the project using GitHub Pages.</li>

            </ul>
            <a href="https://github.com/hariwith/pavanxdcl-clone">Github</a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
