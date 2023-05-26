export const ShowGreeting = () => {
  let date = new Date();
  let hour = date.getHours();
  let greeting = "";

  if(hour >= 0 && hour < 12){
      greeting = "Buenos Días"
  }
  if(hour >= 12 && hour < 18){
      greeting = "Buenas Tardes"
  }
  if(hour >= 18 && hour < 24){
      greeting = "Buenas Noches"
  }

  return (
    <h2 className="textoSaludo">{greeting}</h2>
  )
}
