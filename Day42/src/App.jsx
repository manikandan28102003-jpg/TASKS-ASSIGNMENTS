
import './App.css'
import Card from './Card'
import Task1 from './Task1'
import Task2 from './Task2'
import Task3 from './Task3'
import Task4 from './Task4'
import Task6 from './Task6'
import Rabbit from './assets/Rabbit.jpg'

function App() {

  return (
    <>
    <Task1/>
    <Task2 Name="Manikandan" Age={21}/>
    <Task3 Message="Hello I am Learning JS"/>
    <Task4 Text="Click Me"/>
    <Card Message="Do You Have Brain?"/>
    <Task6 image={Rabbit} EC={1851} Name="Manikandan" Phone={6381945180} Course="Python Full Stack" Batch={11.00}/>
    </>
  )
}

export default App
