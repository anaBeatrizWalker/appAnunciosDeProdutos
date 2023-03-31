import { Text, View, StyleSheet, Image } from 'react-native';

export default function Anuncio(props){
  return (
    <View style={styles.container}>
      <Image style={styles.anuncio} source={{uri: props.url}} />
      <Text style={styles.titulo}>{props.titulo}</Text>
      <Text style={styles.texto}>{props.texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: 300,
    height: "auto",
    padding: 24,
    border: "solid thin #DEDEDE",
    borderRadius: 10,
    backgroundColor: '#F2F2F2',
    margin: 3
  },
  anuncio: {
    height: 250,
    width: 250,
  },
  titulo: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  texto: {
    marginTop: 20,
    fontSize: 16
  }
});
