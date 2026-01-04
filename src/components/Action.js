import React from "react";

const Action = () => {
  const events = [
    {
      image: "/Media/Event_Photos/MetroFocus.jpg",
      caption: "Caption coming soon",
    },
    {
      image: "/Media/Event_Photos/2ndBreakfast.jpg",
      caption: "Caption coming soon",
    },
    {
      image: "/Media/Event_Photos/Solanges.png",
      caption: "Caption coming soon",
    },
    {
      image: "/Media/Event_Photos/MartineWithSenator.jpg",
      caption: "Caption coming soon",
    },
    {
      image: "/Media/Event_Photos/Hakima.jpg",
      caption: "Caption coming soon",
    },
    {
      image: "/Media/Event_Photos/CovidConcerns.jpg",
      caption: "Caption coming soon",
    },
    {
      image: "/Media/Event_Photos/NellieBreakfast.jpg",
      caption: "Caption coming soon",
    },
    {
      image: "/Media/Event_Photos/befunky-collage-4-1.jpg",
      caption: "Caption coming soon",
    },
    {
      image: "/Media/Event_Photos/TwoTables.jpg",
      caption: "Caption coming soon",
    },
    {
      image: "/Media/Event_Photos/birth-justice-warriors-2019-1.jpg",
      caption: "Caption coming soon",
    },
    {
      image: "/Media/Event_Photos/NellieBabyGoods.jpg",
      caption: "Caption coming soon",
    },
    {
      image: "/Media/Event_Photos/CircleTalk.jpg",
      caption: "Caption coming soon",
    },
    {
      image: "/Media/Event_Photos/ClassroomPict.jpg",
      caption: "Caption coming soon",
    },
    {
      image: "/Media/Event_Photos/d4da013a-4cae-49da-ac8e-552e154166d0.jpg",
      caption: "Caption coming soon",
    },
    {
      image: "/Media/Event_Photos/f46c0efd-5480-45a8-b0e1-6aa472f53f23.jpg",
      caption: "Caption coming soon",
    },
    {
      image: "/Media/Event_Photos/hackettnellie.jpg",
      caption: "Caption coming soon",
    },
    {
      image: "/Media/Event_Photos/HofstraSummit.jpg",
      caption: "Caption coming soon",
    },
    {
      image: "/Media/Event_Photos/img_20181024_133955-1.jpg",
      caption: "Caption coming soon",
    },
    {
      image: "/Media/Event_Photos/mainphoto.jpg",
      caption: "Caption coming soon",
    },
    {
      image: "/Media/Event_Photos/MartineTeaching.png",
      caption: "Caption coming soon",
    },
    {
      image: "/Media/Event_Photos/NellieBabyGoods.jpg",
      caption: "Caption coming soon",
    },
    {
      image: "/Media/Event_Photos/screen-shot-2022-04-19-at-2.36.43-am.png",
      caption: "Caption coming soon",
    },
    {
      image: "/Media/Event_Photos/MythGroupSession.jpg",
      caption: "Caption coming soon",
    },
    {
      image: "/Media/Event_Photos/StagePanel.jpg",
      caption: "Caption coming soon",
    },
  ];

  return (
    <div className="page-content">
      <div className="events-container">
        <h2 className="section-heading">Birth Justice In Action</h2>

        <div className="events-grid">
          {events.map((event, index) => (
            <div key={index} className="event-item">
              <div className="event-image">
                <img src={event.image} alt={`Event ${index + 1}`} />
              </div>
              <p className="event-caption">{event.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Action;
