import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const signIn = () => {
    auth.signInWithEmailAndPassword(email, password).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <>
      <KeyboardAvoidingView style={styles.container}>
        <StatusBar style="light" />
        <Image
          source={{
            uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
          }}
          style={{ width: 200, height: 200 }}
        />
        <View style={styles.inputContainer}>
          <Input
            placeholder="Email"
            autoFocus
            type="email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            placeholder="Password"
            secureTextEntry
            type="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            onSubmitEditing={signIn}
          />
        </View>
        <Button containerStyle={styles.button} title="Login" onPress={signIn} />
        <Button
          containerStyle={styles.button}
          title="Register"
          type="outline"
          onPress={() => navigation.navigate("Register")}
        />
      </KeyboardAvoidingView>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 300,
    marginTop: 12,
  },
});
