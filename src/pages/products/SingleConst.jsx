import { Card } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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
} from 'mdb-react-ui-kit';
function Cardmore() {

  const [varyingState, setVaryingState] = useState('');
  const [varyingModal, setVaryingModal] = useState(false);
  const [varyingRecipient, setVaryingRecipient] = useState('');
  const [varyingMessage, setVaryingMessage] = useState('');

  const onChangeRecipient = (event) => {
    setVaryingRecipient(event.target.value);
  };

  const onChangeMessage = (event) => {
    setVaryingMessage(event.target.value);
  };



  const [users, setUsers] = React.useState([]);
  const [enlargedImage, setEnlargedImage] = useState(null);

  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const handleEnlargedImageClick = () => {
    setEnlargedImage(null);
  };
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

    <div className='card-single-product' >
    <div className="cardmore">
       {users?.images?.slice(0, 1).map((image) => {
            return <img style={{ width: "100%",objectFit:'cover' }} src={image?.url} alt="" />;
          })}
        <h3 className='moretitle'>{users.construction}</h3>
        <p className='moredescription'>{users.constDescription}</p>
       
       </div>
       <div className="specificati">
        <ul>
        <li>{users.specifications}</li>
            <li>{users.specifications1}</li>
        </ul>
        <div className="single-card-bottom">
        <>
      <MDBBtn
        onClick={() => {
          setVaryingState('@mdo');
          setVaryingModal(!varyingModal);
          setVaryingRecipient('@mdo');
        }}
      >
        Get Your Dream House
      </MDBBtn>
      <MDBModal show={varyingModal} setShow={setVaryingModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Get Your House Today</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={() => setVaryingModal(!varyingModal)}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <form>
                <div className='mb-3'>
                  {varyingModal && (
                    <MDBInput
                     placeholder='Your Name'
                      onChange={onChangeRecipient}
                      labelClass='col-form-label'
                      label='Your Name:'
                    />
                  )}
                </div>
                <div className='mb-3'>
                  {varyingModal && (
                    <MDBInput
                     placeholder='Your Email'
                      onChange={onChangeRecipient}
                      labelClass='col-form-label'
                      label='Your Email:'
                    />
                  )}
                </div>
                <div className='mb-3'>
                  {varyingModal && (
                    <MDBInput
                     placeholder='Your Budget'
                      onChange={onChangeRecipient}
                      labelClass='col-form-label'
                      label='Your House Budget:'
                    />
                  )}
                </div>
                <div className='mb-3'>
                  {varyingModal && (
                    <MDBTextArea
                     placeholder='Describe your House'
                      onChange={onChangeMessage}
                      labelClass='col-form-label'
                      label='Description of your house:'
                    />
                  )}
                </div>
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={() => setVaryingModal(!varyingModal)}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

</>
        
        <button className="btn">
         {users.constLocation}
        </button>
       </div>
       </div>
    </div>

<h3 style={{color:"blueviolet", textAlign: "center",marginTop:'1rem' }}> More Images</h3>

<div className="images">
  {users?.images?.map((image) => {
    return <img style={{ width: "20rem",height:'20rem' }} src={image?.url} alt=""
    onClick={() => handleImageClick(image?.url)} />;
  })}
</div>
{enlargedImage && (
        <div
          className="enlarged-image-overlay"
          onClick={handleEnlargedImageClick}
        >
          <img
            className="enlarged-image"
            src={enlargedImage}
            alt=""
          />
        </div>
       
      )}
    </div>
  )
}

export default Cardmore