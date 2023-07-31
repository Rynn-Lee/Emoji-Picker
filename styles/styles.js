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
    position: 'fixed',
    top: '0px',
    fontSize: '15pt',
    fontFamily: 'monospace',
    color: '#ffffff',
  },
  image:{
    backgroundColor: '#505050',
    width: '80%',
    height: '60%',
    borderRadius: '20px'
  },
  button:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10px',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingBottom: '10px',
    width: '70%',
    margin: '5px',
    backgroundColor: '#fff',
    borderRadius: '20px'
  },
  buttonText:{
    textAlign: 'center',
    color: "#000"
  },
  ButtonIcon:{
    marginRight: '5px'
  }
});
