import { Image, ImageBackground, TextInput, TouchableOpacity, View, Text, Modal } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function ContactUs() {
    
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const navigation = useNavigation();
    function handleNavigate() {
        navigation.navigate('Confirm')
    }

    const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsModalVisible(false);
  };

  const renderOptions = () => {
    const options = ['Service', 'Payment', 'Sales', 'Other'];
    return options.map((option, index) => (
      <TouchableOpacity key={index} style={{paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#ccc'}} onPress={() => handleSelectOption(option)}>
        <Text style={{fontSize: 30}}>{option}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={{ flex: 1, width: '100%', height: '100%', alignItems: 'center' }}>
    <ImageBackground source={require('../assets/image/contact.png')} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
        <Image source={require('../assets/image/titlecontact.png')} style={{ width: '90%', height: '30%', objectFit: 'contain', marginTop: 30 }} />
        <View style={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.45)', width: '80%', paddingTop: 60, paddingBottom: 46, marginTop: 80, justifyContent: 'center' }}>
            
        <Text style={{color: 'white', fontWeight: 'bold', marginBottom: 5}}>Select an option:</Text>
      <TouchableOpacity style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10}} onPress={() => setIsModalVisible(true)}>
        <Text style={{color: 'white', textAlign: 'center',fontSize: 16}}>{selectedOption || 'Seleccionar'}</Text>
      </TouchableOpacity>
      <Modal visible={isModalVisible} animationType="slide">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
          <View style={{backgroundColor: '#fff', padding: 20, borderRadius: 5}}>{renderOptions()}</View>
        </View>
      </Modal>
            
            <TextInput style={{ width: '88%', fontSize: 18, color: 'white'}} placeholderTextColor='rgba(255, 255, 255, 0.8)' placeholder="NAME" value={name} onChangeText={setName}/>
            <View style={{ borderColor: 'white', width: '90%', height: 1, borderWidth: 1, marginBottom: 20 }} />

            <TextInput style={{ width: '88%', fontSize: 18, color: 'white' }} placeholderTextColor='rgba(255, 255, 255, 0.8)' placeholder="PHONE" value={phone} onChangeText={setPhone}/>
            <View style={{ borderColor: 'white', width: '90%', height: 1, borderWidth: 1, marginBottom: 20 }} />

            <TextInput style={{ width: '88%', fontSize: 18, color: 'white' }} placeholderTextColor='rgba(255, 255, 255, 0.8)' placeholder="EMAIL" value={email} onChangeText={setEmail}/>
            <View style={{ borderColor: 'white', width: '90%', height: 1, borderWidth: 1, marginBottom: 20 }} />

            <TextInput style={{ color: 'white', height: 120, width: 250, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, paddingHorizontal: 10, textAlignVertical: 'top', fontSize: 16}} multiline={true} numberOfLines={4} value={message} onChangeText={setMessage}/>
        
        <TouchableOpacity onPress={handleNavigate} activeOpacity={0.8} style={{ backgroundColor: 'black', marginTop: 40 }}>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 600, paddingHorizontal: 40, paddingVertical: 10 }}>Send</Text>
        </TouchableOpacity>
    </View>
    </ImageBackground>
</View>
  )
}