import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm"; // ES Modules import
// const { SSMClient, GetParameterCommand } = require("@aws-sdk/client-ssm"); // CommonJS import

const App = async () => {
  const [count, setCount] = useState(0)
  const client = new SSMClient(config);
  const input = { // GetParameterRequest
  Name: "REACT_APP_API_KEY", // required
  WithDecryption: true,
};
  const command = new GetParameterCommand(input);
  const response = await client.send(command);
  console.log('Printing the secret value = ', response);
  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
