import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import "./styles.css";
import VideocamIcon from '@mui/icons-material/Videocam';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import getAllUsers from "services/getAllUsers";
import HeaderIcons from "../../components/HeaderIcons";
import getCoursesByProfessor from "services/getCoursesByProfessorId";
import SideBarTopic from "components/SideBarTopic";
import Mensaje from '../../components/TopicMessage/index';
import firebaseApp from '../../firebase/credentials';
import {
  getFirestore,
  doc,
  setDoc,
  collection,
  getDocs, query, where
} from "firebase/firestore";

const firestore = getFirestore(firebaseApp);

export default function StudentsPage( params ) {
 
  const [listaNombres, setListaNombres] = useState([]);
  const [students, setStudents] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [course_id, setCourse_id] = useState([]);
  const [inputMensaje, setinputMensaje] = useState([]);
  const [listaMensaje, setListaMensaje] = useState([]);

  const user = JSON.parse(localStorage.getItem("loggedAppUser"));

  //obtenemos el id de la url
  const id = params.params.topicId;

  let newid = parseInt(id, 10);

  var nombre;

  var profesor;

  var courso_id;


  //Funcion para obtener el nombre del topic

  async function getName() {

    console.log('esto');

    try{

      const q = query(collection(firestore, "topics"), where("id", "==", newid));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
    
        nombre = doc.data().nombre.trim();
        profesor = doc.data().author.trim();
        courso_id = doc.data().course_id;
        console.log(courso_id);
      });
      
    }catch(e){

      console.log('error ',e);
      
    }

    setListaNombres(nombre);
    setTeacher(profesor);
    setCourse_id(courso_id);

    getListaMensajes();
    getCantidadAlumnos(courso_id);
   
  }

  //Funcion para obtener la lista de mensajes

  async function getListaMensajes(){


    try{

      const mensajesArr = [];

      const collecionRef = collection(firestore, `topics/${nombre || listaNombres}/mensajes/`);

      const mensajes_obtenidos = await getDocs(collecionRef);
        mensajes_obtenidos.forEach((mensaje) => {
        mensajesArr.push(mensaje.data());
      });

      setListaMensaje([...mensajesArr]);


    }catch(e){

      console.log('error ', e);

    }

  }

  //funcion para enviar mensaje

  function enviarMensaje(e){

    //prevenimos que se envien mensajes vacios
    e.preventDefault();
    
    //asignamos como id la fecha
    const id_mensaje = new Date().getTime();

    const docuRef = doc(firestore, `topics/${listaNombres}/mensajes/${new Date().getTime()}`);

    setDoc(docuRef, {

        foto: 'comun',
        usuario: user.nombre,
        mensaje: inputMensaje,
        id:id_mensaje

      });

      //seteamos el input en blanco al enviar el mensaje
      setinputMensaje("");

      //obtenemos el mensaje recien enviado
      getListaMensajes();

    }

    async function getStudents(){

      await getAllUsers().then((data) => { 

       // setStudents(data);

       // console.log(students);


      });

    }

    var filtro;

    async function getCantidadAlumnos(course_id){

      await getCoursesByProfessor().then((data) => { 
        
        filtro = data.filter(alumno => alumno.id === course_id);
        
      });

      setStudents(filtro);
     
       /* filtro.map((canal) => {
          console.log(canal.alumnos.nombre);
        });*/
    }   

    useEffect(() => {

      getName();
      getListaMensajes();
    //  getStudents();
              
      
  
    }, []);
    
  return (

    <>
    <div className="app">
      <div className="chat">
        <div className="chatHeader">
          <div className="chatHeader__left">
            <h3>
              <span className="chatHeader__hash font-semibold">{listaNombres}</span>
            </h3>
          </div>

          <div className="chatHeader__right">
          <Link href={`/JitsiMeet/${newid}`}> <span className="chatHeader__video">Join a room.<VideocamIcon fontSize="large" /></span> </Link> 
          </div>
        </div>

        <div className="chat__messages">

          {listaMensaje ? listaMensaje.map((mensaje) => {

            return <Mensaje key={mensaje.id} mensajeFirebase={mensaje} user_name={user.nombre} />;

          })
          : null}

          <div style={{ marginBottom: "75px" }}></div>
        </div>

        <div className="chat__input">
          
          <form onSubmit={enviarMensaje}>
            <input
              type="text"
              value={inputMensaje}
              onChange={(e) => setinputMensaje(e.target.value)}
              placeholder="Type to reply..." />
            <button

              className="chat__inputButton"
              type="submit"
            >
              Enviar mensaje
            </button>
          </form>

          <div className="chat__inputIcons">
            <AttachFileIcon fontSize="large" />
            <SendIcon onClick={enviarMensaje} className="sideicon__top" fontSize="large" />

          </div>
        </div>
      </div>
      <SideBarTopic students={ students } profesor={ teacher }/>

    </div></>
  
  );
  
}
