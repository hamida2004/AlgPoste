import React, { useState } from "react";
import CustomTitle from "../components/CustomTitle";
import CustomSubtitle from "../components/CustomSubtitle";
import { CustomParagraph } from "../components/CustomParagraph";
import CustumText from "../components/CustumText";
import { colors } from "../asstes/styles";
import Contact from "../components/Contact";
import styled, { keyframes } from "styled-components";
import { FaQuestion } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import CustomInput from "../components/CustomInput";
import CustomBtn from "../components/CustomBtn";
const Accueil = () => {
  const [show, setShow] = useState(false);
  const news = [
    {
      title: "Tech Giants Announce Major Merger",
      time: "2024-11-30T10:00:00Z",
      content:
        "Two of the largest tech companies in the world announced today a groundbreaking merger that is expected to reshape the industry.",
    },
    {
      title: "Global Climate Summit Highlights",
      time: "2024-11-30T08:30:00Z",
      content:
        "Leaders from around the world gathered to discuss urgent actions needed to combat climate change, emphasizing renewable energy investments.",
    },
    {
      title: "Breakthrough in AI Technology",
      time: "2024-11-29T16:45:00Z",
      content:
        "Researchers have unveiled a new AI model that surpasses human performance in language translation, raising both excitement and ethical concerns.",
    },
    {
      title: "Stock Markets See Record Highs",
      time: "2024-11-29T14:20:00Z",
      content:
        "Global stock markets soared to record highs today, driven by optimism over economic recovery and strong corporate earnings.",
    },
    {
      title: "Historic Space Mission Launched",
      time: "2024-11-28T22:10:00Z",
      content:
        "A new international space mission has launched, aiming to explore distant planets and gather unprecedented data about our universe.",
    },
    {
      title: "New Health Guidelines Released",
      time: "2024-11-28T09:00:00Z",
      content:
        "Health experts have issued updated guidelines to promote wellness, focusing on balanced diets, mental health, and regular physical activity.",
    },
    {
      title: "Art Exhibition Draws Record Crowds",
      time: "2024-11-27T19:30:00Z",
      content:
        "An extraordinary art exhibition showcasing rare masterpieces has captivated audiences, with record-breaking attendance reported.",
    },
    {
      title: "Revolutionary Electric Car Unveiled",
      time: "2024-11-27T11:15:00Z",
      content:
        "A leading automaker has revealed its latest electric car model, boasting a range of over 1,000 kilometers and cutting-edge features.",
    },
    {
      title: "Tech Startups Thrive in Emerging Markets",
      time: "2024-11-26T13:50:00Z",
      content:
        "Emerging markets are seeing a surge in innovative tech startups, driving economic growth and transforming industries.",
    },
    {
      title: "Advances in Renewable Energy Storage",
      time: "2024-11-26T07:40:00Z",
      content:
        "Scientists have developed a groundbreaking battery technology that could revolutionize renewable energy storage and usage.",
    },
  ];
  const webinars = [
    {
      title: "Introduction to React",
      content:
        "Learn the basics of React, including components, state, and props.",
      mentor: "Jane Doe",
      time: "2024-12-01T10:00:00Z",
      googleMeetLink: "https://meet.google.com/xyz-abc-def",
    },
    {
      title: "Advanced JavaScript Concepts",
      content:
        "Explore advanced topics like closures, event loops, and async programming.",
      mentor: "John Smith",
      time: "2024-12-05T14:00:00Z",
      googleMeetLink: "https://meet.google.com/def-ghi-jkl",
    },
    {
      title: "UI/UX Design Best Practices",
      content:
        "Discover how to create user-friendly interfaces and improve user experience.",
      mentor: "Emily Johnson",
      time: "2024-12-10T16:00:00Z",
      googleMeetLink: "https://meet.google.com/uvw-xyz-abc",
    },
    {
      title: "Deploying Web Applications",
      content:
        "Learn how to deploy web apps using popular tools like Docker and AWS.",
      mentor: "Michael Brown",
      time: "2024-12-12T12:00:00Z",
      googleMeetLink: "https://meet.google.com/mno-pqr-stu",
    },
    {
      title: "Machine Learning for Beginners",
      content:
        "An introduction to machine learning concepts and tools like Python and TensorFlow.",
      mentor: "Sophia Martinez",
      time: "2024-12-15T18:00:00Z",
      googleMeetLink: "https://meet.google.com/abc-def-ghi",
    },
  ];
  const vibrate = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(1px, -1px); }
  100% { transform: translate(0, 0); }
