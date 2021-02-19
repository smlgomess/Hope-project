import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hope Project</Text>     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4406a1',
    height: 90,
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text:{
      fontWeight: 'bold',
      fontSize: 24,
      lineHeight: 27,
      letterSpacing: -0.24,
      color: '#FFF',
      fontFamily: 'OpenSans_700Bold'
  }
});

export default Header;
