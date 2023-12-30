import { Button } from "./components/ui/button"

const App = () => {
  const handleclick = () => {
    console.log('Clicked');
  }; 
  return (
    <div>
      <h1>happy</h1>
      <Button variant="secondary" className="text-center text-cyan-600" onClick={handleclick}>
        Send message
      </Button>
    </div>
    
  )
}

export default App