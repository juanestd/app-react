import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Icon } from "react-native-elements"
import { getColombiaInfo} from '../api/services';




const MainPage = ({navigation}) => {
    const [colombiaInfo, setColombiaInfo] = useState({})

    useEffect(() => {
        async function fetchData() {
            const colombiaData = await getColombiaInfo()
            setColombiaInfo(colombiaData)
        }
        fetchData();
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Icon name='rowing' onPress={() => navigation.navigate('')} />
                )
            }
        })
        
    })

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Información acerca de: {colombiaInfo.name}</Text>
            <Text style={styles.text}>Descripción: {colombiaInfo.description}</Text>       
            <Text style={styles.text}>Capital: {colombiaInfo.stateCapital}</Text>
            <Text style={styles.text}>Superficie: {colombiaInfo.surface}</Text>
            <Text style={styles.text}>Población: {colombiaInfo.population}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    text: {
      fontSize: 16,
      marginVertical: 5,
    },
  });

export default MainPage