import React,{useState,useEffect} from 'react'
import Modal from './components/modal'
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";

const libraries = ["places"];
const style = {
  height: "100vh",
  width: "100vw",
};


 const App = ()=>{
  const [center,setCenter] =useState({});
  const [currentLocation,setCurrentLocation] = useState({});
  const [modalShow, setModalShow] = useState(false);

   
  useEffect(()=>{

    navigator.geolocation.getCurrentPosition((position)=>{
      setCenter({
        lng: Number(position.coords.longitude),
        lat: Number(position.coords.latitude), 
      })}
      
      ,(err)=>{return err})

  },[])
  

  const markerFormHandler = (event)=>{

    const lng =event.latLng.lng();
    const lat = event.latLng.lat();
    const location={lng,lat};
    setCurrentLocation(location) ;
   
  
  setModalShow(true);  
  
  }


  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libraries,
  });

  if(loadError){
    return "error while loading script";
  }
  if(!isLoaded){
    return "still loading";
  }


  return (
   
     <div>
     <GoogleMap mapContainerStyle={style} zoom={10} center={center} >
     <div style={{marginLeft:"50%" }} >
     <Modal 
      open={modalShow}
      onClose={()=>{setModalShow(false)}}
      setCurrentLocation={setCurrentLocation}
      location ={currentLocation}

    />
     </div>

    <Marker onClick={  markerFormHandler} position={center} >    
    
    
    </Marker>

   
     </GoogleMap> 
     
  </div>)
}
 
export default App;