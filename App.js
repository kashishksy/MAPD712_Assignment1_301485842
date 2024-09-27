import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import BMICalculator from './bmiCalculator';

export default function App() {
  
 
    return (
    <View style={styles.container}>
       <Text style={styles.title}>BMI Calculator</Text>
     
      <BMICalculator />
    
    </View>
    );
  }



  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ac87c9',
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#f8f4f4'
  },
});
