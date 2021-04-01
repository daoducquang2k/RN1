import React from 'react';
import { StyleSheet, Text, View,TextInput,Checkbox } from 'react-native';

const LotsOfStyles = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

    return (
      <View style={styles.container}>
       
        <View>
          <Text style={styles.title}>Sign in</Text>
        </View>

        <View style={styles.nhaplieu}>
            <Text>EMAIL ADRESS</Text>
            <TextInput
              style={styles.input}       
              placeholder="abcd@gmail.com"

            />
            <View style={styles.pass}>
                <Text>PASSWORD</Text>
                <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholder="********"
                />
            </View>

           
            <Text style={styles.label}>Do you like React Native?</Text>
            
        </View>
      </View>
      
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:'center',

  },
  pass:{
    marginTop:20,
  },
  nhaplieu:{
    margin:40,
  },
  input: {
    height: 40,
    borderWidth: 1,
  },
});

export default LotsOfStyles;