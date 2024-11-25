import logo from './logo.svg'
import './App.css'
import ButtonComponent from './components/ButtonComponent'
import ImageComponent from './components/ImageComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonComponent customTitle="PRIMO BOTTONE" />
        <ButtonComponent customTitle="SECONDO BOTTONE" />
        <ImageComponent src="https://placedog.net/700" alt="image1" />
        <ImageComponent src="https://placedog.net/800" alt="image2" />
      </header>
    </div>
  )
}

export default App
