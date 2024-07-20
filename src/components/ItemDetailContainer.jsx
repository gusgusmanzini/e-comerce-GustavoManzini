import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItem = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve ({
                        id:1,
                        name: 'Mate',
                        description: 'Mate original',
                        price: 2400,
                        imageUrl: 'https://th.bing.com/th/id/OIP.8bAb8WlEj4bTIWTnHfNEQAHaHa?rs=1&pid=ImgDetMain'
                    });
                }, 2000);
            });
        };
        fetchItem().then((data) => {
            setItem(data);
        });
    }, []);

    return (
        <div>
            {item ? <ItemDetail item={item} /> : <p>Cargando...</p>}
        </div>
    );
};

export default ItemDetailContainer;