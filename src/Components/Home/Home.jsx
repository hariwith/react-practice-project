import React from 'react'
import image from '../../assets/image.png'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="home-con">
        <div className="main-home">

        <div className="sec1">
            <h3>Hello,</h3>
            <h1>I am Srihari KV,</h1>
            <h6>Full stack developer</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quo, adipisci earum sit libero ducimus commodi incidunt obcaecati. Vero neque molestias, dolor provident totam suscipit fugiat obcaecati blanditiis ex velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sapiente corporis ad nobis veniam dolores aliquid officiis dignissimos, assumenda atque temporibus. Culpa, amet ullam dolore esse et aliquam harum laboriosam.</p>
            
        </div>
        <div className="sec2">
            <img src={image} alt='loadingg...' />
        </div>
        </div>
        <div className="btn-home">
            <Link to='/contact'>Hire me!</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
