import React from "react";
import { Text, StyleSheet, View, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const SignUpPage = ({ navigation }) => {
  return (
    <View style={styles.signUpPage}>
      {/* Add your sign-up form elements here */}
      <View style={styles.textInput}>
        <View style={styles.label}>
          <Text style={styles.label1}>Username</Text>
        </View>
        <TextInput
          style={styles.inputField}
          placeholder="Enter your name"
          // Add onChangeText handler to update the state or perform validation
        />
      </View>

      {/* Repeat similar structure for other form fields, password, etc. */}

      <Pressable
        style={[styles.vectorParent, styles.groupChildLayout]}
        onPress={() => {
          // Handle sign-up logic here
        }}
      >
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-11.png")}
        />
        <Text style={[styles.login, styles.loginClr]}>Sign Up</Text>
      </Pressable>

      <Text style={[styles.newToThe, styles.loginClr]}>
        Already have an account?
      </Text>
      <Pressable
        style={styles.register}
        onPress={() => navigation.navigate("LoginPage")}
      >
        <Text style={[styles.register1, styles.newToTheTypo]}>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  // Your existing styles...

  signUpPage: {
    backgroundColor: Color.monochromatic01,
    shadowColor: "rgba(180, 188, 203, 0.24)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 24,
    elevation: 24,
    shadowOpacity: 1,
    width: "100%",
    height: 844,
    flex: 1,
  },

  inputField: {
    alignSelf: "stretch",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.monochromatic09,
    height: 48,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    marginTop: 4,
    color: Color.fontWhite,
    fontFamily: FontFamily.paragraphRegularSmall,
    fontSize: FontSize.paragraphRegularLarge_size,
  },
});

export default SignUpPage;