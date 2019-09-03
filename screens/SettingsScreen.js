import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import IconText from '../components/IconText'

export default class SettingsScreen extends Component {
    render() {
        return (
                <TouchableOpacity
                style = {{
                    flex :1,
                    alignItems : 'center',
                    justifyContent : 'center'
                }}
                onPress = {()=>{
                    this.props.navigation.navigate('Login')
                }}
                >
                    <IconText
                        size = {20}
                        iconName = {'ios-log-out'}
                    >로그아웃</IconText>
                </TouchableOpacity>
        )
    }
}
