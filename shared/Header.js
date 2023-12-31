import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { auth } from "../Connection/dbconfig";
import { signOut } from "firebase/auth";
import { Alert } from "react-native";
const Header = (props) => {
  const { navigation } = props;
  return (
    <View
      style={{
        borderBottomLeftRadius: 22,
        borderBottomRightRadius: 22,
        padding: 6,
        backgroundColor: "#2C3135",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "KaushanScript",
            fontSize: 35,
            color: "white",
          }}
        >
          Rosted
        </Text>

        

      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 5,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", gap: 5 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Ionicons
              style={{ backgroundColor: "white", borderRadius: 5 }}
              name="arrow-back"
              size={30}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => 
          {
            Alert.alert('Sigout','You are about to sign out',[
              {
                text:'leave',
                onPress:()=>{
                try {
                  signOut(auth).then(()=>{
                    navigation.navigate("Login");
                  }).catch(err=>{console.log(err)})
                } catch (error) {
                  console.log(error);
                }
              }},
              {text:'stay',onPress:()=>{}}
            ]);
          }}>
            <Ionicons
              style={{ backgroundColor: "white", borderRadius: 5 }}
              name="md-exit-outline"
              size={30}
              color="black"
            />
          </TouchableOpacity>
        </View>

        
      </View>
    </View>
  );
};

export default Header;
