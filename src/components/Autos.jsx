import React, {useEffect, useState} from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const Autos = () => {
    const [autos, setAutos] = useState([]);
    const [nuevoAuto, setNuevoAuto] = useState({
        nombre: 'Mate Imperial 1',
        descripcion: ''
    })
}


export default Autos;