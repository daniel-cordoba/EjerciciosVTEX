import { ListOption } from "./components";

function App() {
  const days = [
    {id: 1, nombre:"Lunes"},
    {id: 2, nombre:"Martes"},
    {id: 3, nombre:"Miercoles"},
    {id: 4, nombre:"Jueves"}
  ];

  return (
    <ul>
      {days.map(day => 
          <ListOption key={day.id}>{day.nombre}</ListOption>
        )}
    </ul>
  );
}

export default App;
