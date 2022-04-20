import { StyleSheet, Text, View } from 'react-native';

const Main = () => {
    return (
        <View style={styles.container}>
            <Text>Main Screen</Text>
        </View>
  
    );
}

export default Main;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  