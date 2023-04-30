import { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { getTourists } from "../api/services";

const Touristso = () => {

    const [Tourists, setTourists] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const Tourists = await getTourists();
            setTourists(Tourists);
        }
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Touristso de Colombia:</Text>
            {Tourists.map(turis => (
                <Text key={turis.id} style={styles.text}>{turis.name}</Text>
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

export default Touristso;