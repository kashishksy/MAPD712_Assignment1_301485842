import { useState } from 'react';
import { StyleSheet, Text, View, Switch, TextInput, Button, TouchableOpacity } from 'react-native';

export default function BMICalculator() {

    //define variables to be used for calculation
    let [height, setHeight] = useState('')
    let [weight, setWeight] = useState('')
    let [bmi, setBmi] = useState(null)
    let [message, setMessage] = useState('')

    //define variables for measurement unit change/toggle
    let [isMetric, setIsMetric] = useState(true)


    //function to change metric state
    const toggleMeasurement = () => {

      setIsMetric(previousState => !previousState)

    }

    const calculateBMI = () => {

      let weightFloat = parseFloat(weight)
      let heightFloat = parseFloat(height)


      //adding validation check to ensure height and weight aren't non numbers or zeroes
      if(!isNaN(weightFloat) && !isNaN(heightFloat) && heightFloat > 0 && weightFloat > 0){

        let calculatedBMI;

        //apply metric formula- kg/m^2
        if(isMetric){
          //convert height in meters first
          const heightInMeters = heightFloat / 100

          //calculating bmi in metric units using formula- bmi = kg/m2
          calculatedBMI = weightFloat / (heightInMeters * heightInMeters)
        } else {

          //converting to imperial units
          calculatedBMI = (weightFloat / (heightFloat * heightFloat)) * 703

        }
        
        setBmi(calculatedBMI.toFixed(2))

          //logic for message to be displayed based on bmi calculation-
        if(calculatedBMI < 18.5){
          setMessage('You are underweight')
        }else if(calculatedBMI >= 18.5 && calculatedBMI < 24.9){
    
          setMessage('You are healthy :)')
        }else if(calculatedBMI >= 25 && calculatedBMI < 29.9){
          setMessage('You are overweight')
        }else {
          setMessage('You are obese')
        }

      } else
      {
        alert('Please enter valid values!')
      }

    }

    return(
        <View style={styles.container}>
            <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>Metric</Text>
                
                <Switch 
                    onValueChange={toggleMeasurement} 
                    value={isMetric} 
                />
                <Text style={styles.switchLabel}>Imperial</Text>
            </View>
            <TextInput
        style={styles.input} 
        placeholderTextColor="rgba(248,244,244,0.5)"
        placeholder={isMetric ? "Enter weight in kg" : "Enter weight in lbs"}
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
       style={styles.input}
       placeholderTextColor="rgba(248,244,244,0.5)"
        placeholder={isMetric ? "Enter height in cm" : "Enter height in inches"}
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
  
  {/* using touchable opacity/text instead of a button to style it properly */}
  <TouchableOpacity style={styles.btnStyle} onPress={calculateBMI} activeOpacity={0.7}>
      <Text style={styles.btnText}>Calculate BMI</Text>
    </TouchableOpacity>
     
     {bmi && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Your BMI: {bmi}</Text>
          <Text style={styles.resultText}>Category: {message}</Text>
        </View>

     )}
      </View>

    )
  
  }

  const styles = StyleSheet.create({
    resultContainer: {
        marginTop: 20,
        color: '#f8f4f4'
      },
      resultText: {
        fontSize: 18,
        textAlign: 'center',
        color: '#f8f4f4'
      },
      input: {
        height: 40,
        borderColor: '#f8f4f4',
        borderWidth: 1,
        marginBottom: 12,
        paddingLeft: 8,
        color: "#f8f4f4"
       
      },
      switchLabel: {
        fontSize: 18,
        marginHorizontal: 10,
        color: '#f8f4f4'
      },
      switchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
      btnStyle: {
        backgroundColor: '#f8f4f4',   
        padding: 15,                  
        borderRadius: 10,             
        borderWidth: 2,               
        borderColor: '#d3d3d3',       
        opacity: 0.9,                 
        alignItems: 'center',         
      },
      btnText: {
        color: '#000',                
        fontWeight: 'bold',
        fontSize: 18,
      },

  })