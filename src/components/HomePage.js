import React from "react";

// Photo Row Component (reusable)
const PhotoRow = ({ images, className = "photo-row" }) => {
  return (
    <div className={className}>
      {images.map((img, index) => (
        <img key={index} src={img.src} alt={img.alt} />
      ))}
    </div>
  );
};

// Partner Organizations Component
const PartnerOrganizations = ({ organizations }) => {
  return (
    <div className="partner-organizations">
      {organizations.map((org, index) => (
        <div key={index} className="org-item">
          <span className="org-bullet">•</span>
          <span className="org-name">{org}</span>
        </div>
      ))}
    </div>
  );
};

// Home Page Component
const HomePage = () => {
  const leadPhotos = [
    {
      src: "Media/Stats_Data/birth-equity-breakfast-final-8.jpg",
      alt: "Photo 1",
    },
    {
      src: "Media/Stats_Data/birth-equity-breakfast-final-7.jpg",
      alt: "Photo 2",
    },
    {
      src: "Media/Stats_Data/birth-equity-breakfast-final-6.jpg",
      alt: "Photo 3",
    },
  ];

  const educationPhotos = [
    {
      src: "Media/Event_Photos/NellieBreakfast.jpg",
      alt: "Photo 1",
    },
    {
      src: "Media/Event_Photos/MartineTeaching.png",
      alt: "Photo 2",
    },
    { src: "Media/Event_Photos/StagePanel.jpg", alt: "Photo 3" },
    { src: "Media/Event_Photos/HofstraSummit.jpg", alt: "Photo 4" },
  ];

  const actionPhotos = [
    {
      src: "Media/Event_Photos/d4da013a-4cae-49da-ac8e-552e154166d0.jpg",
      alt: "Photo 1",
    },
    { src: "Media/Event_Photos/befunky-collage-4-1.jpg", alt: "Photo 2" },
    {
      src: "Media/Event_Photos/img_20181024_133955-1.jpg",
      alt: "Photo 3",
    },
    {
      src: "Media/Event_Photos/MythGroupSession.jpg",
      alt: "Photo 4",
    },
  ];

  const partners = [
    "NorthShore Child & Family Guidance",
    "Harmony Healthcare Long Island",
    "Women's Diversity Network",
    "Planned Parenthood of Greater NY",
    "March of Dimes Prematurity Prevention Support",
    "Long Island Community Foundation",
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <img
          className="hero-img"
          src="Media/Event_Photos/mainphoto.jpg"
          alt="Community"
        />
        <div className="hero-text">
          {/* Empty space for hero text if needed */}
        </div>
      </div>

      <div className="wide-paragraph">
        {/* Lead Section */}
        <div className="mission-card">
          <p className="med-paragraph">
            Birth Justice Warriors exists to end the disparity in maternal
            mortality based on zip codes
          </p>
          <PhotoRow images={leadPhotos} className="first-photo-row" />
          <hr />
        </div>
        {/* Title Section */}

        {/* Education Section */}
        <div className="education-card">
          <p className="med-paragraph">
            In 2018, we started educating others that this issue exists in
            Nassau County
          </p>
          <PhotoRow images={educationPhotos} />
          <hr />
        </div>

        {/* Collaboration Section */}
        <div className="collab-card">
          <p className="med-paragraph">
            As attention grew, Birth Justice Warriors partnered with other
            organizations to address this issue
          </p>
          <hr />
          <PartnerOrganizations organizations={partners} />
          <hr />
        </div>

        {/* Action Section */}
        <div className="action-card">
          <p className="med-paragraph">
            We are now addressing maternal and infant mortality in Nassau County
            through ACTION.
          </p>
          <PhotoRow images={actionPhotos} />
          <hr />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
