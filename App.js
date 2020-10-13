/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Alert,
  Modal,
  TouchableOpacity,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { styles } from "./Styles/appStyle";
// const App: () => React$Node = () => {
const App = () => {
  const [player, setPlayer] = useState();
  const [computer, setComputer] = useState();
  const [icon, setIcon] = useState("");
  const [rotate, setRotate] = useState("");

  const [result, setResult] = useState("Start");
  const [active, setActive] = useState();

  function selectTool(val) {
    setPlayer(val);
    setActive(val);
    switch (val) {
      case 1:
        {
          setIcon("hand-rock");
          setRotate("iconR");
        }
        break;
      case 2:
        {
          setIcon("hand-paper");
          setRotate("iconP");
        }
        break;
      case 3:
        {
          setIcon("hand-scissors");
          setRotate("iconS");
        }
        break;
      default:
        return setIcon;
    }
    let computerSelected = randomComputer();
    checkResult(val, computerSelected);
  }
  function randomComputer() {
    // select get value [1,3];
    const selected = Math.floor(Math.random() * 3) + 1;
    setComputer(selected);
    return selected;
  }
  function checkResult(playerSelected, computerSelected) {
    switch (playerSelected) {
      case 1:
        {
          if (computerSelected === 3) {
            setResult("Win");
          } else if (computerSelected === 1) {
            setResult("Same");
          } else {
            setResult("Lose");
          }
        }
        break;
      case 2:
        {
          if (computerSelected === 1) {
            setResult("Win");
          } else if (computerSelected === 2) {
            setResult("Same");
          } else {
            setResult("Lose");
          }
        }
        break;
      case 3:
        {
          if (computerSelected === 2) {
            setResult("Win");
          } else if (computerSelected === 3) {
            setResult("Same");
          } else {
            setResult("Lose");
          }
        }
        break;
      default:
        return;
    }
  }
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.bimApp}>
        {/* UP */}
        <View style={[styles.up]}>
          <Text style={[styles.txtWhite, styles.title]}>{result}</Text>
          <Text style={[styles.txtWhite]}>Active: {active}</Text>
        </View>
        {/* MIDDLE */}
        <View style={[styles.flex1, styles.middle]}>
          <View style={styles.stage}>
            <View style={[styles.stageArea]}>
              <Text>
                Player: {player}, {icon}, rotate: {rotate}
              </Text>
              <View style={[styles.iconPlayer, styles[rotate]]}>
                {player && (
                  <FontAwesome5
                    name={icon}
                    style={[styles.txtWhite, styles.icon]}
                    size={50}
                  />
                )}
              </View>
            </View>
            <View style={[styles.stageArea]}>
              <Text>Computer: {computer}</Text>
              <Text style={[styles.iconComputer]}>
                {computer && (
                  <FontAwesome5
                    name={
                      computer === 1
                        ? "hand-rock"
                        : computer === 2
                        ? "hand-paper"
                        : "hand-scissors"
                    }
                    style={[
                      styles.txtWhite,
                      styles[
                        computer === 1
                          ? "iconR2"
                          : computer === 2
                          ? "iconP2"
                          : "iconS2"
                      ],
                    ]}
                    size={50}
                  />
                )}
              </Text>
            </View>
          </View>
        </View>
        {/*  BOTTOM */}
        <View style={[styles.bottom]}>
          <View styles={[styles.playerTool]}>
            <TouchableOpacity
              onPress={() => selectTool(1)}
              style={[styles.selectTool, styles.center, styles[ player === 1 ? 'active' : '']]}
            >
              <FontAwesome5
                name={"hand-rock"}
                style={[styles.txtWhite, styles.icon]}
                size={50}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => selectTool(2)}
              style={[styles.selectTool, styles.center, styles[ player === 2 ? 'active' : '']]}
            >
              <FontAwesome5
                name={"hand-paper"}
                style={[styles.txtWhite, styles.icon]}
                size={50}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => selectTool(3)}
              style={[styles.selectTool, styles.center, styles[ player === 3 ? 'active' : '']]}
            >
              <FontAwesome5
                name={"hand-scissors"}
                style={[styles.txtWhite, styles.icon]}
                size={50}
              />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
export default App;
