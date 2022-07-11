import React from "react";
import Footer from "../../components/footer/Footer";
import "./Recruitment.css";

const Recruitment = () => {
  return (
    <>
      <div className="container recruitment">
        <div className=" recruitmentTop">
          <h3 className="text-center">Recruitment</h3>
        </div>
        {/* recruitment data */}
        <div className="recruitmentData mt-5">
          <div className="recrumentText">
            <p>
              When we speak of the recruitment process, we immediately think of
              activities such as the analysis of the requirements of a specific
              job, attracting candidates to apply for that job, screening the
              applicants and selecting among them, hiring the chosen candidates
              to become new employees of the organization, and integrating them
              into the structure. <br />
              Obviously, the main reason why the recruitment process is
              implemented is to find the persons who are best qualified for the
              positions within the company, and who will help them towards
              attaining organizational goals. 
            </p>
          </div>
          {/* recruitmentData contant */}
          <div className="row">
            <div className="col-md-6 recruitmentData">
              <h3 className="text-center">RECRUITMENT SERVICES</h3>
              <p>
                It is now time for you to work on the{" "}
                <strong>finest offshore recruitment services</strong>, which can
                easily save some of your time and earned money. You just have to
                pay us minimal amount, for the best response, and you are even
                free from spending any money in recruiting new labours for your
                in-house service. Another reason to outsource services is that
                we are well-acquainted with the best candidates, rightful for
                your company’s growth.
                <strong>elp you to make the right decision,</strong> when it is
                related to offshore recruitment, and finding the best team for
                your firm’s official growth.
              </p>
            </div>
            <div className="col-md-6 recruitmentData">
              <h3 className="text-center">OFFSHORE RECRUITMENT</h3>
              <p>
                Offshore recruitment can be done both by hiring through a local
                offshore recruitment agency or through an onsite office in a
                foreign country. The latter is more expensive, but it allows you
                to have more control over your operations and it also provides a
                better employee retention rate. <br />
                We have been associated with the service of offshore recruitment
                for years. So, we are practically well-acquainted with the{" "}
                <strong>best candidates and official responses,</strong> of all
                time. Another important service is that offshore companies are
                always likely to provide you with the best packages, in town.
                Therefore, no matter whatever is the case, you are always going
                to receive the best package from our side, and within your set
                rates.
              </p>
            </div>
            <div className="col-md-12 recruitmentData">
              <h3 className="text-center">OFFSHORE RECRUITMENT</h3>
              <p>
                We will always ask you to choose us for your finest offshore
                recruitment services, and we will never let you down. As we have
                been associated with this field for years, therefore; providing
                profitable services is not a matter of difficulty from our side.{" "}
                <strong>
                  We are always glad to offer quality services for you.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
};

export default Recruitment;
