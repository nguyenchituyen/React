import React, { useEffect, useRef, useState } from 'react';
import './Dialog.css';

export const Modal = ({children, visible}) => {
  const dialogRef = useRef();

  useEffect(() => {
    if(visible) {
      show();
    } else {
      hide();
    }
  }, [visible])

  const show = () => {
      dialogRef.current.showModal();
  }
  const hide = () => {
    dialogRef.current.close();
  }

    return (
      <dialog className="dialog" ref={dialogRef}>
          {children}
      </dialog>
  );
};

const Demo = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () =>  setVisible(true);
  const hideModal = () =>  setVisible(false);


  return (
    <div>
      <section>
        <nav role="navigation">
            <button type="button" onClick={() => showModal()} className="btn">
              Open React Dialog
            </button>
        </nav>
        <Modal visible={visible}>
            <h3 className="dialog__title">
                React Dialog
            </h3>
            <p className="dialog__txt">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <button onClick={hideModal} type="button" className="btn btn--close dialog__btn">
                Close
            </button>
        </Modal>
    </section>
    </div>
  );
}

export default Demo;
