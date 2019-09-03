import React, { Component } from 'react'
import { Text, View, StyleSheet,KeyboardAvoidingView , Alert } from 'react-native'
import IconTextInput from '../components/IconTextInput'
import RoundButton from '../components/RoundButton'


export default class LoginScreen extends Component {
    render() {
        return (
            <KeyboardAvoidingView 
                style ={{
                    flex:1,
                    flexDirection:'column',
                    justifyContent:'center'
                }}
                behavior='padding'

            >
            <View style={styles.container}>
                <Text
                    style={{
                        fontSize: 30,
                        color:'tomato',
                        marginTop:-20,
                        fontWeight:"200"
                    }}
                
                > 
                   CAR AUCTION
                </Text>
                <IconTextInput 
                    style={{marginTop :10 , marginBottom : 20}}
                    iconName='ios-person'
                    placeholder = "아이디"
                />
                <IconTextInput 
                    style={{marginTop :10}}
                    iconName='ios-mail'
                    placeholder = "이메일"
                />
                <RoundButton 
                    style={{marginTop:10}}
                    title = {'로그인'}
                    onPress = {()=>{
                        Alert.alert(
                            'Alert Title',
                            '로그인하시겠습니까?',
                            [
                                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                                {
                                text: 'Cancel',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                                },
                                {text: 'OK', onPress: () => this.props.navigation.navigate('MyCars')},
                            ],
                            {cancelable: false},
                        )
                    }}
                
                />
                <RoundButton 
                    style={{marginTop:10}}
                    title = {'회원가입'}
                    onPress = {()=>{
                        this.props.navigation.navigate('Register')
                    }}
                
                />
                
            </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignSelf:'center',
        flexDirection:'column',
        padding:30,
        alignItems :'center'
    }
})
 
