import {  Button, Text } from 'react-native';
import { useAuth } from '../../auth-context';
export  function Login() {
    const {signIn} = useAuth();

    const handleClick = () => signIn();

  return (
    <>
       <Text>Login Page</Text>
       <Button onPress={handleClick} title="Sign-in" />
       </>
    );
}
export default Login;