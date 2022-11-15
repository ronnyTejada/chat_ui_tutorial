import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../../utils/Constants";
import { getRamdonColor } from "../../utils/Scripts";

const styles = StyleSheet.create({
    contact__wrapper:{
        flexDirection:'row',
        height:100,
        paddingTop:10,
        borderBottomWidth:1,
        borderBottomColor:'gray',
        paddingLeft:10,
        paddingRight:10,
      
    },   
    contact__avatar_text:{
        color:'white',
        fontWeight:'700'
    },
    contact__wrapp:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:80
    },
    contact__text_section:{
        marginLeft:20,

    },
    contact__text_title:{
        fontWeight:'800',
        marginBottom:5
    },
    contact__text_msg:{
        color:'gray'
    },
    contact__text_time:{
        color:'gray'
    },  
    

})

const Contact = ({name, msg, time}) => {

    const style_avatar = {
        width:50,
        height:50,
        backgroundColor:getRamdonColor(),
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    }
    return (  
        <TouchableOpacity style={styles.contact__wrapper}>
            <View style={style_avatar}>
                <Text style={styles.contact__avatar_text}>{name.slice(0,1)}</Text>
            </View>

           <View style={styles.contact__wrapp}>
           <View style={styles.contact__text_section}>
                <Text style={styles.contact__text_title}>{name}</Text>
                <Text style={styles.contact__text_msg}>{msg}</Text>
            </View>

            <Text style={styles.contact__text_time}>{time}</Text>
           </View>
           
        </TouchableOpacity>
    );
}
 
export default Contact;