import { StyleSheet, Text, View } from 'react-native';

const Detail = () => {
    return (
        <View style={styles.container}>
            <Text>Detail Screen</Text>
        </View>
  
    );
}

export default Detail;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  