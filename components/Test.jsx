import React, {useState} from 'react';
import Modal from "./modal";
import useModal from './useModal';

const Test = () => {
  const [isModalOpen,
    toggleModal] = useState(false);
  return (
    <React.Fragment>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={() => toggleModal(!isModalOpen)}>Toggle Modal</button>
        <Modal isOpen={isModalOpen} toggle={toggleModal}>
          <h1>test</h1>
          <p>Other text that describes what is happening</p>
          <button onClick={() => toggleModal(false)}>toggle</button>
        </Modal>
      </div>
    </React.Fragment>
  )

}
export default Test;