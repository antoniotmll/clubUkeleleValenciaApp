import { useFonts } from "@expo-google-fonts/raleway";
import React from "react";
import { TouchableOpacity, StyleSheet, View, Text, Image } from "react-native";

export default function InicioScreen(props) {
  let [fontsLoaded, error] = useFonts({
    "Lobster-Regular": require("../assets/fonts/Lobster-Regular.ttf"),
  });

  return (
    <View style={styles.container}>
      <View style={{height: 365, width: 345}}>
        <Image style={styles.logo} source={require("../assets/img/logo.png")} />
      </View>
      <View style={styles.grupoBotones}>
        <TouchableOpacity onPress={() => {}} style={{ paddingBottom: 60 }}>
          <View style={styles.boton}>
            <Text style={styles.textoBoton}>ENTRAR</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {  props.navigation.navigate('Socios')}}>
          <View style={styles.boton}>
            <Text style={styles.textoBoton}>ZONA SOCIOS</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#243E57",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: '100%',
    width: '100%',
  },
  grupoBotones: {
    paddingTop: 70,
  },
  boton: {
    backgroundColor: "#F04B49",
    alignItems: "center",
    borderRadius: 5,
    width: 345,
    height: 50,
  },
  textoBoton: {
    color: "white",
    fontSize: 40,
    textAlign: "center",
    fontFamily: "Lobster-Regular",
  },
});
