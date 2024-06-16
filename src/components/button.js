import { StyleSheet, Touchable, TouchableOpacity, View, Text } from "react-native";

export default Button = (props) => {
  const {activo, setActivo} = props;
  const handleClick = () => {
    setActivo(!activo);
    playsound();
  };
  const playsound = async () => {
    const {sound} = await Audio.Sound.createAsync(
      // require("../../assets/ARCHIVOGOESHERE.mp3")
    );
    await sound.playAsync();
  };
  return (
    <View>
      <TouchableOpacity style={styles.boton} onPress={()=>handleClick()}>
        <Text style={styles.texto}>{activo ? "Detener":"Comenzar"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  boton:{
    alignItems: "center",
    marginLeft: 30,
    backgroundColor: "green",
    borderRadius: 100,
    width: 100,
    height: 100,
    justifyContent:"center",
    borderColor: "black",
    borderWidth: 2,
  },
  texto:{
    fontSize:15,
    fontWeight: "bold",
    alignSelf: "center",
    color: "white",
  },
});