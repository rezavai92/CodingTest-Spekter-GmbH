import React,{useState} from 'react'
import ReactDOM from 'react-dom';




const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
  }
  
  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
  }
  
  export default function Modal({ open, onClose,location,setCurrentLocation }) {

    const [myName,setMyName] =useState("Md. Rezaul Karim");
    if (!open) return null
  

   const  submissionHandler=(event)=>{

    event.preventDefault();
    console.log("Current Location : "+event.currentTarget[0].value+"\nName : "+event.currentTarget[1].value);
    onClose();
   }
    return ReactDOM.createPortal(
      <>
       <div style={OVERLAY_STYLES} />
        <div style={MODAL_STYLES}>
           <form onSubmit={submissionHandler}> 
            <table>
               <tbody>      
                <tr>
                  <td>
                    <label>Location </label>
                  </td>
                  <td>
                     <input id="location" type="text"  defaultValue={`(${location.lat} , ${location.lng})`} />
                  </td>
                </tr>
                <tr>
                  <td>
                  <label>Name</label>
                  </td>
                  <td>
                    <input onChange={(event)=>{setMyName(event.target.value)}} type="text" value={myName} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <button>Submit</button>   
                  </td> 
                  <td>
                   <button onClick={onClose}>Close</button>
                  </td>
                </tr>
               </tbody>
              </table>
        </form> 
        
        </div>
      </>,
      document.getElementById('modal')
    )
  }


/*function MyVerticallyCenteredModal(props) {

    const JSX_MODAL = (
        <div>
        <Modal
        {...props}
        
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
       
        <Modal.Body>
        <Form.Group>
    <Form.Control size="lg" type="text" placeholder="long lat" />
    <br />
    <Form.Control type="text" placeholder="Md. Rezaul Karim" />
    <br />
    
    <Button>Submit to Console</Button>
    </Form.Group>
    
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      </div>
    
    );
    



    return (
       ReactDOM.createPortal(JSX_MODAL,document.querySelector("#modal"))
    );
  }
  
  export default MyVerticallyCenteredModal;
  */