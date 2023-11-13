import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const LoginPage = () => {
  return (
    <View style={styles.loginPage}>
      <View style={styles.password}>
        <View style={styles.label}>
          <Text style={styles.label1}>Password</Text>
        </View>
        <View style={styles.baseInputField}>
          <Image
            style={[styles.leadingIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/leading-icon.png")}
          />
          <Text style={[styles.inputPlaceholder, styles.helperTextTypo]} />
          <Image
            style={[styles.trailingIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/trailing-icon.png")}
          />
        </View>
        <Text style={[styles.helperText, styles.newToTheTypo]}>
          Helper text
        </Text>
      </View>
      <View style={styles.textInput}>
        <View style={styles.label}>
          <Text style={styles.label1}>Email</Text>
        </View>
        <View style={styles.baseInputField}>
          <Image
            style={[styles.leadingIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/leading-icon1.png")}
          />
          <Text style={[styles.inputPlaceholder, styles.helperTextTypo]} />
          <Image
            style={[styles.trailingIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/trailing-icon1.png")}
          />
        </View>
        <Text style={[styles.helperText, styles.newToTheTypo]}>
          Helper text
        </Text>
      </View>
      <Pressable
        style={[styles.vectorParent, styles.groupChildLayout]}
        onPress={() => {}}
      >
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-11.png")}
        />
        <Text style={[styles.login, styles.loginClr]}>Login</Text>
      </Pressable>
      <Text style={[styles.newToThe, styles.loginClr]}>New to the app?</Text>
      <Pressable style={styles.register} onPress={() => {}}>
        <Text style={[styles.register1, styles.newToTheTypo]}>Register</Text>
      </Pressable>
      <Image
        style={styles.reallife1Icon}
        contentFit="cover"
        source={require("../assets/reallife-1.png")}
      />
      <Text style={[styles.login1, styles.loginClr]}>Login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  helperTextTypo: {
    fontFamily: FontFamily.paragraphRegularSmall,
    textAlign: "left",
    color: Color.fontWhite,
  },
  newToTheTypo: {
    fontSize: FontSize.paragraphRegularSmall_size,
    lineHeight: 20,
  },
  groupChildLayout: {
    height: 46,
    width: 340,
    position: "absolute",
  },
  loginClr: {
    color: Color.colorWhite,
    textAlign: "center",
    position: "absolute",
  },
  label1: {
    marginTop: -12,
    top: "50%",
    left: "0%",
    textAlign: "left",
    color: Color.fontWhite,
    fontFamily: FontFamily.paragraphMediumLarge,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.paragraphRegularLarge_size,
    position: "absolute",
  },
  label: {
    height: 24,
    width: 343,
  },
  leadingIcon: {
    display: "none",
  },
  inputPlaceholder: {
    marginLeft: 8,
    lineHeight: 24,
    fontSize: FontSize.paragraphRegularLarge_size,
    fontFamily: FontFamily.paragraphRegularSmall,
    flex: 1,
  },
  trailingIcon: {
    marginLeft: 8,
  },
  baseInputField: {
    alignSelf: "stretch",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.monochromatic09,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    marginTop: 4,
    overflow: "hidden",
  },
  helperText: {
    lineHeight: 20,
    fontFamily: FontFamily.paragraphRegularSmall,
    textAlign: "left",
    color: Color.fontWhite,
    display: "none",
    marginTop: 4,
  },
  password: {
    top: 437,
    left: 25,
    position: "absolute",
  },
  trailingIcon1: {
    marginLeft: 8,
    display: "none",
  },
  textInput: {
    top: 347,
    left: 22,
    width: 343,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: 25,
  },
  login: {
    top: 13,
    left: 142,
    fontSize: FontSize.header3_size,
    fontWeight: "600",
    fontFamily: FontFamily.header3,
    textAlign: "center",
    lineHeight: 24,
  },
  vectorParent: {
    top: 542,
    left: 25,
  },
  newToThe: {
    top: 602,
    left: 140,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.paragraphRegularSmall_size,
    fontFamily: FontFamily.paragraphMediumLarge,
    fontWeight: "500",
  },
  register1: {
    color: "#6c9cfb",
    textAlign: "center",
    lineHeight: 20,
    fontFamily: FontFamily.paragraphMediumLarge,
    fontWeight: "500",
    fontSize: FontSize.paragraphRegularSmall_size,
  },
  register: {
    left: 164,
    top: 622,
    position: "absolute",
  },
  reallife1Icon: {
    top: 73,
    left: 96,
    borderRadius: 181,
    width: 199,
    height: 196,
    position: "absolute",
  },
  login1: {
    top: 298,
    left: 159,
    fontSize: 24,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.sFProText,
    textAlign: "center",
    lineHeight: 20,
  },
  loginPage: {
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
});

export default LoginPage;
