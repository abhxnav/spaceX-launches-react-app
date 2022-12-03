import React from 'react';
import './modal.css';

const Modal = ({ closeModal, current }) => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="title-close-btn">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>{current.mission_name}</h1>
        </div>
        <div className="body my-3">
          <div>
            <span className="bold">Launch Date : </span>
            <span className="normal">
              {new Date(current.launch_date_utc).toString()}
            </span>
          </div>
          <div>
            <span className="bold">Rocket ID : </span>
            <span className="normal">
              {current.rocket.rocket_id ? current.rocket.rocket_id : ''}
            </span>
          </div>
          <div>
            <span className="bold">Rocket Name : </span>
            <span className="normal">
              {current.rocket.rocket_name ? current.rocket.rocket_name : '-'}
            </span>
          </div>
          <div>
            <span className="bold">Rocket Type : </span>
            <span className="normal">
              {current.rocket.rocket_type ? current.rocket.rocket_type : '-'}
            </span>
          </div>
          <div>
            <span className="bold">Launch Site : </span>
            <span className="normal">
              {current.launch_site.site_name
                ? current.launch_site.site_name
                : '-'}
            </span>
          </div>
          <div>
            <span className="bold">Status : </span>
            <span className="normal">
              {current.launch_success
                ? current.launch_success === false
                  ? 'Fail'
                  : 'Success'
                : '-'}
            </span>
          </div>
        </div>
        <div className="footer">
          <div>
            {current.links.wikipedia && (
              <a href={current.links.wikipedia.toString()} target='_blank'>
                <i className="fa-brands fa-wikipedia-w"></i>
              </a>
            )}
          </div>
          <div>
            {current.links.video_link && (
              <a href={current.links.video_link.toString()} target='_blank'>
                <i className="fa-brands fa-youtube"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
