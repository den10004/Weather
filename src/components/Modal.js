
import '../styles/Blocks/Modal/Modal.css'


function Modal({isOpened, setModal}) {

    

    return (
       
          <div className={`Modal ${isOpened ? 'open' : 'close'}`}>
           {/*   <button onClick={() => setModal(false)}>Закрыть</button>
              <button className="Modal__date">q</button>
              <button className="Modal__date">q</button>
              <button className="Modal__date">q</button>
              <button className="Modal__date">q</button>
    <button className="Modal__date">q</button>*/}
          </div>
    
       
         
    );
  }
  
  
  export default Modal;