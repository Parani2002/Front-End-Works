import { React, useState } from "react";

function App() {
  const cities = ["Jaffna", "Colombo", "Vavuniya", "Kilinochi"];
  const [name, setName] = useState("");
  const [value, setValue] = useState(0)
  const updateCityName = () => {
    setName(cities[value])
    setValue(value+1)
    if(value >= cities.length){
      setValue(0)
    }

  }

  return (
    <div>
      <button onClick={updateCityName} className="border bg-violet-600 px-4 py-2 rounded-md">Click Me</button>
      {cities.map((city) => (
        <div>
          <h1>{city}</h1>
        </div>
      ))}

      <h1>City Name is : {name}</h1>
    </div>

  )

}

export default App;
