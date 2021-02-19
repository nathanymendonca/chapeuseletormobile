import React from 'react';
import { SafeAreaView, Text, Image, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';

import salao from '../../components/img/salao.jpg'
// import User from './components/User'
// import Users from './'


export default function Sobre({ navigation }) {
    return (
        <SafeAreaView 
        ImageBackground style={styles.background} source={salao} 
            style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#353839",
                  }}


        >
<ImageBackground style={styles.background} source={salao} />
          
      
            <Text style={{ color: "gold", fontSize: 40, }}>Chapéu Seletor</Text>
           <Text style={{color: '#c08457', textAlign: 'center'}}> <p>(...)Ah, vocês podem me achar pouco atraente,
            mas não me julguem pela aparência
            Engulo a mim mesmo se puderem encontrar
            um chapéu mais inteligente do que o papai aqui.

            Podem guardar seus chapéus-coco bem pretos,
            suas cartolas altas de cetim brilhoso
            porque eu sou o Chapéu Seletor de Hogwarts
            E dou de dez a zero em qualquer outro chapéu.</p>

            <p>Não há nada escondido em sua cabeça
            que o Chapéu Seletor não consiga ver,
            por isso é só me porem na cabeça que vou dizer
            em que casa de Hogwarts deverão ficar.(...)</p>
            </Text>

            <Image source={require('../../components/img/chapeu.png')}
                style={styles.chapeu}
            />

<TouchableOpacity
        style={{
          backgroundColor: "gold",
          width: 150,
          height: 43,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
          
        }}
        title="Ir para Sobre"
        onPress={() => navigation.navigate("Casas")}
      >
        <Text style={{ color: "#000", fontSize: 20, }}>Escolha sua casa</Text>
      </TouchableOpacity>

        </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    chapeu: {
        width: 200,
        height: 180,
        borderRadius: 100,
        
        margin: 10

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
