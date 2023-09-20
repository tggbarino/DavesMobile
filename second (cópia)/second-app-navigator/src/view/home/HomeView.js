import { Text, TouchableOpacity, View } from "react-native"



const HomeView = ({navigation}) =>{ // o parametro tem que ser esse nome
    return (
        <View>
            <Text>HOME</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('telaLogin')}}> 
                <Text>LOGAR</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                navigation.navigate('telaCad')
            }}>
                <Text>Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeView