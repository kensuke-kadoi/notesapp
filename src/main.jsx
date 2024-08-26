import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Amplify } from 'aws-amplify'
import App from './App.jsx'
import './index.css'

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "ap-northeast-1_qiAsz1z8q",
      userPoolClientId: "7g6s5onnahdkdfhnhb48u3dg8k",
      identityPoolId: "ap-northeast-1:94a021fe-f77d-4aae-96ee-49f9906bbb41",
      loginWith: {
        email: true,
      },
      signUpVerificationMethod: "code",
      userAttributes: {
        email: {
          required: true,
        },
      },
      allowGuestAccess: true,
      passwordFormat: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireNumbers: true,
        requireSpecialCharacters: true,
      },
    },
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
