import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';

import axios from 'axios';
import Detail from './Screens/Detail';
import Main from './Screens/Main';

export default function App() {
  // Creates a state variable to hold our data, initially set to null 
  const [ data, setData ] = useState(null);

  // Local dev ==> const localhost = '127.0.0.1';
  const baseURL = 'http://18.118.46.202:3000/videogames';

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(baseURL);
      setData(response.data);
    };

    getData();
  }, []);

  // Protects from runtime errors I'd get if I tried to access data that
  // hadn't come back yet from API call
  if(data === null) {
    return (
      <>
        <View>
          <Text>Loading data...</Text>
        </View>
      </>
    )
  }


  return (
    <>
      <Main data={data} />
      <StatusBar style="auto" />
    </>
  );
}

