import React, {useState} from "react";
import {View, Text, StyleSheet, Modal, Button, Switch} from "react-native";
import Card from "./Card";
import FillingCard from "./FillingCard";

const FillingInput = props => {
  const [countOfChocolate, setCountOfChocolate] = useState(0)
  const [countOfCaramel, setCountOfCaramel] = useState(0)
  const [countOfBerry, setCountOfBerry] = useState(0)
  const [isMarshmallow, setIsMarshmallow] = useState(false)
  const toggleSwitch = () => setIsMarshmallow(previousState => !previousState)

  const chocolateAddHandler = (count) => {
    setCountOfChocolate(count + 1)
  }

  const caramelAddHandler = (count) => {
    setCountOfCaramel(count + 1)
  }

  const berryAddHandler = (count) => {
    setCountOfBerry(count + 1)
  }
  const chocolateDecreaseHandler = (count) => {
    if (countOfChocolate > 0)
      setCountOfChocolate(count - 1)
  }

  const caramelDecreaseHandler = (count) => {
    if (countOfCaramel > 0)
      setCountOfCaramel(count - 1)
  }

  const berryDecreaseHandler = (count) => {
    if (countOfBerry > 0)
      setCountOfBerry(count - 1)
  }

  return (
    <Modal visible={props.visible} animationType={"slide"}>
      <View style={styles.screen}>
        <FillingCard title="Chocolate 5$" count={countOfChocolate} onAdd={chocolateAddHandler} onDecrease={chocolateDecreaseHandler}/>
        <FillingCard title="Caramel 6$" count={countOfCaramel} onAdd={caramelAddHandler} onDecrease={caramelDecreaseHandler}/>
        <FillingCard title="Berry 10$" count={countOfBerry} onAdd={berryAddHandler} onDecrease={berryDecreaseHandler}/>
        <Card style={styles.inputContainer}>
          <Text>Marshmallow 5$</Text>
          <Switch
            trackColor={{false: "#767577", true: "#81b0ff"}}
            thumbColor={isMarshmallow ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isMarshmallow}
          />
        </Card>
        <View style={styles.buttonContainer}>
          <Button title={"Back"} onPress={props.onCancel}></Button>
          <Button title={"Confirm"} onPress={props.onConfirm.bind(this, countOfChocolate, countOfCaramel, countOfBerry, isMarshmallow)}></Button>
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  fillingName: {
    width: 100
  }
})


export default FillingInput