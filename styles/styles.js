import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181818',
    flex: 1,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    position: 'relative',
    top: 0,
    fontSize: 15,
    fontFamily: 'monospace',
    color: '#ffffff',
  },
  image:{
    backgroundColor: '#505050',
    width: '90%',
    height: '80%',
    borderRadius: 20
  },
  button:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    margin: 5,
    backgroundColor: '#202020',
    borderRadius: 20,
    color: '#fff'
  },
  buttonPrimary:{
    backgroundColor: "#fff"
  },
  buttonText:{
    textAlign: 'left',
    color: "#fff"
  },
  buttonTextPrimary:{
    textAlign: 'left',
    color: '#000'
  },
  buttonIcon:{
    marginRight: 5
  },
  ButtonsBox:{
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  Horizontal:{
    flexDirection: "row",
    width: "80%",
    overflow: "hidden"
  }
});
