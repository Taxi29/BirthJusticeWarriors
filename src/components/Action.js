import React from "react";

const Action = () => {
  const events = [
    {
      image: "/Media/Event_Photos/MetroFocus.jpg",
      caption: "Nellie and Martine on PBS Metro Focus",
    },
    {
      image: "/Media/Event_Photos/2ndBreakfast.jpg",
      caption: "Our Second Birth Equity Breakfast",
    },
    {
      image: "/Media/Event_Photos/Solanges.png",
      caption: "Martine's interview with Assemblywoman Michaelle Solages",
    },
    {
      image: "/Media/Event_Photos/MartineWithSenator.jpg",
      caption:
        "With United States Senator Kirsten Gillibrand (NY) advocating for funding",
    },
    {
      image: "/Media/Event_Photos/Hakima.jpg",
      caption: "Birth Equity Breakfast guest speaker, Mama Hakima",
    },
    {
      image: "/Media/Event_Photos/CovidConcerns.jpg",
      caption: "Birth Equity and COVID event",
    },
    {
      image: "/Media/Event_Photos/NellieBreakfast.jpg",
      caption: "Nellie at the First Birth Equity Breakfast",
    },
    {
      image: "/Media/Event_Photos/befunky-collage-4-1.jpg",
      caption: "BLack Breastfeeding Week event in Uniondale, NY",
    },
    {
      image: "/Media/Event_Photos/TwoTables.jpg",
      caption: "Tabling in the Community",
    },
    {
      image: "/Media/Event_Photos/birth-justice-warriors-2019-1.jpg",
      caption: "The 2019 Cohort of Birth Justice Warriors",
    },
    {
      image: "/Media/Event_Photos/NellieBabyGoods.jpg",
      caption:
        "Baby Goods Drive for Good Beginnings for Babies in Westbury, NY",
    },
    {
      image: "/Media/Event_Photos/CircleTalk.jpg",
      caption: "Community Conversation event in Uniondale, NY",
    },
    {
      image: "/Media/Event_Photos/ClassroomPict.jpg",
      caption: "Birth Justice Warrior training session, 2018",
    },
    {
      image: "/Media/Event_Photos/d4da013a-4cae-49da-ac8e-552e154166d0.jpg",
      caption: "Tabling in the Community",
    },
    {
      image: "/Media/Event_Photos/f46c0efd-5480-45a8-b0e1-6aa472f53f23.jpg",
      caption: "Tabling in the Community",
    },
    {
      image: "/Media/Event_Photos/hackettnellie.jpg",
      caption: "Nellie and Martine on the Well Said radio show",
    },
    {
      image: "/Media/Event_Photos/HofstraSummit.jpg",
      caption: "Second Birth Equity Breakfast",
    },
    {
      image: "/Media/Event_Photos/img_20181024_133955-1.jpg",
      caption: "Training Nurse Family Partnership nurses",
    },
    {
      image: "/Media/Event_Photos/mainphoto.jpg",
      caption: "First cohort of Birth Justice Warriors, 2018",
    },
    {
      image: "/Media/Event_Photos/MartineTeaching.png",
      caption: "Martine at Women's Diversity Network event",
    },
    {
      image: "/Media/Event_Photos/DigitalStory-1.jpg",
      caption: "Caption coming soon",
    },
    {
      image: "/Media/Event_Photos/screen-shot-2022-04-19-at-2.36.43-am.png",
      caption: "Mythbusters event at Hofstra University",
    },
    {
      image: "/Media/Event_Photos/MythGroupSession.jpg",
      caption: "Meet the Midwife event at Hofstra University",
    },
    {
      image: "/Media/Event_Photos/StagePanel.jpg",
      caption: "Panel Discussion of the documentary Aftershock",
    },
    {
      image: "/Media/Event_Photos/BreastfeedingWeek.jpg",
      caption: "Caption coming soon",
    },
    {
      image: "/Media/Event_Photos/10-03 AH Birth Justice-Pg-1_Page_1.jpg",
      caption: "Caption coming soon",
    },
    {
      image: "/Media/Event_Photos/10-03 AH Birth Justice-Pg-1_Page_2.jpg",
      caption: "Caption coming soon",
    },
    {
      image: "/Media/Event_Photos/USNews-1_Page_1.jpg",
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
