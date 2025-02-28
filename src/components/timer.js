import { StyleSheet, Text, View } from "react-native";

export default Timer = (props) => {
  const { tiempo } = props;
  const formatoTiempo = `${Math.floor(tiempo / 60)
    .toString()
    .padStart(2, "0")} : ${(tiempo % 60).toString().padStart(2, "0")}`;
  return (
    <View style={styles.contenedor}>
      <Text style={styles.texto}>{formatoTiempo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor:{
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "#F0B52B",
    height: 100,
    alignContent: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 25,
  },
  texto:{
    fontSize:60,
    fontWeight: "bold",
    alignSelf: "center"
  },
})