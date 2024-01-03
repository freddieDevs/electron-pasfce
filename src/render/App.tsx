import { Button } from "@render/components/ui/button"

const App = () => {
  const ipc = window.ipcRenderer;
  // create an input where i send a message to the main process and i 
  // am able to get a response back to ensure there is comms btwn the 
  // renderer and the main processes 
  return (
    <div>
      <h1>happy</h1>
      <Button variant="secondary" className="text-center text-cyan-600" >
        Send message
      </Button>
    </div>
    
  )
}

export default App