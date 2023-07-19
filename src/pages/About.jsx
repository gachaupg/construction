import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { MDBTypography } from 'mdb-react-ui-kit';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBCardGroup
} from 'mdb-react-ui-kit';
import {

  MDBCardSubTitle,

  MDBCardLink
} from 'mdb-react-ui-kit';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const About = () => {
  return (
    <div className="about-main-page">
      <MDBCard style={{ display: "flex", flexDirection:'column', width: "100%" }}>
      <MDBTypography tag="p" className='mb-0'>
        <abbr title='HyperText Markup Language' style={{color:'red', fontSize:'2rem'}} className='initialism lead mb-0 text-color-danger'>
          About Us
        </abbr>
      </MDBTypography>
        <Card
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            flexWrap:'wrap'
          }}
        >
          <Box className='about-box' sx={{  }}>
            <CardContent sx={{ display:'flex', flexDirection: "column", gap:'2rem' }}>
            <MDBTypography tag='div' style={{fontSize:'2.5rem',fontWeight:'900' ,color:'navy'}} className=''>
            We are the best-in-class products & solutions
      </MDBTypography>
      <MDBTypography tag='div' style={{fontSize:'1.6rem', color:''}} className=''>
      We are attentive to the wishes of the customer, we always comply with set real terms.      </MDBTypography>
              <MDBTypography note noteColor='success'>
              When developing a house project, specialists carefully work out the space, especially attentive to natural lighting. The main distinguishing The price of houses decorated in high-tech style is not the lowest, but they have a lot of positive qualities. Our company offers you quality services for the design.
      </MDBTypography>
            </CardContent>
          </Box>
          <Box>
          <CardMedia
            component="img"
            sx={{ width: "90%", height: "100%",objectFit:'contain' }}
            image="https://wasimmia.github.io/bildhub/img/bg/about-bg.png"
          />
          </Box>
          
        </Card>
        
       
      </MDBCard>
