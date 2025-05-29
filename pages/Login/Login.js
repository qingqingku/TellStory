import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import font from '../../assets/fonts/站酷快乐体2016修订版.ttf';
import BackImage from '../../assets/images/进入app2.png';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

export default function App() {
    const [fontsLoaded] = useFonts({
      'HanYiTaoZaiZiJian': font,
    });

    const scale = useSharedValue(0.3); //  始终调用 Hooks
    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: fontsLoaded ? scale.value : 0.5 }], // 根据 fontsLoaded 调整动画
    }));

    React.useEffect(() => {
      if (fontsLoaded) {
        scale.value = withSpring(1, { damping: 2 }); // 仅在字体加载后触发动画
      }
    }, [fontsLoaded]); // 依赖项包含 fontsLoaded

    if (!fontsLoaded) return null; // 现在安全，因为所有 Hooks 已调用

  return (
    <View>
      <ImageBackground
        source={BackImage}
        style={styles.backgroundImage}
        resizeMode='cover'
      >
      <Animated.Text style={[styles.text, animatedStyle]}>中国故事说一说，咕噜咕噜画出来</Animated.Text>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  text: {
    top: 520,
    color: '#07524D',
    fontSize: 30,
    lineHeight: 84,
    // fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'HanYiTaoZaiZiJian',
  }
});
