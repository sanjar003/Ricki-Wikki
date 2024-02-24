import React from "react";
import { useState, useRef} from "react";
import Modal from "react-modal";

function App() {
  let [showModal, setShowModal] = useState(false);
  let deleteFunc = useRef(null)
  let [modal, setModal] = useState(["teks1", "teks2"]);

  return (
    <div className="App">
      {modal.map((item,index) => (
        <div
          onClick={() => {
            setShowModal(true);
             deleteFunc.current= () => {
              let newModal = [...modal]
              newModal.splice(index, 1)
              setModal(newModal)
             }
          }}
          key={item}>{item}</div>
      ))}

      <Modal
        ariaHideApp={false}
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        вы уверны?
        <button onClick={() => {
          if(deleteFunc.current){
            deleteFunc.current();
            setShowModal(false)
          }
        }}>да</button>
        <button onClick={() => setShowModal(false)}>нет</button>
      </Modal>
    </div>
  );
}

export default App;
