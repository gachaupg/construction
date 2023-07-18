import { Card } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { Link, useParams } from 'react-router-dom';

function Cardmore() {
  const [users, setUsers] = React.useState([]);
  function compare(a, b) {
    if (a._id < b._id) {
      return 1;
    }
    if (a._id > b._id) {
      return -1;
    }
    return 0;
  }
  const { id } = useParams();
  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://hustle-kenya-7azi.onrender.com/products/${id}`
        );
        //   res.data.sort(compare);
        // const result = res.data.filter((_, index) => index < 30);
        setUsers(res.data);
        console.log("user", users);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <div style={{marginBottom:'1rem'}}>
    
       <div className="cardmore">
       {users?.images?.slice(0, 1).map((image) => {
            return <img style={{ width: "100%",objectFit:'cover' }} src={image?.url} alt="" />;
          })}
        <h3 className='moretitle'>{users.construction}</h3>
        <p className='moredescription'>{users.constDescription}</p>
       <div className="single-card-bottom">
        <Link to='/contact'>
        <button className="btn">
          Try This Design
        </button>
        </Link>
        
        <button className="btn">
         {users.constLocation}
        </button>
       </div>
       </div>
    </div>
  )
}

export default Cardmore