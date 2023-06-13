import React, { useState, useMemo, useEffect } from "react";
import "../aboutus/AboutPage.css";
import "./Schedule.css";
import header from "./Schedule-header.png";
import inperson from "./in-person.svg";
import virtual from "./virtual.svg";
import ScheduleTable from "./ScheduleTable";

function SchedulePage() {

  useEffect(() => {
    document.title = "Schedule";
  }, []);

  const [inShown, setIsShown] = useState(true);

  const navigateto12 = () => {
    setIsShown(true)
  }

  const navigateto13 = () => {
    setIsShown(false)
  }


  const columns = useMemo(
    () => [
      {
        Header: "Time",
        accessor: "time",
      },
      {
        Header: "Event",
        accessor: "event",
      },
      {
        Header: 'Type',
        accessor: 'type',
      }
    ], []);

  const eventlist12 = useMemo(() => [
    {
      "time": "10:00 AM",
      "event": "Opening Ceremony",
      "type": <img src={virtual} alt="Virtual Event" className="eventStyle" />,
    },
    {
      "time": "10:30 AM",
      "event": "Hacking Starts!",
      "type": <img src={virtual} alt="Virtual Event" className="eventStyle" />,
    },
    {
      "time": "11:00 AM",
      "event": <strong>Workshop: Working in Big Tech</strong>,
      "type": <img src={virtual} alt="Virtual Event" className="eventStyle" />,
    },
    {
      "time": "12:00 PM",
      "event": "Lunch Break",
      "type": "",
    },
    {
      "time": "1:00 PM",
      "event": <strong>Workshop: Understanding Non-Fungible Tokens (NFTs)</strong>,
      "type": <img src={virtual} alt="Virtual Event" className="eventStyle" />,
    },
    {
      "time": "2:00 PM",
      "event": <strong>Workshop: Software Testing</strong>,
      "type": <img src={virtual} alt="Virtual Event" className="eventStyle" />,
    },
    {
      "time": "3:00 PM",
      "event": "In-person Tea Break @ Great Room [MHC Only]",
      "type": <img className="eventStyle" src={inperson} alt="In-person Event" />,
    },
    {
      "time": "4:00 PM",
      "event": <strong>Workshop: What They Don't Tell You About Technical Interviews</strong>,
      "type": <img src={virtual} alt="Virtual Event" className="eventStyle" />,
    },
    {
      "time": "5:00 PM",
      "event": <strong>Workshop: UI/UX & Figma</strong>,
      "type": <img src={virtual} alt="Virtual Event" className="eventStyle" />,
    },
    {
      "time": "6:00 PM",
      "event": "Dinner Break",
      "type": "",
    },
    {
      "time": "7:30 PM",
      "event": <strong>MLH Mini Event: Snyk Capture The Flag</strong>,
      "type": <img src={virtual} alt="Virtual Event" className="eventStyle" />,
    },
    {
      "time": "9:00 PM",
      "event": "Fun Activity: Cup Stacking Game @ Kendade Atrium [MHC Only]",
      "type": <img className="eventStyle" src={inperson} alt="In-person Event" />,
    },
    {
      "time": "10:00 PM",
      "event": "Fun Activity: Skribbl",
      "type": <img src={virtual} alt="Virtual Event" className="eventStyle" />,
    },
  ], []);

  const eventlist13 = useMemo(() => [
    {
      "time": "9:00 AM",
      "event": <strong>Workshop: Organizing A Hackathon</strong>,
      "type": <img src={virtual} alt="Virtual Event" className="eventStyle" />,
    },
    {
      "time": "10:00 AM",
      "event": <strong>Workshop: echo3D Workshop & Tutorial</strong>,
      "type": <img src={virtual} alt="Virtual Event" className="eventStyle" />,
    },
    {
      "time": "11:00 AM",
      "event": <strong>Workshop: Intro to Kubernetes</strong>,
      "type": <img src={virtual} alt="Virtual Event" className="eventStyle" />,
    },
    {
      "time": "12:00 PM",
      "event": "Lunch Break",
      "type": "",
    },
    {
      "time": "1:30 PM",
      "event": "Hacking Ends!",
      "type": "",
    },
    {
      "time": "4:00 PM",
      "event": "Judging Ends",
      "type": "",
    },
    {
      "time": "4:30 PM",
      "event": "Closing Ceremony",
      "type": <img src={virtual} alt="Virtual Event" className="eventStyle" />,
    },

  ], []);

  return (
    <>
      <div className="about-container">
        <img className="header-img" src={header} alt="Header Img" />
      </div>
      <div className="content-container">
        <h4 className="time">All Schedules are subject to change.</h4><br />
        <div className="button-container">
          <div>
            <button onClick={navigateto12} className="twelve">November 12th</button>
            <button onClick={navigateto13} className="thirteen">November 13th</button>
          </div>
          <div>
            <img src={inperson} alt="In-person Event" className="eventStyle" />In-person
            <img src={virtual} alt="Virtual Event" className="eventStyle" />Virtual
          </div>
        </div>
        <hr />
        {inShown ? <ScheduleTable columns={columns} data={eventlist12} /> : <ScheduleTable columns={columns} data={eventlist13} />}
        <hr />

        <h3 className="time">All Schedules are listed in EST (Eastern Standard Time)</h3>

      </div>
    </>

  );
}


export default SchedulePage;
