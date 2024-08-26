import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import outputs from "../amplify_outputs.json";
import { Authenticator } from "@aws-amplify/ui-react";
// import { signInWithRedirect } from "aws-amplify/auth";
/**
 * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
 */

Amplify.configure(outputs);

export default function App() {
  return (
    <Authenticator socialProviders={['google']}>
      <div>x</div>
    </Authenticator>
  );
}