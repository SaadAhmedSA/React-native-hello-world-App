import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View style={{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
      
     
      
    }}>
      <Text style={{color:"white" ,fontSize:30, fontWeight:"bold"}}>Hello React Native</Text>
      <Text style={{color:"white" ,fontSize:30, fontWeight:"bold",textDecorationLine:"underline"}}><Link href={"about"}>About</Link></Text>
    </View>
  )
}

export default Home