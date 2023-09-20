import { Text, TouchableOpacity, View,StyleSheet} from "react-native"
import { Avatar, TextInput , Button } from 'react-native-paper';



const LoginView = ({navigation}) =>{
    return (
        <View>
           
           <Avatar.Text size={128} label="CS"
           style={estilo.jogo} />

           <View style={estilo.body}>

           <TextInput
            label="login"
            placeholder="informe o login"
            />
            <TextInput
            label="senha"
            placeholder="informe a senha"
            secureTextEntry
            right={<TextInput.Icon icon="eye" />}
            />

        <Button icon="account-check" mode="contained" onPress={() => console.log('Pressed')}>
            LOGAR
            </Button>
           </View>
        </View>
        
    )
}

export default LoginView

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        alingItems: 'center',
        justifyContent:'space-between'
    },
    logo:{
        flex: 1,
        margin: 25,
    },
    body:{
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
    }
})
