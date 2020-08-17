import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Image,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    CheckBox,
    Alert
} from 'react-native';

//import { createStackNavigator, createAppContainer } from "react-navigation";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from './index.js';
import Api from '../../api/allApi';


import bgImage from '../../assets/image/bgImage.jpg';

// import Home from '../Home/home';

const { width: WIDTH } = Dimensions.get('window')


export default class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            enable: false,
            checked: true,
        }
    }
    
    

    signIn() {
        if (this.state.username !== '' && this.state.password !== ''){
            // Alert.alert(this.state.username, this.state.password)
            let signInPayload = {
                username : this.state.username,
                password : this.state.password
            }

            Api.SignIn(signInPayload)
            .then(res => {
                if (res.data.token){
                    Alert.alert(res.data.token)
                    this.props.navigation.navigate('Home')
                }
            })
        }
    }

    render() {
        return (
            <ImageBackground source={bgImage} style={styles.background}>
                <View style={styles.logincontainer}>
                    {this.state.enable == false ?
                        <Text style={[styles.text, { justifyContent: 'center', top: WIDTH - 100 }]}> Welcome</Text>
                        :
                        <Text style={[styles.text, { justifyContent: 'center', top: WIDTH - 250 }]}> Welcome</Text>
                    }
                </View>
                {this.state.enable == false ?
                    <View style={[styles.footer, { flex: 0.5 }]} >
                        <TouchableOpacity style={[styles.btnLogin, { marginTop: 50 }]}>
                            <Text style={[styles.title, { marginTop: 1 }]} onPress={() => this.setState({ enable: true })} >เข้าสู่ระบบ</Text>
                        </TouchableOpacity>
                        <View style={styles.action} />
                    </View>
                    : <View style={[styles.footer, { flex: 2 }]}>
                        <Text style={[styles.title, { marginTop: WIDTH - 330, top: -40, left: 22 }]}> Username </Text>
                        <View style={[styles.section, { marginTop: WIDTH / 40 - 30 }]}>
                            <View style={styles.icon}>
                                <FontAwesome
                                    name="user-o"
                                    color="gray"
                                    size={20}
                                />
                            </View>
                            <View style={styles.input}>
                                <TextInput
                                    placeholder="Your username"
                                    style={styles.textInput}
                                    onChangeText={(username) => this.setState({ username })}
                                    value={this.state.username}
                                />
                            </View>
                        </View>
                        <Text style={[styles.title, { marginTop: 10, top: 10, left: 22 }]}> Password </Text>
                        <View style={[styles.section, { marginTop: 15 }]}>
                            <View style={styles.icon}>
                                <MaterialIcons
                                    name="lock"
                                    color="gray"
                                    size={20}
                                />
                            </View>
                            <View style={styles.input}>
                                <TextInput
                                    secureTextEntry
                                    placeholder="Your password..."
                                    style={styles.textInput}
                                    onChangeText={(password) => this.setState({ password })}
                                    value={this.state.password}
                                />
                            </View>
                        </View>
                   
                        <View style={styles.checkboxContainer}>
                            {/* <CheckBox
                                value={this.state.checked}
                                onValueChange={() => this.setState({checked})}
                                style={styles.checkbox}
                            /> */}
                        </View>

                        <TouchableOpacity style={[styles.btnLogin, { marginTop: 20 }]}>
                            <Text style={[styles.title, { marginTop: 1, justifyContent: 'center' }]} onPress={() => this.signIn()} >ล็อกอิน</Text>
                        </TouchableOpacity>

                        <View style={styles.action} />

                    </View>}
            </ImageBackground>
        );
    }
}