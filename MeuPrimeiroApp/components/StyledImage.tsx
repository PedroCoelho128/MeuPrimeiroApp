import { Image, StyleSheet } from "react-native";
 
interface StyledImageProps {
 
    router: string
}
 
export default function StyledImage(
    {router}:StyledImageProps
){
    return (
        <Image
        style={styles.image}
        source={{
            uri: router,
          }}
        />
    )
}
 
const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200
}
})