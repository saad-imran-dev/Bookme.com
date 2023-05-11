import { useState } from "react";

import "../Home/Home.css";
import "./User.css";
import BusTicket from "../Home/BusTicket";
import CricketTicket from "../Home/CricketTicket";
import QRModal from "./QRModal";

export default function MyTickets() {
  const [event, setEvent] = useState("bus");
  const [modal, setModal] = useState({
    key: 0,
    show: false,
  });

  var myCricketTickets = [
    {
      key: 3,
      team1: "Pakistan",
      team2: "New Zealand",
      team1_img:
        "https://bookmepk.s3.eu-central-1.amazonaws.com/static/cricket/storage/teams/PAK%20Logo.png",
      team2_img:
        "https://bookmepk.s3.eu-central-1.amazonaws.com/static/cricket/storage/teams/new-zealand.png",
      time: "3:30 PM",
      date: "05-05-2023",
      venue: "National Bank Stadium",
      city: "Karachi",
    },
  ];

  var myBusTickets = [
    {
      key: 69420,
      pickup: "Karachi",
      arrival: "Lahore",
      date: "05-10-2023",
      pickup_time: "10:00 AM",
      arrival_time: "03:45 PM",
      seats: 50,
      left: 33,
      price: 7999,
    },
  ];

  function handleClick(e) {
    setEvent(e.target.id);
  }

  return (
    <div
      className="home-wrapper"
      style={{ paddingTop: "10px" }}
    >
      <QRModal
        modal={modal}
        setModal={setModal}
      />
      <div className="title ticket-title">My Tickets</div>
      <div className="ticket-label">
        <div
          id={"bus"}
          className="service-tag ticket-event"
          onClick={handleClick}
        >
          Bus
        </div>
        <div
          id={"cricket"}
          className="service-tag ticket-event"
          onClick={handleClick}
        >
          Cricket
        </div>
      </div>
      <div
        style={{
          width: "100%",
          borderBottom: "1px black solid",
          //   marginLeft: "auto",
          //   marginRight: "auto",
          marginTop: "10px",
          marginBottom: "15px",
        }}
      ></div>
      <div className="result-box tickets">
        {event === "bus" &&
          myBusTickets.map((item) => {
            return (
              <BusTicket
                info={item}
                isticket={true}
                isupdate={false}
                setModal={setModal}
              />
            );
          })}
        {event === "cricket" &&
          myCricketTickets.map((item) => {
            return (
              <CricketTicket
                info={item}
                isticket={true}
                setModal={setModal}
              />
            );
          })}
      </div>
    </div>
  );
}