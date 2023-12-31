import React, { useState, useEffect } from "react";
import { Data } from "../../services/Data";
import axios from "axios";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
const ProjectsCard = () => {
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

  const excerpt = (str) => {
    if (str.length > 55) {
      str = str.substring(0, 55) + " ...";
    }
    return str;
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://hustle-kenya-7azi.onrender.com/stats/const`
        );
        res.data.sort(compare);
        const result = res.data.filter((_, index) => index < 100);
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
    <>
    {loading ? (
      <>
        <Stack
          style={{
            display: "flex",
            marginTop: "5rem",
            alignItems: "center",
            justifyContent: "center",
          }}
          spacing={1}
        >
          {/* For variant="text", adjust the height via font-size */}
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          {/* For other variants, adjust the size with `width` and `height` */}
          <Skeleton variant="circular" width={100} height={100} />
          <Skeleton variant="rectangular" width={310} height={100} />
          <Skeleton variant="rounded" width={310} height={100} />
        </Stack>
      </>
    ) : (<>
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
                      <img style={{ width:"100%",height:'15rem',objectFit:'cover' }} src={image?.url} alt="" />
                    );
                  })}
                  <h3>{i.construction}</h3>
                  <p>{excerpt(i.constDescription)}</p>
                  <div className="linkabout">
                  <Link to={`/single-project/${i._id}`}>Learn More....</Link>
                    <div className="line"></div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      </>)}
    </>
  );
};

export default ProjectsCard;
