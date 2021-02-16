import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      height: 600,
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    modalTitle: {
      fontWeight: "bold",
      fontSize: 18,
      textAlign: "center"
    },
    modalSubtitle: {
        fontWeight: "normal",
        fontSize: 16,
        marginTop: 5,
        marginBottom: 20,
        textAlign: "center"
    },
    openButton: {
      backgroundColor: "#F194FF",
      marginTop: 10,
      borderRadius: 20,
      padding: 10,
      elevation: 2
    }
  });