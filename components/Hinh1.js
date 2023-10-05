import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function Hinh1() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <Text style={styles.Text}>
        {' '}
        GROW {'\n'}
        YOU BISINESS{' '}
      </Text>{' '}
      <Text style={styles.Text}> YOU BISINESS </Text>{' '}
      <Text style={styles.Text1}>
        {' '}
        We will help you to grow business using online server{' '}
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.text_3}> LOGIN </Text>{' '}
          </View>{' '}
        </TouchableOpacity>{' '}
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.text_3}> SIGN IN </Text>{' '}
          </View>{' '}
        </TouchableOpacity>
      </View>{' '}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81DAF5',
    alignItems: 'center', //Căn giữa theo cột
    // justifyContent: "center",//Căng giữa theo hàng
  },

  circle: {
    // flex: 1,
    top: 115,
    width: 180,
    height: 180,
    borderStyle: 'solid',
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    borderWidth: 15,
    borderColor: '#000000',
    backgroundColor: '#81DAF5',
    // justifyContent: center
  },

  Text: {
    // flex: 2,
    top: 130,
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    // bolder: "true",
    marginTop: 20,
    fontFamily: 'Arial Narrow',
    color: 'black',
    fontWeight: 1000,
  },

  Text1: {
    // flex: 2,
    top: 160,
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    // bolder: "true",
    marginTop: 20,
    fontFamily: 'Arial Narrow',
    color: 'black',
    // fontWeight: "bold"
  },

  buttons: {
    width: 302,
    top: 210,
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    color: 'black',
  },
});
