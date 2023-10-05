import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-web";
import {LockFilled} from 'antd'

export default function Hinh2() {
    return ( 
        <View style = { styles.container } >
        <View style = { styles.circle } >
        </View>

        <Text style = { styles.Text } > GROW { '\n' }YOU BISINESS 
        </Text>  
        <Text style = { styles.Text1 } > We will help you to grow business using online server 
        </Text> 

        <View style = { styles.buttons } >
        <TouchableOpacity >
        <View style = { styles.btn } >
        <Text style = { styles.text_3 } > LOGIN 
        </Text>  </View > </TouchableOpacity > <TouchableOpacity >
        <View style = { styles.btn } >
        <Text style = { styles.text_3 } > SIGN IN </Text> </View > </TouchableOpacity>

        </View>   <View style = { styles.Text4 } > HOW VIEW WORKS </View>  <View style = { styles.t } > </View> </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#a5e5f0",
        backgroundImage: "linear-gradient(180deg, rgba(199,244,246,1) 62%, rgba(229,244,245,1) 73%, rgba(209,244,246,1) 81%, rgba(0,204,249,1) 94%)",

        alignItems: "center" //Căn giữa theo cột

        // justifyContent: "center",//Căng giữa theo hàng

    },



    circle: {

        // flex: 1,

        top: 80,

        width: 150,

        height: 150,

        borderStyle: "solid",
        borderRadius: 100,
        borderWidth: 13,
        borderColor: "#000000",
        // justifyContent: center
    },

    Text: {
        // flex: 2,
        top: 85,

        color: "#FFFFFF",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        // bolder: "true",
        marginTop: 20,
        fontFamily: "Arial Narrow",
        color: "black",
        fontWeight: 1000
    },

    Text1: {
        // flex: 2,
        top: 115,
        color: "#FFFFFF",
        fontSize: 23,
        fontWeight: "bold",
        textAlign: "center",
        // bolder: "true",
        marginTop: 20,
        fontFamily: "Arial Narrow",
        color: "black",
        // fontWeight: "bold"
    },

    Text4: {
        top: 160,
        color: "#FFFFFF",
        fontSize: 23,
        fontWeight: "bold",
        textAlign: "center",
        // bolder: "true",
        marginTop: 20,
        fontFamily: "Arial Narrow",
        color: "black"
            // fontWeight: "bold"
    },

    buttons: {
        width: 302,
        top: 160,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btn: {
        width: 119,
        height: 48,
        backgroundColor: 'orange',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    text_3: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'black'

    },

    t: {
        bottom: 200,
        backgroundColor: 'black',
    }

});