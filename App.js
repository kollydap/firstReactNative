import { StatusBar } from "expo-status-bar";
import react, { useEffect, useState } from "react";
import { getActiveUsers } from "./dummy_data";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import { justifyContent } from "react-native-wind/dist/styles/flex/justify-content";

export default function App() {
  return (
    <View>
      <View style={styles.NavField}>
        <Text style={{color:"#fff", fontSize:20, fontWeight:700}}>kOLLYDAp</Text>
        <View style={{flexDirection:"row",justifyContent:"space-between", alignItems:"flex-end"}}>
          <Pressable><Text style={{color:"#fff", fontSize:20,}}>Chats</Text></Pressable>
          <Pressable><Text style={{color:"#fff", fontSize:20,}}>Status</Text></Pressable>
          <Pressable><Text style={{color:"#fff", fontSize:20,}}>Contacts</Text></Pressable>
        </View>
      </View>
      <View style={styles.container}>
        <StatusBar style="light" />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <TextInput style={styles.input} />
          <Pressable style={styles.button}>
            <Text style={styles.buttonFont}></Text>
          </Pressable>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.ViewField}>
            <View style={styles.ViewFieldContentBig}></View>
            <View
              style={{ flexDirection: "row", flexWrap: "wrap", width: "80%" }}
            >
              <View style={styles.ViewFieldContent}></View>
              <View style={styles.ViewFieldContent}></View>
              <View style={styles.ViewFieldContent}></View>
              <View style={styles.ViewFieldContent}></View>
            </View>
          </View>
          <View style={styles.ViewFieldContentBigH}></View>
          <View style={styles.ViewField}>
            <View style={styles.ViewFieldContentBig}></View>
            <View
              style={{ flexDirection: "row", flexWrap: "wrap", width: "80%" }}
            >
              <View style={styles.ViewFieldContent}></View>
              <View style={styles.ViewFieldContent}></View>
              <View style={styles.ViewFieldContent}></View>
              <View style={styles.ViewFieldContent}></View>
            </View>
          </View>
          <View style={styles.ViewFieldContentBigH}></View>
          <View style={styles.ViewField}>
            <View style={styles.ViewFieldContentBig}></View>
            <View
              style={{ flexDirection: "row", flexWrap: "wrap", width: "80%" }}
            >
              <View style={styles.ViewFieldContent}></View>
              <View style={styles.ViewFieldContent}></View>
              <View style={styles.ViewFieldContent}></View>
              <View style={styles.ViewFieldContent}></View>
            </View>
          </View>
          <View style={styles.ViewFieldContentBigH}></View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  NavField: {
    width: "100%",
    height: 100,
    backgroundColor: "green",
    padding:20,
    paddingBottom:10,
    justifyContent:"flex-end"
  },
  container: {
    padding: 40,
    paddingBottom: 0,

    backgroundColor: "lightgreen",
    // alignItems: "center",
    // justifyContent: "center",
  },
  input: {
    backgroundColor: "#FFF",
    borderColor: "lightblue",
    borderWidth: 2,
    width: 250,
    marginRight: 10,
    padding: 10,
    borderRadius: 10,
  },
  button: {
    width: 50,
    backgroundColor: "green",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonFont: {
    color: "#fff",
    fontSize: 18,
  },
  ViewField: {
    flexDirection: "row",
    // flexWrap: "wrap",
    // justifyContent: "center",
  },
  ViewFieldContent: {
    height: 100,
    width: 100,
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 10,
  },
  ViewFieldContentBig: {
    height: 210,
    width: 100,
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 10,
  },
  ViewFieldContentBigH: {
    height: 100,
    width: 320,
    backgroundColor: "#fff",
    margin: 5,
    borderRadius: 10,
  },
});