<MDBCard style={{width:'100%'}}>
<div  style={{display:'flex',flexDirection:'column', alignItems:'center',justifyContent:'center'}} >
        <MDBTypography tag="p" className='m-0'>
        <abbr title='HyperText Markup Language' style={{color:'red', textAlign:'center', fontSize:'2rem'}} className='initialism lead mb-0 text-color-danger'>
        EXPLORE THE FEATURES
        </abbr>
      </MDBTypography>


      <MDBCardGroup>
      <MDBCard style={{height:'25rem' ,objectFit:'cover'}}>
        <MDBCardImage style={{height:'18rem' ,objectFit:'cover'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4-yHgMfM0Urd8UI0oPik9rquthn2IKB4Dw&usqp=CAU' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle style={{color:'magenta'}}>INTERIOR DESIGN</MDBCardTitle>
          <MDBCardText>
          Rorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incutey.
          </MDBCardText>
        </MDBCardBody>
       
      </MDBCard>

      <MDBCard style={{height:'25rem' ,objectFit:'cover'}}>
        <MDBCardImage style={{height:'18rem' ,objectFit:'cover'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS4nshTSpFx3pFFa1Q1EXezFdn8w9fyJWoqQ&usqp=CAU' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle style={{color:'magenta'}}>HOMECONSTRUCTION</MDBCardTitle>
          <MDBCardText>
          No matter what your dream home looks like, we can help bring it to life.

We build architecturally designed single and multi-storey homes.

                  </MDBCardText>
        </MDBCardBody>
       
      </MDBCard>
      <MDBCard style={{height:'25rem' ,objectFit:'cover'}}>
        <MDBCardImage style={{height:'18rem' ,objectFit:'cover'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS4nshTSpFx3pFFa1Q1EXezFdn8w9fyJWoqQ&usqp=CAU' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle style={{color:'magenta'}}>APARTMENT CONSTRUCTION</MDBCardTitle>
          <MDBCardText>
          We work with many clients to transform their home into something amazing! Two of the biggest renovations requested we see is for bathrooms and kitchens. 
                  </MDBCardText>
        </MDBCardBody>
       
      </MDBCard>
      <MDBCard style={{height:'25rem' ,objectFit:'cover'}}>
        <MDBCardImage style={{height:'18rem' ,objectFit:'cover'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbIIMuSmZOCev3QNshnAzjqsxM1ZX-m7Z0Fw&usqp=CAU' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle style={{color:'magenta'}}>BUILDING RENOVATIONS</MDBCardTitle>
          <MDBCardText>
          We’re skilled in both single and two-storey extensions, along with façade and exterior upgrades. We can even assist with heritage restorations along with studio or commercial space builds.
          </MDBCardText>
        </MDBCardBody>
        
      </MDBCard>
    </MDBCardGroup>
        </div>
      
</MDBCard>

<div className="main-card-page">
  <h2 style={{textAlign:'center'}}>Client <span style={{color:'blueviolet'}}> Testimonials</span> </h2>
  <div className="about-cards-test">
  <MDBCard className="test-card">
      <MDBCardBody>
        <MDBCardTitle><FaQuoteLeft/></MDBCardTitle>
        <MDBCardText>
        We would like to thank you and your team for the high quality work achieved in building our family home. It has been a pleasure working with you and your trades, combining hard work and a positive "can do" atmosphere. We love our new home!
     </MDBCardText>
       John
        <MDBCardTitle><FaQuoteRight/></MDBCardTitle>

      </MDBCardBody>
    </MDBCard>
    <MDBCard className="test-card">
      <MDBCardBody>
        <MDBCardTitle><FaQuoteLeft/></MDBCardTitle>
        <MDBCardText>
        A huge thank you to the Edyche
Builders Constructions team when building our new home. After speaking with you, we knew what we could expect without smoke & mirrors or hidden costs. Your attention to detail was relieving for us both, and your experience and knowledge was invaluable when it come to our design decisions. In the end, we received a bespoke built home, constructed in a timely fashion, without conflict or stress on our part. Thank you!
     </MDBCardText>
       Allan Othiambo
        <MDBCardTitle><FaQuoteRight/></MDBCardTitle>

      </MDBCardBody>
    </MDBCard>
    <MDBCard className="test-card">
      <MDBCardBody>
        <MDBCardTitle><FaQuoteLeft/></MDBCardTitle>

        <MDBCardText>
        Throughout the project Edyche
Builders Constructions has performed exceptionally well, demonstrating at all times a dedicated and professional attitude, completing the works in an efficient and timely manner with excellent quality of work.
     </MDBCardText>
     D Andren
        <MDBCardTitle><FaQuoteRight/></MDBCardTitle>

      </MDBCardBody>
    </MDBCard>
    <MDBCard className="test-card">
      <MDBCardBody>
        <MDBCardTitle><FaQuoteLeft/></MDBCardTitle>
        <MDBCardText>
        I found Edyche
Builders attention to detail was particularly good, with fine detailing for all timber components. The subcontracting trades appeared to be working well together ... I will be inviting Jason to be a potential tenderer / builder in any future residential projects I design in the local area.
     </MDBCardText>
     S Gorrell
        <MDBCardTitle><FaQuoteRight/></MDBCardTitle>

      </MDBCardBody>
    </MDBCard>
    <MDBCard className="test-card">
      <MDBCardBody>
        <MDBCardTitle><FaQuoteLeft/></MDBCardTitle>
        <MDBCardText>
        From the initial contact the Edyche
Builders Constructions team went above and beyond. Their quoting system was thorough and transparent. When onsite, the team and subcontractors left our home clean and tidy throughout the build. We were informed on a daily basis when the next trades were arriving and what we needed to be prepared for. The quality of work performed is of a premium standard and no request was too hard no matter how outside the "normal" it was. 
     </MDBCardText>
       Mr Robert
        <MDBCardTitle><FaQuoteRight/></MDBCardTitle>

      </MDBCardBody>
    </MDBCard>
  </div>
  
</div>
    </div>
  );
};

export default About;
