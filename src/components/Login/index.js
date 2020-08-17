import { StyleSheet, Dimensions } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')

export default StyleSheet.create({
    background: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginbox: {
        backgroundColor: 'white',
        shadowColor: 'grey',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
        borderRadius: 20,
        paddingTop: 40,
        paddingBottom: 40,
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
    },
    logincontainer: {
        flex: 1,
        alignItems: 'center',
    }, 
    logintext: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.5,
    },
    inputpass: {
        width: WIDTH - 100,
        height: 45,
        borderRadius: 15,
        fontSize: 13,
        paddingLeft: 15,
        backgroundColor: '#c5c9cc79',
        color: 'black',
        marginHorizontal: 25,
        marginTop: 20,
    },
    footer: {
        width: WIDTH,
        paddingLeft: 15,
        borderRadius: 15,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomEndRadius: 30,
        borderBottomStartRadius: 30,
    },
    btnLogin: {
        width: WIDTH - 100,
        height: 45,
        borderRadius: 15,
        paddingLeft: 15,
        backgroundColor: 'orange',
        marginTop: 35,
        justifyContent: 'center',
        marginHorizontal: 25,
        alignItems: 'center'
    },
    text: {
        color: 'rgba(255,255,255,0.7)',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    action: {
        flexDirection: 'row',
        marginTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    bottom: {
        flexDirection: 'row',
        marginTop: 10,
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
      },
    section: {
        flexDirection: 'row',
        backgroundColor: '#c5c9cc79',
        width: WIDTH - 100,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 15,
        marginHorizontal: 25,
    },
    icon: {
        borderRightWidth: 1,
        borderRightColor: 'gray',
        paddingRight: 10
    },
    input: {
        borderRadius: 15,
        fontSize: 13,
        paddingLeft: 15,
        color: 'black',
    },
    textInput: {
        paddingLeft: 10,
        justifyContent: 'center'
    },
    checkbox: {
        alignSelf: "center",
      },
});