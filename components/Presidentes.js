import { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { getPresidents } from "../api/services";

const Presidentes = () => {

    const [presidents, setPresidents] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const presidents = await getPresidents();
            setPresidents(presidents);
        }
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Presidentes de Colombia:</Text>
            {presidents.map(president => (
                <Text key={president.id} style={styles.text}>{president.name}</Text>
            ))}
        </View>
    );
};

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
  

export default Presidentes;