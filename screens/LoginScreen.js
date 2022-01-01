import React, {useContext, useState} from 'react';
import { View, Text, Button,TouchableOpacity,Image,  StyleSheet, FlatList } from 'react-native';
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';


const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
    return (
     
      <View style={styles.container}>
        <Image 
          source={require('../assets/rn-social-logo.png')}
          style={styles.logo}
          />
          <Text style={styles.text}>RN social App</Text>
        <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />
      <FormButton
        buttonTitle="Sign In"
        onPress={() => alert(email, password)}
      />
      <TouchableOpacity style={styles.forgotButton} onPress={()=>{}}>
        <Text style ={styles.navButtonText}>Forgot Password</Text>
      </TouchableOpacity>
      {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => fbLogin()}
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => googleLogin()}
          />
        </View>
      ) : null}
      
      <TouchableOpacity 
      style={styles.forgotButton} 
      onPress={()=>navigation.navigate('Signup')}>
        <Text style ={styles.navButtonText}>Don't have an account? Create here</Text>
      </TouchableOpacity>
      </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});