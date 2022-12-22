import {View,Text,Image,StyleSheet,StatusBar,TextInput,TouchableOpacity,Button, Alert} from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import Validator from "email-validator";
import * as OpenAnything from 'react-native-openanything'

const LoginScreen = ({ navigation }) => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email().required("A url is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password is required"),

      name: Yup.string()
      .required("Password is required")
      .min(8, "Password is required"),

      number: Yup.string()
      .required("Password is required")
      .min(10, "Password is required"),

      message: Yup.string()
      .required("Password is required")
      .min(10, "Password is required"),
      
  });


  

  return (
    <View>
      <Formik
        initialValues={{
          email: "",
          password: "",
          name:"",
          number:"",
          message:""
        }}
        onSubmit={(values) => {
          const mess = values.message
          OpenAnything.Email(To="priyanshusingh1877@gmail.com", subject="mail ",body="")}
        }
        validationSchema={LoginSchema}
        validateOnMount={true}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <View style={{ marginTop:140,marginHorizontal:20}}>

            <TextInput
                placeholder="Name"
                textContentType="name"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                style={[
                  styles.textinput,
                  {
                    borderColor:
                      values.name.length < 1 || values.name.length >= 6
                        ? "#ccc"
                        : "red",
                  },
                ]}
              />




              <TextInput
                placeholder="E-mail"
                keyboardType="email-address"
                textContentType="emailAddress"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                style={[
                  styles.textinput,
                  {
                    borderColor:
                      values.email.length < 1 ||
                      Validator.validate(values.email)
                        ? "#ccc"
                        : "red",
                  },
                ]}
              />

              <TextInput
                placeholder="Enter phone number"
                onChangeText={handleChange("number")}
                onBlur={handleBlur("number")}
                value={values.number}
                style={[
                  styles.textinput,
                  {
                    borderColor:
                      values.number.length < 1 || values.number.length >= 9
                        ? "#ccc"
                        : "red",
                  },
                ]}
              />


             <TextInput
                placeholder="Enter message"
                onChangeText={handleChange("message")}
                onBlur={handleBlur("message")}
                value={values.message}
                style={[
                  styles.textinput,
                  {
                    borderColor:
                      values.message.length < 1 || values.message.length >= 9
                        ? "#ccc"
                        : "red",
                  },
                ]}
              />


              <TextInput
                placeholder="Enter password"
                secureTextEntry={true}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                style={[
                  styles.textinput,
                  {
                    borderColor:
                      values.password.length < 1 || values.password.length >= 6
                        ? "#ccc"
                        : "red",
                  },
                ]}
              />
            </View>
            <View style={styles.forget}>
              <TouchableOpacity>
                <Text style={{ fontSize: 15, color: "#19B5FE" }}>
                  Forget Password?
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonview}>
              <Button
                title="login"
                onPress={handleSubmit}
                style={styles.button(isValid)}
                disabled={!isValid}
              />
            </View>
            <View style={styles.sign}>
              <Text style={{ fontSize: 16 }}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text style={{ color: "#19B5FE", fontSize: 16 }}>sign up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};
const b = StatusBar.currentHeight;
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginTop: b + 90,
    alignSelf: "center",
    marginBottom: 10,
  },
  textinput: {
    borderRadius: 8,
    borderWidth: 1.5,
    height: 50,
    marginBottom: 10,
    paddingLeft: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
  forget: {
    alignSelf: "flex-end",
    marginRight: 18,
    marginBottom: 15,
  },
  sign: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 25,
  },
  button: (isValid) => ({
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
  }),
  buttonview: {
    marginHorizontal: 30,
  },
});

export default LoginScreen;
