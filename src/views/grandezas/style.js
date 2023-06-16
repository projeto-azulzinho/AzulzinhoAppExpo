import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  textEmpty: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 16,
  },
  listEmpty: {
    marginTop: "50%",
  },
  imgDeleteItem: {
    width: 14,
    height: 14,
  },
  backList: {
    flex: 1,
  },
  textModal: {
    textAlign: "center",
    color: "white",
    fontWeight: "500",
    fontSize: 20,

    margin: 10,
  },
  buttomSavePos: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  textStyle: {
    fontWeight: "400",
    fontSize: 16,
  },
  itemStyle: {
    display: "flex",
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",

    backgroundColor: "#fff",
    padding: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginVertical: 8,

    borderRadius: 10,
    borderColor: "#013850",
    borderWidth: 1.5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,

    elevation: 3,
  },
  modalBody: {
    backgroundColor: "#fff",
    width: "80%",
    height: "50%",
    borderRadius: 30,
  },
  backModal: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  buttonEscolha: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 10,

    borderColor: "#013850",
    borderWidth: 3,
  },
  textEscolha: {
    color: "#ffffff",
  },
  textInput: {
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,

    borderWidth: 1,
    borderColor: "#013850",
  },
  containerInputs: {
    flex: 2,
    //backgroundColor: "#ffffff",
    marginLeft: 30,
    marginRight: 30,
    gap: 30,
  },
  container: {
    width: "100%",
    height: "100%",
  },
  containerBarra: {
    paddingTop: "20%",
    paddingBottom: "10%",
    paddingLeft: "10%",
    paddingRight: "10%",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  espacamento: {
    // width: 25,
    // height: 20,
    // backgroundColor: "#000200",
    // borderTopStartRadius: 10,
    // borderTopEndRadius: 10,
    // borderBottomStartRadius: 30,
    // borderBottomEndRadius: 30,
    paddingTop: "10%",
  },

  espacamento2: {
    // width: 25,
    // height: 20,
    // backgroundColor: "#000200",
    // borderTopStartRadius: 10,
    // borderTopEndRadius: 10,
    // borderBottomStartRadius: 30,
    // borderBottomEndRadius: 30,
    paddingTop: "90%",
  },

  containerTitulo: {
    paddingLeft: "10%",
    paddingRight: "10%",
  },

  containerTitulo2: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#013850",
    height: 65,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 20,

    elevation: 10,
  },

  titulo: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  NomeSensor: {
    color: "#BFBFBF",
    paddingLeft: "1%",
  },

  Sensores: {
    color: "#000000",
    paddingLeft: "1%",
  },

  containerNomeSensor: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 2,
    height: 45,
    paddingTop: 12,
    paddingLeft: 7,
    paddingRight: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  containerInputGrandezas: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 2,
    height: 45,
    justifyContent: "space-between",
    flexDirection: "row",
  },

  botaoGrandeza: {
    borderRadius: 10,
    borderColor: "#000000",
    borderWidth: 3,
    height: 45,
    paddingTop: 5,
    paddingLeft: 10,
  },

  botao: {
    color: "#000000",
    paddingLeft: 90,
    paddingTop: 5,
  },

  botao2: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  containerSalvar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 10,
    height: 50,
    padding: 5,
    marginBottom: 20,
  },
});
