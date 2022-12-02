import React, { useState, useEffect } from 'react';
import Modal from '../modal/Modal';
import Loader from '../loader/Loader';
import './flightList.css';

const FlightList = () => {
  const [flights, setFlights] = useState([]);
  const [modalStatus, setModalStatus] = useState(false);
  const [current, setCurrent] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchFlights = async () => {
    fetch('https://api.spacexdata.com/v3/launches')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFlights(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  return (
    <>
      {loading === true ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <div className="flight-list my-5">
          {flights.map((data) => (
            <>
              <div
                className="card my-2"
                key={data.flight_number}
                onClick={() => {
                  setModalStatus(true);
                  setCurrent(data);
                }}
              >
                <div className="card-body">
                  <div className="name">
                    {data.flight_number} . {data.mission_name}
                  </div>
                  <div className="date">{data.launch_year}</div>
                </div>
              </div>
            </>
          ))}
        </div>
      )}
      {modalStatus && <Modal closeModal={setModalStatus} current={current} />}
    </>
  );
};

export default FlightList;
