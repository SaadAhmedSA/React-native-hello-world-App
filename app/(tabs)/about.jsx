import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
  return (
    <View style={{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
      
     
      
    }}>
      <Text style={{color:"white" ,fontSize:30, fontWeight:"bold"}}>Hello About</Text>
      <Text style={{color:"white" ,fontSize:30, fontWeight:"bold", textDecorationLine:"underline"}}><Link href="/">Go to Home </Link></Text>
    </View>
  )
}

export default About