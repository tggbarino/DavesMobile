import { Text, TouchableOpacity, View } from "react-native"



const CadastroView = ({navigation}) =>{ // o parametro tem que ser esse nome
    return (
        <View>
            <Text>Cadastro</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('telaLogin')}}> 
                <Text>SAIR</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CadastroView