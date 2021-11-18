import React, {useState} from "react";
import {View, StyleSheet, Text, Button} from 'react-native'
import Card from "../components/Card";
import Colors from '../constants/colors'
import FillingInput from "../components/FillingInput"
import Order from "../components/Order";

const StartScreen = props => {
  const [isFillingMode, setIsFillingMode] = useState(false)
  const [isOrderMode, setIsOrderMode] = useState(false)
  const [cup, setCup] = useState({cupSize: '', prise: 25})
  const [prise, setPrise] = useState(0)
  const CupButtonHandler = (cupSize) => {
    switch (cupSize){
      case 'big':
        setIsFillingMode(true)
        setCup({cupSize: 'big', prise: 25})
        break
      case 'small':
        setIsFillingMode(true)
        setCup({cupSize: 'small', prise: 10})
        break
    }
  }

  const cancelFillingHandler = () => {
    setIsFillingMode(false);
  }
  const confirmFilling = (countOfChocolate, countOfCaramel, countOfBerry, isMarshmallow) => {
    if (countOfChocolate > 0 || countOfBerry > 0 || countOfCaramel > 0) {
      setIsOrderMode(true);
      setIsFillingMode(false)
      setPrise(checkPrise(cup, countOfChocolate, countOfCaramel, countOfBerry, isMarshmallow))
    }
  }
  const closeOrderMode = () => {
    setIsFillingMode(false)
    setIsOrderMode(false)
  }

  const checkPrise = (cup, countOfChocolate, countOfCaramel, countOfBerry, isMarshmellow) => {
    let prise = cup.prise + countOfChocolate * 5 + countOfCaramel * 6 + countOfBerry * 10
    return isMarshmellow ? prise + 5 : prise

  }

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Select a cup</Text>

      <FillingInput visible={isFillingMode} onCancel={cancelFillingHandler} onConfirm={confirmFilling}/>
      <Order visible={isOrderMode} onClose={closeOrderMode} prise={prise}></Order>
      <Card style={styles.inputContainer}>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title={"Big (25$)"} onPress={() => {CupButtonHandler('big')}} color={Colors.accent}/>
          </View>
          <View style={styles.button}>
            <Button title={"Small (10$)"} onPress={() => {CupButtonHandler('small')}} color={Colors.primary}/>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 110,
  },
  input: {
    width: 50,
    textAlign: "center",
  }
});

export default StartScreen;
