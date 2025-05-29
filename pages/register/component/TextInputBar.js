import { StyleSheet, TextInput} from 'react-native';

const TextInputBar = ({
  placeholder = "密码",
  placeholderTextColor = "#999",
  secureTextEntry = true,
  showToggle = true,  // 是否显示切换按钮
  iconColor = "gray",
  iconSize = 24,
  style = {},
  inputStyle = {},
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState(!secureTextEntry);

  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={!showPassword}
        {...props}
      />
      {showToggle && (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons
            name={showPassword ? 'eye-off' : 'eye'}
            size={iconSize}
            color={iconColor}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    padding: 8,
  },
});

export default TextInputBar;