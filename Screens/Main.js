import { StyleSheet, Text, View, Image } from 'react-native';
import { FlatList } from 'react-native';

const Main = (props) => {

    const GameItem = ({item}) => {
        console.log(item.item);
        return (
            <View style={styles.itemContainer}>
                <View style={styles.left}>
                    <Text style={styles.title}>{item.item.title}</Text>
                    <Text style={styles.otherText}>{item.item.developer}</Text>
                    <Text style={styles.otherText}>{item.item.publisher}</Text>
                </View>
                <View style={styles.right}>
                    <Image style={styles.gameImage} source={{ uri: 'https://www.vgchartz.com'+item.item.img }} />
                </View>
            </View>
        );
    };


    return (
        <View style={styles.container}>
            <FlatList data={props.data} renderItem={(item) => GameItem({item})} keyExtractor={item => item.id} />
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
      flexDirection: 'column'
    },
    itemContainer: {
        backgroundColor: '#dddddd',
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 2,
        flexDirection: 'row',
        display: 'flex'
    },
    left: {
        width: '75%'
    }, 
    right: {
        width: '25%'
    },
    title: {
        fontSize: 18,
        color: '#000000'
    },
    otherText: {
        fontSize: 14,
        color: '#444444'
    },
    gameImage: {
        width: '100%',
        height: 80,
        resizeMode: 'contain'

    }

  });
  