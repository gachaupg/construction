import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Link } from "react-router-dom";

function Questions() {
  const [state, handleSubmit] = useForm("mrgwzwgj");
  if (state.succeeded) {
    return (
      <p>
        Thanks for Sending ua message! <Link to="/">Return Home</Link>{" "}
      </p>
    );
  }
  return (
    <div>
      <div className="contactheader">
        <h1>Have any questions</h1>
        <p>
          Its a long established fact that a reader will be distracted content
          of page when looking
        </p>
      </div>
      <div className="questionform">
        <form onSubmit={handleSubmit} className="inputcontainer">
          <div className="inputdiv">
            <input className="inputs"  id="name"
        type="name" 
        name="name" placeholder="name" />
           <ValidationError 
        prefix="Name" 
        field="text"
        errors={state.errors}
      />
            <input className="inputs" type="text" placeholder="Lastname" />
          </div>

          <div className="inputdiv">
            <input
              className="inputs"
              id="email"
              type="email"
              name="email"
              placeholder="Email"
            />
            <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
            <input className="inputs" type="text" placeholder="Service" />
          </div>
          <div>
            <div className="inputdiv">
              <textarea
                className="inputs"
                id="message"
                name="message"
                placeholder="Message"
              />
              <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
            </div>
            <div className="inputdiv">
              <button id="btnquestion" className="inputs">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Questions;
