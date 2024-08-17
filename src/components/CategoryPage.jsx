// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

// const CategoryPage = () => {
//   const { categoryId } = useParams();
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     // Aquí iría la lógica para obtener los productos de la categoría desde Firebase o una API
//     // Por ahora, vamos a simularlo con datos estáticos.
//     const fetchItems = async () => {
//       const mockItems = [
//         { id: 1, name: 'Producto 1', category: categoryId },
//         { id: 2, name: 'Producto 2', category: categoryId }
//       ];
//       setItems(mockItems);
//     };

//     fetchItems();
//   }, [categoryId]);

//   return (
//     <div>
//       <h1>Productos en la categoría: {categoryId}</h1>
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CategoryPage;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const q = query(collection(db, 'items'), where('category', '==', categoryId));
      const querySnapshot = await getDocs(q);
      const itemsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(itemsList);
    };

    fetchItems();
  }, [categoryId]);

  return (
    <div>
      <h1>Productos en la categoría: {categoryId}</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;

