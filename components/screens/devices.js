import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Pressable, TextInput, RefreshControl, ScrollView } from 'react-native';
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import DeviceComponent from '../deviceComponent';
import Modal from 'react-native-modal';

export default function Devices() {

  const [componentValuesArray, setArray] = useState([
  {name: 'Lampa', place: 'Kuchnia', command: 'xyz', color: '#7DE5A9'},
  {name: 'Firanka', place: 'Salon', command: 'xyz', color: '#90DDD4'},
  {name: 'Firanka', place: 'Salon', command: 'xyz', color: '#90DDD4'}
  ]);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [place, setPlace] = useState('');
    const [command, setCommand] = useState('');
    const [color, setColor] = useState('');
    const [refreshing, setRefreshing] = useState(false);

    const handleModal = () => {
      setIsModalVisible(() => !isModalVisible)
    };

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false)
      }, 2000);
    }, []);

    const submitNewDevice = () => {
      let componentValues = {name: name, place: place, command: command, color: color}
      componentValuesArray.push(componentValues)
      console.log(componentValuesArray)
    };

    const _renderModalContent = () => (
      <View style={styles.modalContent}>    
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={ name => setName(name)}
              value={name}
            />
            <TextInput
              style={styles.input}
              placeholder="Place"
              onChangeText={place => setPlace(place)}
              value={place}
            />
            <TextInput
              style={styles.input}
              placeholder="Command"
              onChangeText={command => setCommand(command)}
              value={command}
            />
            <TextInput
              style={styles.input}
              placeholder="Color"
              onChangeText={color => setColor(color)}
              value={color}
            />
          <View style={{ flexDirection: 'row' }}>
            <Pressable style={styles.buttonModal} onPress={submitNewDevice}>
              <Text>Submit</Text>
            </Pressable>
            <Pressable style={styles.buttonModal} onPress={handleModal}>
              <Text>Close</Text>
            </Pressable>
          </View>
        </View>
    );

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
      >
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {componentValuesArray.map((item, key: number) => {
            return (
              <DeviceComponent key={key} 
              name = {item.name}
              place = {item.place}
              command = {item.command}
              color = {item.color}
              />
            );
          })}
        </View>
      </ScrollView>

        <Pressable
        onPress={handleModal}
        style={styles.addButton}>
          <Text style={styles.textButton}>+</Text>
        </Pressable>

        <Modal 
          isVisible={isModalVisible}
          animationType = {'slide'} >
            {_renderModalContent()}
        </Modal>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  addButton: {
    flex: 1,
    flexDirection:'row',
    position:'absolute',
    alignItems: 'center',
    width:50,
    height:50,
    bottom:10,
    right:0,
    margin:10,
    alignSelf: "center",
    justifyContent: "space-between",
    backgroundColor: '#B3DD90',
    borderColor:'rgba(0,0,0,0.2)',
    borderWidth: 1,
    borderRadius: 50
  },
  textButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 35,
    letterSpacing: 0.25,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '30%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  buttonModal: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  }
});
