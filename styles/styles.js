import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#181818',
    color: '#fff',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  Main:{
    position: 'absolute',
    marginTop: 50,
    marginBottom: 45,
    overflow: 'hidden'
  },
  TitleBar:{
    position: 'absolute',
    width: '100%',
    backgroundColor: '#252525',
    top: 0,
    padding: 15
  },
  text: {
    position: 'relative',
    top: 0,
    fontSize: 15,
    fontFamily: 'monospace',
    color: '#ffffff',
  },
  image:{
    borderRadius: 20,
    height: '100%',
  },
  button:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
    marginRight: 5,
    padding: 5,
    width: 'auto',
    height: 'auto'
  },
  ButtonsBox:{
    width: "100%",
    display: "flex",
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
  },
  Horizontal:{
    flexDirection: "row",
    width: "80%",
    overflow: "hidden"
  },
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#252525dd',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#353535',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  emojiImage: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  sticker:{
    position: 'absolute',
    zIndex: 99999999
  },
  absolute:{
    position: 'absolute'
  },
  ActionButtons:{
    backgroundColor: '#252525',
    width: '100%',
    height: '20px',
  },
  Bottom:{
    position: 'absolute',
    bottom: 0,
    width: '100%'
  }
});
