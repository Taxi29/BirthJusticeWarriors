import React from "react";

const Founders = () => {
  return (
    <div className="page-content">
      <div className="founders-container">
        <h2 className="section-heading">Our Founders</h2>

        <div className="founder-section">
          <div className="founder-card">
            <div className="founder-content">
              <div className="founder-image">
                <img
                  src="/Media/Event_Photos/MH headshot_5.jpg"
                  alt="Dr. Martine Hackett"
                />
              </div>
              <div className="founder-text">
                <h3 className="founder-name">Dr. Martine Hackett</h3>
                <p className="founder-bio">
                  Martine Hackett is an associate professor in the public health
                  and community health programs at Hofstra University. Her
                  research interests include maternal-child health, health
                  equity, suburban public health and community-based research.
                  Her previous work experience is as a deputy director at the
                  NYC Department of Health and as a television producer. Dr.
                  Hackett is the Vice Chair of the Nassau County Perinatal
                  Services Network. She received her Master of Public Health
                  from Hunter College and a doctorate in sociology from the City
                  University of New York Graduate Center.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className="founder-divider" />

        <div className="founder-card">
          <div className="founder-section">
            <div className="founder-content">
              <div className="founder-image">
                <img
                  src="/Media/Event_Photos/nellie-photo.jpg"
                  alt="Dr. Nellie Taylor Walthrust"
                />
              </div>
              <div className="founder-text">
                <h3 className="founder-name">Dr. Nellie Taylor Walthrust</h3>
                <p className="founder-bio">
                  Rev., Dr. Nellie Walthrust has served over forty years as a
                  Credential Counselor who specializes in the treatment of
                  children and families that have been impacted by substance use
                  and abuse. She is a founding member and chairperson of the
                  Nassau County Faith Alliance, a faith-based initiative
                  committed to reducing high infant mortality rates and low
                  birth weight babies in the African American communities of
                  Nassau County. For the past 28 years, she has been employed at
                  North Shore Child/Family Guidance Center, the leading children
                  mental health treatment agency on Long Island.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
