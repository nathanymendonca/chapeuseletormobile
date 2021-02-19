import React from "react";
import { Button, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet, ImageBackground } from "react-native";

import castelo from '../../components/img/castelo.jpg'

export default function Home(props) {
  const { navigation } = props;
  
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#353839",
      
    }}
      
    >
       <ImageBackground style={styles.background} source={castelo} /> 
      <Text style={{ color: "gold", fontSize: 40, textAlign: 'center' }}>Bem Vindo à Hogwarts
     
      </Text>
      <br></br>
      <Image source={require('../../components/img/hogwarts.png')}
      style={styles.hogwarts}
       />
      <br />
      <TouchableOpacity
        style={{
          backgroundColor: "gold",
          width: 120,
          height: 45,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
          
        }}
        
        title="Ir para Sobre"
        onPress={() => navigation.navigate("Sobre")}
      >
        
        <Text style={{ color: "#000", fontSize: 30 }}>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  hogwarts:{
      width: 200,
      height: 200,
      borderRadius: 100,
      marginBottom: 10,
      shadowOffset:{  width: 100,  height: 100 },
      
    },
    background: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: 500,
      width: "100%",
      height: "100%", 
      position:'absolute'
    },
})