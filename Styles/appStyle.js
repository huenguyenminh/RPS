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
  active: {
    opacity: 1
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
      { rotate: "90deg" },
      { translateX: 90 }
    ]
  },
  iconP:{
    transform: [
      { rotate: "90deg" },
      { translateX: 90 }
    ]
  },
  iconS:{
    transform: [
      { rotateY: "180deg" },
      { translateX: 100 }
    ]
  },
  iconR2:{
    transform: [
      { rotateX: "-90deg"}
    ]
  },
  iconP2:{
    transform: [
      { rotate: "-90deg" }
    ]
  },
  iconS3:{}

});
