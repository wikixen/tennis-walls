import Ionicons from "@expo/vector-icons/Ionicons";
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Settings = () => {
  return (
    <View style={styles.view}>
      <Btn text={'Profile'} />
      <Btn text={'Friends'} />
      <Btn text={'Blocked Users'} />
    </View>
  )
}

interface Props {
  text: string;
}

const Btn = ({ text }: Props) => (
  <Pressable style={styles.btn}>
    <Text style={styles.text}>{ text }</Text>
    <Ionicons
      name={"arrow-forward"}
      color={"white"}
      size={24}
    />
  </Pressable>
)

export default Settings

const styles = StyleSheet.create({
  view: {
    marginTop: 10
  },
  btn: {
    padding: 10,
    marginBlock: 2,
    marginInline: 10,
    borderRadius: 8,
    backgroundColor: "#626262",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    color: "white",
  }
})
