import { ListOption } from "./components";

const List = () => {
  return(
    <ul>
      <ListOption>Lunes</ListOption>
      <ListOption>Martes</ListOption>
      <ListOption>Miercoles</ListOption>
    </ul>
)};

const ErrorMessage = () =>{
  return(
    <p>No hay lista</p>
  )
};

function App() {
  const isList = false;

  return (
    <>
      { isList ? <List/> : <ErrorMessage/> }
    </>
  );
}

export default App;
