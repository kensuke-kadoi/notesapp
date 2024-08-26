import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: "ap-northeast-1_qiAsz1z8q",
      userPoolClientId: "7g6s5onnahdkdfhnhb48u3dg8k",
      identityPoolId: "ap-northeast-1:94a021fe-f77d-4aae-96ee-49f9906bbb41",
      loginWith: {
        email: true,
      },
      // signUpVerificationMethod: "code",
      // userAttributes: {
      //   email: {
      //     required: true,
      //   },
      // },
      // allowGuestAccess: true,
      // passwordFormat: {
      //   minLength: 8,
      //   requireLowercase: true,
      //   requireUppercase: true,
      //   requireNumbers: true,
      //   requireSpecialCharacters: true,
      // },
    },
  },
})

// const component = {
//   SignIn: {
//     Headers: {

//     },
//     Footer() {
//       return (
//         <View textAlign="center">
//           <Divider orientation="horizontal" />
//           <Text>
//             {
//               (
//                 <View>
//                   <Button
//                     variation="primary"
//                     onClick={
//                       () => {
//                         // Auth.federatedSignIn({ customProvider: oidcProviderName });
//                       }}
//                   >
//                     Sign In with
//                   </Button>
//                 </View>
//               )
//             }
//           </Text>            
//         </View>
//       );
//     },
//   }
// }

export default function App() {
  return (
    <Authenticator>
      <div>Test Auth0</div>
    </Authenticator>
  );
}