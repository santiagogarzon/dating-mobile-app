import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  setting: {
    padding: 16
  },
  container: {
    height: "100%",
    backgroundColor: "#F5FCFF"
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    backgroundColor: "white",
    elevation: 2
  },
  textView: {
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    top: 0,
    left: 15,
    right: 0,
    bottom: 10
  },
  imageText: {
    fontSize: 25,
    color: "#E8E8E8",
    fontWeight: "bold",
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  closeButton: {
    alignSelf: "flex-end",
    width: 30,
    height: 30,
    marginRight: 0
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  actionIcon: {
    position: "absolute",
    top: Dimensions.get("window").height / 2 - 150,
    left: Dimensions.get("window").width / 2 - 50,
    elevation: 5,
    zIndex: 5
  },
  modal: {
    zIndex: 9,
    elevation: 9
  },
  cardContainer: {
    marginTop: "5%",
    marginHorizontal: "5%"
  },
  sliderBox: {
    borderRadius: 15,
    marginTop: 5,
    width: Dimensions.get("window").width - 100
  },
  nameText: {
    fontSize: 25,
    alignSelf: "center"
  },
  cardImages: {
    flex: 1,
    width: "100%"
  },
  cardNameText: { fontSize: 30 }
});

export default styles;
