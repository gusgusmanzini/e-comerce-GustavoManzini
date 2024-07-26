import Container from "react-bootstrap/Container";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../App';

const ItemListContainer = () => {
  const { id: categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems =  () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { id: 1, title: 'Mate Imperial1', description: 'Mate original', price: 6940, pictureUrl: 'https://www.proweb.com.uy/imgs/productos/productos34_8427.jpg' },
            { id: 2, title: 'Mate imperial 2', description: 'Mate de cuero', price: 5949, pictureUrl: 'https://puntoshopuy.com.uy/cdn/shop/files/Copiade2_3CM_30_720x.png?v=1698965942' },
            { id: 3, title: 'Mate Imperial 3', description: 'Mate de cuero negro', price: 3400, pictureUrl: 'https://sapucaimates.com/wp-content/uploads/2021/01/6555.jpg' },
          ]);
        }, 2000);
      });
    };

    fetchItems().then(data => setItems(data));
  }, []);

  return (
    <div >
      <h1 className="catalogo">Catálogo de Productos</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer
