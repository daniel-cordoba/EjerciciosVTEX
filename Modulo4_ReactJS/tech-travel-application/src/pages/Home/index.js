import React, { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { Container, List, Unit } from './styles';
import api from '../../services/api';

function Home() {
  const [travelList, setTravelList] = useState([]);

  useEffect(() => {
    async function getTravelList() {
      const { data } = await api.get('/travels');
      setTravelList(data);
    }
    getTravelList();
  }, []);

  return (
    <Container>
      <List>
        {travelList.map((el) => (
          <Unit>
            <img src={el.photo} alt="Travel" />
            <p>{el.title}</p>
            <strong>{el.price}</strong>

            <button type="button">
              <div>
                <MdAddShoppingCart size={16} color="#fff" />
              </div>
              <span>Agregar al carrito</span>
            </button>
          </Unit>
        ))}
      </List>
    </Container>
  );
}

export default Home;
