import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
    input:{
       
        width:'100%',
        marginBottom:20,
        paddingLeft:10,
        borderBottomWidth:1,
        borderBottomColor:'gray',
        height:50
    }
})

const Search = ({value, onChange}) => {


    return ( 
        <TextInput
            placeholder="Search Contact"
            style={styles.input}
            placeholderTextColor='black'
            value={value}
            onChangeText={onChange}
        />
     );
}
 
export default Search;