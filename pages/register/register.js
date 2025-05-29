import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View, ImageBackground, Image, Pressable, TextInput } from 'react-native';
import BackImage from '../../assets/images/注册.png';
import ButtonImage from '../../assets/images/取消按钮.png';
import Coolfont from '../../assets/fonts/站酷快乐体2016修订版.ttf';
import TextInputBar from './component/TextInputBar';

export default function App() {
  
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'coolfont': Coolfont,
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);
  return (
    <View>
      <ImageBackground
        source={BackImage}
        style={styles.backgroundImage}
        resizeMode='cover'
      >
        {/* 账号注册 */}
        {/* <View style={styles.container}>
            <Text style={styles.text}>账号注册</Text>
            <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
                <Text style={styles.buttonLabel}>立即注册</Text>
            </Pressable>
        </View> */}
        {/* 账号注册 */}
        <View style={styles.container}>
            <Text style={styles.text}>账号登录</Text>
            <TextInputBar/>
            <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
                <Text style={styles.buttonLabel}>立即登录</Text>
            </Pressable>
        </View>
        {/* 取消按钮 */}
        <Image
            source={ButtonImage}
            style={styles.image}
        ></Image>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  container: {
    // alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 275,
    left: 434,
    backgroundColor: '#fff',
    width: 326,
    height: 289,
    margin: 0,       // 确保无外边距
    padding: 0,      // 确保无内边距
  },
  image: {
      position: 'absolute',
      marginTop: 205,      // 上边距
      marginLeft: 856,     // 左边距
  },
  text: {
    position: 'absolute',
    top: 0,
    color: '#07524D',
    // backgroundColor: '#ffa',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'coolfont',
  },
  inputButton: {
    position: 'absolute',
    width: 250,
    height: 40,
    top: 50,
    backgroundColor: '#F2F2F2',
    borderRadius: 50,
  },
  button: {
    position: 'absolute',
    bottom: 25,
    borderRadius: 60,
    width: 160,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#30A0FC',
  },
  buttonLabel: {
    color: '#FFF',
    fontSize: 24,
    fontFamily: 'coolfont',
  },
});