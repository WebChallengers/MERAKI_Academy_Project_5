import React, { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import UserProducts from "./userProductRender";
import "./profile.css"


const ProfileModal = () => {
  const [modalShower, setModalShower] = useState(false);
  const switchModalTrue = () => {
    setModalShower(true);
  };
  const switchModalfalse = () => {
    setModalShower(false);
  };
  return (
    <div>
      <br/>
      <button className="showbutton" onClick={switchModalTrue}>Show your products</button>
      <Modal isOpen={modalShower}>
        <br/>
        <button className="profileclosebutton" onClick={switchModalfalse}>x</button>
        <br />
        <UserProducts/>{" "}
      </Modal>
    </div>
  );
};
export default ProfileModal;
