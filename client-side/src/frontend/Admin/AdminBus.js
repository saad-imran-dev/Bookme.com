import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import "./Admin.css";
import BusTicket from "../Home/BusTicket";
import CreateModal from "./CreateModal";
import UpdateModal from "./UpdateModal";
import axios from "axios";
export default function AdminBus() {
  const [input, setInput] = useState({
    date: "",
  });
  const [cookies] = useCookies(["admin"])
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState({
    key: 0,
    show: false,
  });

  // API call for getting tickets info using modal.key
  useEffect(() => {
    console.log(cookies.admin)
    // console.log(cookies.admin.username)
    axios.post("http://localhost:5001/admin/getDataBus", {
      id : "admin",
    }).then((response) => {
      console.log(response) //response.data is the array of the buses received from the database
    }).catch((error) => {
      console.log(error)
    })
  }, []);
  //Buses data received from API successfully


  var result = [
    {
      key: 42069,
      pickup: "Karachi",
      arrival: "Lahore",
      date: "05-10-2023",
      pickup_time: "10:00 AM",
      arrival_time: "03:45 PM",
      seats: 50,
      left: 33,
      price: 7999,
    },
    {
      key: 42069,
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

  function handleChange(e) {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function handleCreate() {
    setShow(true);
  }

  return (
    <div className="admin-service">
      <CreateModal
        show={show}
        setShow={setShow}
        event={"bus"}
      />
      <UpdateModal
        event={"cricket"}
        modal={modal}
        setModal={setModal}
      />
      <div className="admin-title">Bus Tickets</div>
      <div className="admin-body">
        <div className="admin-search">
          <input
            className="admin-inp"
            type="date"
            name="date"
            id="date"
            onChange={handleChange}
            value={input.date}
          />
          <button
            className="admin-inp admin-btn"
            onClick={handleCreate}
          >
            Create
          </button>
        </div>
        <div className="admin-results">
          {result.map((item) => {
            return (
              <BusTicket
                info={item}
                isticket={false}
                isupdate={true}
                setModal={setModal}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
