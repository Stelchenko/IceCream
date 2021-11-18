import React from "react";
import {View, Text, StyleSheet, Modal, Button} from "react-native"
import Card from "./Card";

const Order = props => {
  return(
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.screen}>
        <Card>
          <View>
            <Text style={{fontSize: 20}}>
              Prise: {props.prise}$
            </Text>
          </View>
          <Button title="Back" onPress={props.onClose}/>
        </Card>

      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default Order