import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { getRegionesColombia } from '../api/services';

const Regiones = () => { 

    const [regionesColombia, setRegionesColombia] = useState([]);    
    
  
    useEffect(() => {
        async function fetchData() {
          const regionesColombia = await getRegionesColombia();
          setRegionesColombia(regionesColombia);      
        }
        fetchData();
      }, []);

  
    return (
      <View style={styles.container}>          
  
        <Text style={styles.title}>Regiones de Colombia</Text>
        {regionesColombia.map(region => (
          <Text key={region.id} style={styles.text}>{region.name}</Text>
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
  
export default Regiones;
