import React, { useState, useEffect } from "react";
import ProjectsCard from "./products/ProjectsCard";
import { Data } from "../services/Data";
import FAQ from "./FAQ";
import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBTextArea,
  MDBInput,
} from "mdb-react-ui-kit";
const Home = () => {
  const [varyingState, setVaryingState] = useState("");
  const [varyingModal, setVaryingModal] = useState(false);
  const [varyingRecipient, setVaryingRecipient] = useState("");
  const [varyingMessage, setVaryingMessage] = useState("");

  const onChangeRecipient = (event) => {
    setVaryingRecipient(event.target.value);
  };

  const onChangeMessage = (event) => {
    setVaryingMessage(event.target.value);
  };

  const excerpt = (str) => {
    if (str.length > 55) {
      str = str.substring(0, 55) + " ...";
    }
    return str;
  };
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
        const result = res.data.filter((_, index) => index < 9);
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
      ) : (
        <>
          <div className="home-main-comp">
            <div className="main-home-component">
              <div className="left-home-component">
                <h1>
                  {" "}
                  <span style={{ color: "blueviolet" }}>
                    Edyche Builders Ltd
                  </span>{" "}
                  ,<br />
                  The Best Buildings & Construction Company In Kenya
                </h1>
                <h2>Creating Your Dream House with Affection</h2>
                <>
                  <MDBBtn
                    onClick={() => {
                      setVaryingState("@mdo");
                      setVaryingModal(!varyingModal);
                      setVaryingRecipient("@mdo");
                    }}
                  >
                    Get Your Dream House
                  </MDBBtn>
                  <MDBModal
                    show={varyingModal}
                    setShow={setVaryingModal}
                    tabIndex="-1"
                  >
                    <MDBModalDialog>
                      <MDBModalContent>
                        <MDBModalHeader>
                          <MDBModalTitle>Get Your House Today</MDBModalTitle>
                          <MDBBtn
                            className="btn-close"
                            color="none"
                            onClick={() => setVaryingModal(!varyingModal)}
                          ></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                          <form>
                            <div className="mb-3">
                              {varyingModal && (
                                <MDBInput
                                  placeholder="Your Name"
                                  onChange={onChangeRecipient}
                                  labelClass="col-form-label"
                                  label="Your Name:"
                                />
                              )}
                            </div>
                            <div className="mb-3">
                              {varyingModal && (
                                <MDBInput
                                  placeholder="Your Email"
                                  onChange={onChangeRecipient}
                                  labelClass="col-form-label"
                                  label="Your Email:"
                                />
                              )}
                            </div>
                            <div className="mb-3">
                              {varyingModal && (
                                <MDBInput
                                  placeholder="Your Budget"
                                  onChange={onChangeRecipient}
                                  labelClass="col-form-label"
                                  label="Your House Budget:"
                                />
                              )}
                            </div>
                            <div className="mb-3">
                              {varyingModal && (
                                <MDBTextArea
                                  placeholder="Describe your House"
                                  onChange={onChangeMessage}
                                  labelClass="col-form-label"
                                  label="Description of your house:"
                                />
                              )}
                            </div>
                          </form>
                        </MDBModalBody>
                        <MDBModalFooter>
                          <MDBBtn
                            color="secondary"
                            onClick={() => setVaryingModal(!varyingModal)}
                          >
                            Close
                          </MDBBtn>
                          <MDBBtn>Submit</MDBBtn>
                        </MDBModalFooter>
                      </MDBModalContent>
                    </MDBModalDialog>
                  </MDBModal>
                </>
              
              </div>{" "}
              <img
                className="img-home"
                width={600}
                src="https://res.cloudinary.com/pitz/image/upload/v1689760661/WhatsApp_Image_2023-07-19_at_6.27.55_AM_odhaz2.jpg"
                alt=""
              />
            </div>
            {/* Cards */}
            <div style={{ textAlign: "center", marginTop: "1rem" }}></div>
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
                            <img
                              style={{
                                width: "100%",
                                height: "15rem",
                                objectFit: "cover",
                              }}
                              src={image?.url}
                              alt=""
                            />
                          );
                        })}
                        <h5>{i.construction}</h5>
                        <h6>{i.constLocation}</h6>
                        <p>{excerpt(i.constDescription)}</p>
                        <div className="linkabout">
                          <Link to={`/single-project/${i._id}`}>
                            Learn More...
                          </Link>
                          <div className="line"></div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <Link to="/projects">
                <button className="btn">See more of our constructions</button>
              </Link>
            </div>
            <FAQ />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
