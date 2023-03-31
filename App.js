import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Anuncio from './components/Anuncio';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Anúncios</Text>
        
        <ScrollView horizontal={true}>
          <View style={styles.box1}>
            <Anuncio 
              url="https://www.designi.com.br/images/preview/10002123.jpg" 
              titulo="Compre 3, ganhe mais 1: promoção imperdível de hambúrgueres!" 
              texto="Aproveite agora a nossa promoção especial de hambúrgueres: na compra de 3 unidades, você leva mais 1 de brinde! Saboreie nossos deliciosos hambúrgueres artesanais e ainda economize. Não perca tempo e venha conferir!"/>
          </View>
          <View style={styles.box2}>
            <Anuncio 
                url="https://i.pinimg.com/originals/87/e2/bc/87e2bc70ba766ac7cc9ecd0e82dc8560.jpg" 
                titulo="A combinação perfeita para o seu jantar!" 
                texto="Nada melhor do que uma pizza quentinha acompanhada de um delicioso refrigerante, não é mesmo? E agora, na compra de 2 pizzas, você ainda ganha um refrigerante de 2 litros! Aproveite já essa promoção exclusiva e faça seu pedido agora mesmo."/>
          </View>
          <View style={styles.box3}>
            <Anuncio 
                url="https://www.designi.com.br/images/preview/10001542.jpg" 
                titulo="Promoção de Heineken: a cerveja premium que cabe no seu bolso!" 
                texto="Não deixe de aproveitar nossas ofertas imperdíveis de Heineken, a cerveja premium mais vendida do mundo! Compre agora e ganhe descontos especiais em nossa loja. Saboreie o sabor inconfundível da Heineken, uma cerveja leve, refrescante e perfeita para acompanhar seus momentos de lazer. "/>
          </View>
          <View style={styles.box4}>
            <Anuncio 
              url="https://i.pinimg.com/originals/19/ff/de/19ffde2aafdfe56624cfb6e1e5f79d94.jpg" 
              titulo="Arrase no estilo sem gastar muito" 
              texto="Chegou a hora de renovar o guarda-roupa e arrasar no estilo sem gastar muito! Em nossa loja de roupas, temos uma grande variedade de peças incríveis para todos os gostos e tamanhos, com descontos imperdíveis de até 50%. "/>
          </View>
          <View style={styles.box1}>
            <Anuncio 
              url="https://www.stylefeetbr.com.br/image/cache/catalog/118127475_391234735171500_8633073952345897332_n-800x800.jpg" 
              titulo="Dois tênis pelo preço de um" 
              texto="Está precisando renovar seu armário de calçados? Então aproveite agora nossa promoção exclusiva de dois tênis pelo preço de um! Temos modelos para todos os estilos e gostos, desde os mais casuais até os mais esportivos, de marcas renomadas e com descontos incríveis."/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FCFCFC',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});