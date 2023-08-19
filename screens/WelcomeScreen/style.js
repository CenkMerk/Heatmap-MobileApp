import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover", // Arkaplanı boyutlandırma modu
  },
  content: {
    backgroundColor: "white",
    marginTop: "auto",
    paddingHorizontal: 20,
    paddingVertical: 40,
    display: "flex",
    alignItems: "center",
    borderTopEndRadius: 50,
    borderTopLeftRadius: 50,
  },
  welcome: {
    fontSize: 30,
    fontWeight: "600",
    lineHeight: 38,
  },
  
  title: {
    fontSize: 30,
    fontWeight: "800",
    lineHeight: 38,
    textAlign: "center",
    marginBottom: 50,
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 24,
    textAlign: "center",
    color:"#7F879E",
    marginBottom:25
  },
});
