import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const User = ({nome}) => {
  return (
      <View style={styles.container}>
          <Text>Nome:{nome}</Text>
          
      </View>
      )
}

export default User;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: "#ffe76d",
    }
})