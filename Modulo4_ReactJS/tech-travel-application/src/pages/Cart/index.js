import React from 'react';
import { MdDelete } from 'react-icons/md';
import {
  Container,
  ContainerList,
  TravelItem,
  Info,
  Quantity,
  Subtotal,
} from './styles';

function Cart() {
  return (
    <Container>
      <ContainerList>
        <TravelItem>
          <img src="" alt="titulo del viaje" />
          <Info>
            <p>Titulo</p>
            <strong>Precio</strong>
          </Info>
          <Quantity readOnly type="number" value={1} />
          <Subtotal>
            <p>200.00</p>
            <button type="button">
              <MdDelete size={24} color="#0676d9" />
            </button>
          </Subtotal>
        </TravelItem>
        <TravelItem>
          <img src="" alt="titulo del viaje" />
          <Info>
            <p>Titulo</p>
            <strong>Precio</strong>
          </Info>
          <Quantity readOnly type="number" value={1} />
          <Subtotal>
            <p>200.00</p>
            <button type="button">
              <MdDelete size={24} color="#0676d9" />
            </button>
          </Subtotal>
        </TravelItem>
        <TravelItem>
          <img src="" alt="titulo del viaje" />
          <Info>
            <p>Titulo</p>
            <strong>Precio</strong>
          </Info>
          <Quantity readOnly type="number" value={1} />
          <Subtotal>
            <p>200.00</p>
            <button type="button">
              <MdDelete size={24} color="#0676d9" />
            </button>
          </Subtotal>
        </TravelItem>
      </ContainerList>
    </Container>
  );
}

export default Cart;
