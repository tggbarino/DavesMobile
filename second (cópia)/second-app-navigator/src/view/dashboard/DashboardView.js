import { Text, TouchableOpacity, View } from "react-native"



const DashboardView = ({navigation}) =>{ // o parametro tem que ser esse nome
    return (
        <View>
            <Text>Dashboard</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('telaLogin')}}> 
                <Text>SAIR</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DashboardView