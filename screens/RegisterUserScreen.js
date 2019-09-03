import React, { Component } from 'react'
import { Text, View, Alert, KeyboardAvoidingView, StyleSheet } from 'react-native'
import IconTextInput from '../components/IconTextInput'
import RoundButton from '../components/RoundButton';

export default class RegisterUserScreen extends Component {
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
                        iconName = 'ios-contact'
                        placeholder = "class"
                        />
                    <IconTextInput
                        iconName = 'ios-cash'
                        placeholder = "Balance"
                        />
                    <IconTextInput
                        iconName = 'ios-mail'
                        placeholder = "E-mail"
                        />
                    <IconTextInput
                        iconName = 'ios-arrow-dropleft-circle'
                        placeholder = "firstname"
                    />
                    <IconTextInput
                        iconName = 'ios-arrow-dropright'
                        placeholder = "LastName"
                    />

                    <RoundButton
                        style = {{marginTop:10}}
                        title = {'회원가입하기'}
                        onPress = {() => {
                            Alert.alert(
                                '회원가입',
                                '가입완료',
                                [
                                    {text: 'OK', onPress: () => this.props.navigation.navigate('Login')}
                                    // {text: 'OK', onPress = {()=>{
                                    //     this.props.navigation.navigate('Register')
                                    // }}}
                                ]
                            )
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