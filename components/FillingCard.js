import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import Card from "./Card";

const FillingCard = props => {
  return (
    <Card style={styles.inputContainer}>
      <View style={styles.fillingName}>
        <Text>{props.title}</Text>
      </View>
      <Text>{props.count}</Text>
      <Button title={"+"} onPress={() => {props.onAdd(props.count)}}/>
      <Button title={"-"} color="red" onPress={() => {props.onDecrease(props.count)}}/>
    </Card>
  )

}

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  fillingName: {
    width: 100
  }
})

export default FillingCard;