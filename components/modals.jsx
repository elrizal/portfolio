import  React  from 'react';
import ReactDOM from 'react-dom'

const ToggleContent = ({ toggle, content }) => {
    const [isShown, setIsShown] = React.useState(false);
    const hide = () => setIsShown(false);
    const show = () => setIsShown(true);
    return (
      <React.Fragment>
        {toggle(show)}
        {isShown && content(hide)}
      </React.Fragment>
    );
  }
  
  const Modal = ({ children }) => (
    ReactDOM.createPortal(
      <div className="modal">
        {children}
        -----
      </div>,
      document.getElementById('modal-root')
    )
  );
  
  const Modals = () => (
    <p>
      <ToggleContent
        toggle={show => <button onClick={show}>Open</button>}
        content={hide => (
          <Modal>
            There is no spoon.<br/>
            <button onClick={hide}>Close</button>
          </Modal>
                      
        )}
      />
    </p>
  );
 export default Modals
  