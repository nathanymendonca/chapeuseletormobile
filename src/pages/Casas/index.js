import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, FlatList, Image, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import escadas from '../../components/img/escadas.jpg'

 // pare verificação do retorno na página utilizando o formulário,
 // é preciso descomentar o código abaixo

// import User from '../../components/User'


// const dados = [
//     {
//         id: Math.random(),
//         nome: "Grifinoria",
        

//     },
//     {
//         id: Math.random(),
//         nome: "Lufa-Lufa",
        

//     },
//     {
//         id: Math.random(),
//         nome: "Sonserina",
        

//     },
//     {
//         id: Math.random(),
//         nome: "Corvinal",
        

//     },
// ]





export default function Casas({ navigation }) {
    return (
        <SafeAreaView style={styles.container}
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#353839",
            }}
        >
<ImageBackground style={styles.background} source={escadas} />
            <Text style={{ color: "gold", fontSize: 20, textAlign: 'center' }}>
                Não adianta trapacear, pois o chapéu seletor tudo saberá</Text>


            {/* <View style={styles.containerUsers}>
                <FlatList
                    data={dados}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={({ item }) => (
                        <User nome={item.nome} />
                    )}
                /> */}

<Image
        source={require("../../components/img/grifinoria.jpg")}
           style={{width: 180, height: 120, margin: 5}}>
                </Image>

                
<Image
        source={require("../../components/img/lufalufa.jpg")}
           style={{width: 180, height: 120, margin: 5}}>
                </Image>

                
<Image
        source={require("../../components/img/sonserina.jpg")}
           style={{width: 180, height: 120, margin: 5}}>
                </Image>

                
<Image
        source={require("../../components/img/corvinal.jpg")}
           style={{width: 180, height: 120, margin: 5}}>
                </Image>
            
            
        </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    
      alignItems: 'center',
      justifyContent: 'center',
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