`;
  const Circle = styled.div`
    transform: translate(0, 0);
    padding: 8px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    border-radius: 30px;
    background-color: ${colors.blue};
    box-shadow: 0px 0px 4px ${colors.blue};
    position: fixed;
    bottom: 40px;
    right: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${vibrate} 0.2s linear infinite; /* Adjust duration as needed */
  `;
  const NewsContainer = ({ title, content, time }) => {
    return (
      <div
        style={{
          padding: 20,
          paddingBottom: 40,
          borderRadius: 16,
          boxShadow: `0px 2px 4px ${colors.blue}`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 20,
          position: "relative",
        }}
      >
        <CustomSubtitle content={title} />
        <CustomParagraph content={content} />
        <CustomParagraph
          content={"12:34"}
          style={`
           position: absolute;
            bottom: 10px;
            right: 10px;
  `}
        />
      </div>
    );
  };

  const Modal = () => {
    return (
      <div
        style={{
          width: 400,
          height: "70vh",
          backgroundColor: colors.white,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          boxShadow: `0px 0px 4px ${colors.blue}`,
          display: "flex",
          gap: 20,
          padding: 40,
          position: "fixed",
          bottom: 0,
          right: 0,
          zIndex: 676,
          alignItems: "baseline",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            padding: 20,
          }}
        >
          <CustomSubtitle
            content={"Chaque question compte, faites-la entendre !"}
          />
          <IoClose
            color={colors.red}
            size={24}
            onClick={() => {
              setShow(false);
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 16,
            width: "100%",
            padding: 20,
          }}
        >
          <CustomInput placeHolder={"Posez votre question ici! "} />
          {/* <p>smth</p> */}
          <CustomBtn content={"submit"} />
        </div>
      </div>
    );
  };
  const WebinarsContainer = ({ title, content, time, mentor, link }) => {
    return (
      <div
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 20,
          position: "relative",
          borderColor: colors.blue,
          borderBottomWidth: 2,
          borderBottomStyle: "solid",
          borderBottomLeftRadius: 1,
          borderBottomRightRadius: 1,
        }}
      >
        <CustomSubtitle content={title} />
        <CustomParagraph content={content} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <CustomSubtitle content={mentor} />
          <a
            href={link}
            style={{
              textDecoration: "none",
            }}
          >
            <CustomSubtitle content={"Link"} />
          </a>
          <CustomSubtitle content={time} />
        </div>
        <Contact />
      </div>
    );
  };
  return (
    <div
      className="container"
      style={{
        gap: 20,
      }}
    >
      <CustomSubtitle
        content={"Reste informer des actualites que vous interesse :"}
      />
      <CustomTitle content={"Actualites :"} />
      <div
        style={{
          gap: 40,
          display: "flex",
          width: "100%",
        }}
      >
        {/* <Navbar /> */}
        <div className="half">
          <CustumText content={"News"} width={"200px"} />
          {news.map((news, i) => {
            return (
              <NewsContainer
                key={i}
                title={news.title}
                content={news.content}
                time={news.time}
              />
            );
          })}
        </div>
        <div className="half">
          <CustumText content={"Webinars"} />
          {webinars.map((webinar, i) => {
            return (
              <WebinarsContainer
                key={i}
                title={webinar.title}
                content={webinar.content}
                mentor={webinar.mentor}
                time={webinar.time}
                link={webinar.googleMeetLink}
              />
            );
          })}
        </div>
        {!show && (
          <Circle onClick={() => setShow(true)}>
            <FaQuestion color={colors.yellow} size={24} />
          </Circle>
        )}
        {show && <Modal />}
      </div>
    </div>
  );
};

export default Accueil;
