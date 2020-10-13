import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  bimApp: {
    flex: 1,
    backgroundColor: '#099abe',
    color: 'white',
    justifyContent: 'space-between',
  },
  flex1: {
    flex: 1,
    width: '100%'
  },
  txtWhite: {
    color: 'white'
  },
  up:{
    width: '100%',
    padding: 20,
    marginBottom: 20
  },
  bottom: {
    width: '100%',
    padding: 20,
  },
  stage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  stageArea: {
    paddingHorizontal: 10,
    marginBottom: 20
  },
  playerTool: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  selectTool: {
    width: 90,
    height: 90,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 50,
    backgroundColor: 'black',
    opacity: 0.3
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    textTransform: "uppercase",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: 'center',
    paddingTop: 50
  },
  iconR:{
    transform: [
      { rotateX: "0deg" },
      { rotateZ: "90deg" },
      { translateX: 90 }
    ]
  },
  iconP:{
    transform: [
      { rotateX: "0deg" },
      { rotateZ: "90deg" },
      { translateX: 90 }
    ]
  },
  iconS:{
    transform: [
      { rotateX: "0deg" },
      { rotateY: "180deg" },
      { translateX: 90 }
    ]
  }

});
