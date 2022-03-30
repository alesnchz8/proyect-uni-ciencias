import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  Image,
  TouchableHighlight,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/picture-home.png")}
        style={styles.image_back}
      >
        <StatusBar barStyle="light-content" backgroundColor="#1b396a" />
        <View style={styles.containerContent}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              navigation.navigate("FastExam");
            }}
          >
            <Image
              style={styles.icono}
              source={require("../assets/images/examen-rapido.png")}
              resizeMode="stretch"
            />
            <Text style={styles.texto}>Examen Rapido</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              navigation.navigate("MatterExam");
            }}
          >
            <Image
              style={styles.icono}
              source={require("../assets/images/examen-materia.png")}
              resizeMode="stretch"
            />
            <Text style={styles.texto}>Examen por Materia</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              navigation.navigate("LevenExam");
            }}
          >
            <Image
              style={styles.icono}
              source={require("../assets/images/examen-nivel.png")}
              resizeMode="stretch"
            />
            <Text style={styles.texto}>Examen por Nivel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              navigation.navigate("Results");
            }}
          >
            <Image
              style={styles.icono}
              source={require("../assets/images/resultados.png")}
              resizeMode="stretch"
            />
            <Text style={styles.texto}>Resultados</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#1b396a",
  },
  containerContent: {
    width: "90%",
    height: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop: "2%",
    paddingBottom: "10%",
  },
  image_back: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  card: {
    borderRadius: 8,
    width: "48%",
    height: "48%",
    backgroundColor: "white",
    marginTop: "5%",
  },
  icono: {
    width: "85%",
    height: "50%",
    alignSelf: "center",
  },
  texto: {
    color: "black",
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: "10%",
  },
});
