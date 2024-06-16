import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default Tabs = (props) => {
  const { seleccion, setseleccion, tiempo, setTiempo, setActivo } = props;

  const opciones = ["Pomodoro", "Descanso", "Descancito"];

  const handleCambioSeleccion = (index) => {
    setseleccion(index);
    const nuevoTiempo = index === 0 ? 25 : index === 1 ? 10 : 5;
    setTiempo(nuevoTiempo*60);
    setActivo(false)
  };
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      {opciones.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.boton,
            seleccion !== index && { borderColor: "transparent" },
          ]}
          onPress={() => handleCambioSeleccion(index)}
        >
          <Text style={styles.texto}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  boton: {
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  texto: {
    fontSize: 15,
    fontWeight: "bold",
  },
});