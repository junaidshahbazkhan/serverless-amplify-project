import "./App.css";
import { Amplify } from "aws-amplify";
import awsmobile from "./aws-exports";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";

Amplify.configure(awsmobile);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <h2>Here is my content</h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
