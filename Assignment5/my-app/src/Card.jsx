import React, { useState } from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    width: 400,
  },
};

const Card = (props) => {
  let img_src = "https://picsum.photos/200";
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="cardT">
      <img src={img_src} alt="" />
      <h2>Name : {props.name}</h2>
      <h2>Birth Year : {props.birth_year}</h2>
      <button onClick={setModalOpen}>More Details</button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
      >
        <div className="cardT">
          <h2>Name : {props.name}</h2>
          <h2>Birth Year : {props.birth_year}</h2>
          <h2>Mass : {props.mass}</h2>
          <h2>Gender : {props.gender}</h2>
          <h2>Hair Color : {props.hair_color}</h2>
          <h2>Skin Color : {props.skin_color}</h2>
          <button onClick={() => setModalOpen(false)}>Close</button>
        </div>

      </Modal>
    </div>
  );
};

export default Card;
