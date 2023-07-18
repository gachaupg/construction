import React, { useState,useEffect } from 'react'
import ProjectsCard from './products/ProjectsCard'
import { Data } from '../services/Data'
import FAQ from './FAQ'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  function compare(a, b) {
    if (a._id < b._id) {
      return 1;
    }
    if (a._id > b._id) {
      return -1;
    }
    return 0;
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://hustle-kenya-7azi.onrender.com/stats/const`
        );
        res.data.sort(compare);
        const result = res.data.filter((_, index) => index < 6);
        setData(result);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="home-main-comp">
    <div className='main-home-component'>
<div className="left-home-component">
<h1> <span style={{color:'blueviolet'}} >Edyche Builders Ltd</span > ,<br /> 
The  Best Buildings & Construction Company  In Kenya</h1>
<h2>Creating Your Dream House with Affection</h2>
<button className="btn"> <p 
 style={{marginBottom:'0rem'}}>Discover Projects</p> </button>
</div>  <img className='img-home' src="https://arkio-react.wpocean.com/static/media/p2.2b3319864ab05fdaa9bd.jpg" alt="" />
</div>
{/* Cards */}
<div style={{textAlign:'center',marginTop:'1rem'}} >


</div>
<div className="">
        <h2
          style={{
            textAlign: "center",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        >
          Our Constructions
        </h2>

        <div className="allcards">
          {data.map((i) => {
            return (
              <>
                <div className="card">
                  {i?.images?.slice(0, 1).map((image) => {
                    return (
                      <img style={{ width: "20rem" }} src={image?.url} alt="" />
                    );
                  })}
                  <h3>{i.construction}</h3>
                  <h6>{i.constLocation}</h6>
                  <p>{i.constDescription}</p>
                  <div className="linkabout">
                    <Link to={`/single-project/${i._id}`}>Learn More...</Link>
                    <div className="line"></div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
<div style={{display:'flex',alignItems:'center',
justifyContent:'center',marginBottom:'1rem'}}>
  <Link to='/projects'>
    <button className="btn">
    See more of our constructions
  </button>
  </Link>
  
</div>
    <FAQ/>
    </div>
  )
}

export default Home