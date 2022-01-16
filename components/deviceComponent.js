import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

const DeviceComponent = (props: any) => {

  return (
    <View style={styles.fixedRatio} >
        <Text style={styles.text}>{props.name}</Text>
        <Text style={styles.textPlace}>{props.place}</Text>
    </View>
  );
 }

const styles = StyleSheet.create({
  fixedRatio: {
    backgroundColor: '#90DDD4',
    borderWidth: 1,
    borderColor: 'lightgray',
    flexBasis: '44%',
    alignItems: 'center',
    flex: 1,
    aspectRatio: 1,
    margin: '3%'
  },
  text: {
    fontSize: 30,
    letterSpacing: 0.25,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 5
  },
  textPlace: {
    fontSize: 25,
    letterSpacing: 0.25,
    color: 'black',
    textAlign: 'center'
  },
});

export default DeviceComponent;