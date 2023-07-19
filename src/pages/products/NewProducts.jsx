import React, { useEffect, useState } from "react";
import { Alert, Col, Container, Form, Row, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createProject } from "../../redux/features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import moment from 'moment'
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
// import { useCreateProductMutation } from "../../services/appApi";
// import axios from "../../../axios";
// import "./NewProduct.css";

function NewProduct() {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const[loading, setLoading]=useState(true)
  const [users, setUsers] = useState([]);

  const initialState = {
    constDescription: "",
    tell: "",
    discountPercentage: "",
    age: "",

    construction: "",
    // description:"",
    // discountPercentage:"",
    // location:"",
    // age:"",
    infoAdd: "",
    price: "",
    category: "",
    constLocation: "",
    firstname: "",
    phone: "",
    lastname: "",
    address: "",
    specifications: "",
    specifications1: "",
    specifications2: "",
    specifications3: "",
    specifications4: "",
  };

  const dispatch = useDispatch();
  function compare(a, b) {
    if (a._id < b._id) {
      return 1;
    }
    if (a._id > b._id) {
      return -1;
    }
    return 0;
  }
  const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

const d = new Date();
let hours = d.getHours();
// This arrangement can be altered based on how we want the date's format to appear.
let currenDate = date.getTime('h');
const currentTime=new Date();
  
  const id = user?.result?._id;
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`https://hustle-kenya-7azi.onrender.com/mpesa/stkPush/${id}`);
        res.data.sort(compare);
        const result = res.data.filter((_, index) => index < 1);
        setUsers(result);
        if(users.amount<50){
          navigate('/mpesa-payment')

        }
        setLoading(false)
        console.log('date',users);
      } catch (error) {
        console.log(error);
        setLoading(false)

      }
    }
    fetchData();
  }, []);
// useEffect(()=>{
//   if()
// })

  const [images, setImages] = useState([]);

  const [imgToRemove, setImgToRemove] = useState(null);
  const navigate = useNavigate();
  //   const [createProduct, { isError, error, isLoading, isSuccess }] =
  // useCreateProductMutation();

  function handleRemoveImg(imgObj) {
    setImgToRemove(imgObj.public_id);
    axios
      .delete(`/images/${imgObj.public_id}/`)
      .then((res) => {
        setImgToRemove(null);
        setImages((prev) =>
          prev.filter((img) => img.public_id !== imgObj.public_id)
        );
      })
      .catch((e) => console.log(e));
  }

  const [form, setForm] = useState(initialState);
  console.log("form", form);

  useEffect(() => {
    setForm((prevForm) => ({
      ...prevForm,
      images,
      tell: user?.result?.phone,
    }));
  }, [images]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form) {
      dispatch(createProject({ ...form, toast }));
    }
  };
  console.log(user?.result?.phone);
  function showWidget() {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "pitz",
        uploadPreset: "peter-main",
      },
      (error, result) => {
        if (!error && result.event === "success") {
          setImages((prev) => [
            ...prev,
            { url: result.info.url, public_id: result.info.public_id },
          ]);
        }
      }
    );
    widget.open();
  }

  console.log("img", images);
  return (
    <>
    {users.amount <50 ? (<>
    </>):(<>
    <form
      onSubmit={handleSubmit}
      action=""
      style={{ color: "black" }}
      className="maininfo"
      id="forms"
    >
     
      <h1>Post an Item</h1>
      {/* {user?.result?._id} */}
      {loading ? (
          <Stack spacing={1}>
            {/* For variant="text", adjust the height via font-size */}
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
          </Stack>
        ) : (<>
      <div className="sep">
        <div className="sep-left">

       
        <div className="form-outline mb-4">
          <input 
          className="form-control"
           
            onChange={(e) => setForm({ ...form, construction: e.target.value })}
            type="text"
            placeholder="Construction Type"
          />
        </div>
        <div className="form-outline mb-4">
          <input
                    className="form-control"

           
            onChange={(e) => setForm({ ...form, constDescription: e.target.value })}
            type="text"
            placeholder="Construction description"
          />
        </div>
         
          <div className="form-outline mb-4">
            <input
                      className="form-control"

              onChange={(e) => setForm({ ...form, constLocation: e.target.value })}
              type="text"
              placeholder="Construction Location"
            />
          </div>
          </div>
         <div className="sep-left">
         <div className="form-outline mb-4">
            <input
                      className="form-control"

              onChange={(e) => setForm({ ...form, specifications: e.target.value })}
              type="text"
              placeholder="House Featutures 1"
            />
          </div>
          <div className="form-outline mb-4">
            <input
                      className="form-control"

              onChange={(e) => setForm({ ...form, specifications1: e.target.value })}
              type="text"
              placeholder="House Featutures 2"
            />
          </div>
         </div>

<Form.Group className="mb-3">

        <Button style={{width:'100%',textAlign:'center'}} type="button" onClick={showWidget}>
          Upload Images
        </Button>
  
 

        <div className="images-preview-container">
          {images.map((image) => (
            <div className="image-preview">
              <img width={200} src={image.url} />
              {imgToRemove != image.public_id && (
                <i
                  className="fa fa-times-circle"
                  onClick={() => handleRemoveImg(image)}
                ></i>
              )}
            </div>
          ))}
        </div>
      </Form.Group>
      
      <button type="submit" style={{width:'90%',marginBottom:'1rem'}} class="btn btn-primary btn-block">Post the Product</button>
     
</div>
</>)}
    </form>
    </>)}
    </>
    
  );
}

export default NewProduct;
