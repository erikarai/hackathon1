import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer() {
  return (
    <>
      <MDBFooter className="bg-dark text-center text-white">
        <MDBContainer className="p-4 pb-0">
          <section className="mb-4">
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://www.facebook.com/IncedoInc?mibextid=ZbWKwL"
              role="button"
            >
              <MDBIcon fab icon="facebook" />
            </MDBBtn>

            {/* <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn> */}

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://www.incedoinc.com/"
              role="button"
            >
              <MDBIcon fab icon="google" />
            </MDBBtn>
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://instagram.com/incedoinc?igshid=MmU2YjMzNjRIOQ"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://www.linkedin.com/company/incedo-inc/"
              role="button"
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright

        </div>
      </MDBFooter>
      
    </>
  );
}

export default Footer;
