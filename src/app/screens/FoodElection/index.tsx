import React from 'react'
import {View, BackHandler, Image, SafeAreaView, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import { icon_fish,icon_egg,icon_tuna, icon_turkey, icon_chicken, icon_beef, icon_rice, icon_potato, icon_sweet_potato, icon_frijoles, icon_lentejas, icon_yuca, icon_palta, icon_almendra, icon_cashew, icon_mani, icon_nuez, icon_pecana, icon_banana, icon_fresas, icon_leche, icon_manzana, icon_queso, icon_yogurt } from 'modules/resources/images';
import {useNavigation} from '@react-navigation/native';
import {generalStyles} from '@styles/index';
import Button from '@components/Button/index';
import Header from 'app/components/Header';
import {
  AppRoutes,
  MainNavigationProp as PrincipalNavigationProp,
} from '@router/index';
import { _GeneralColors } from 'modules/resources/colors';
export type FoodElectionNavigationProps = PrincipalNavigationProp<AppRoutes>;
export default function FoodElection() {
  const navigation = useNavigation<FoodElectionNavigationProps>();
  return (
    
    <SafeAreaView style={generalStyles.container}>
      <View style={{width: '100%',flexDirection:'row'}}>
      <Header haveReturnBtn={true}      
      />
      <TouchableOpacity style={{alignSelf:'center',left:230}} onPress={()=>navigation.navigate(AppRoutes.MeasureFood)}>
        <Text style={{color:'white',fontSize:16}}>Siguiente</Text>
      </TouchableOpacity>
      </View>
      <ScrollView>
      
      <View style={{width: '100%'}}>
        <Text style={{color:'white',textAlign:'center',marginBottom: 24}}> Eres Vegetariano/Vegano?</Text>
      </View>
      <View style={{width: '100%',flexDirection:'row',alignContent: 'center',justifyContent: 'center'}}  >
      <View style={{width: 120}}>
      <Button label="Si" handleOnPress={()=>{}}/>  
      </View>
      <View style={{width: 120}}>
      <Button label="No" handleOnPress={()=>{}}/>  
      </View>
      </View>
      <Text style={{color:'white',textAlign:'center',fontWeight:'bold',marginTop: 24,fontSize: 15}}> ¿Que alimentos tienes disponible o deseas incluir?</Text>
      <Text style={{color:'white',textAlign:'center',marginTop: 24,fontSize: 18}}> Proteinas</Text>
      <Text style={{color:'white',textAlign:'center',fontSize: 18}}> ___________________________________________</Text>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={styles.containeritems}>
        <Text style={{color:'white',textAlign:'center',fontSize: 14}}>Pollo</Text>
        <Image source={icon_chicken} style={styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containeritems}>
        <Text style={{color:'white',textAlign:'center',fontSize: 14}}>Carne</Text>
        <Image source={icon_beef} style={styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containeritems}>
        <Text style={{color:'white',textAlign:'center',fontSize: 14}}>Pescado</Text>
        <Image source={icon_fish} style={styles.image}/>
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={styles.containeritems}>
        <Text style={{color:'white',textAlign:'center',fontSize: 14}}>Atun</Text>
        <Image source={icon_tuna} style={styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containeritems}>
        <Text style={{color:'white',textAlign:'center',fontSize: 14}}>Huevo</Text>
        <Image source={icon_egg} style={styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containeritems}>
        <Text style={{color:'white',textAlign:'center',fontSize: 14}}>Pavo</Text>
        <Image source={icon_turkey} style={styles.image}/>
      </TouchableOpacity>
      </View>
      <Text style={{color:'white',textAlign:'center',marginTop: 24,fontSize: 18}}>Carbohidratos</Text>
      <Text style={{color:'white',textAlign:'center',fontSize: 18}}> ___________________________________________</Text>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={styles.containeritems}>
        <Text style={{color:'white',textAlign:'center',fontSize: 14}}>Arroz</Text>
        <Image source={icon_rice} style={styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containeritems}>
        <Text style={{color:'white',textAlign:'center',fontSize: 14}}>Papa</Text>
        <Image source={icon_potato} style={styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containeritems}>
        <Text style={{color:'white',textAlign:'center',fontSize: 14}}>Camote</Text>
        <Image source={icon_sweet_potato} style={styles.image}/>
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={styles.containeritems}>
        <Text style={{color:'white',textAlign:'center',fontSize: 14}}>Yuca</Text>
        <Image source={icon_yuca} style={styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containeritems}>
        <Text style={{color:'white',textAlign:'center',fontSize: 14}}>Lentejas</Text>
        <Image source={icon_lentejas} style={styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containeritems}>
        <Text style={{color:'white',textAlign:'center',fontSize: 14}}>Frijoles</Text>
        <Image source={icon_frijoles} style={styles.image}/>
      </TouchableOpacity>
      </View>
      <Text style={{color:'white',textAlign:'center',marginTop: 24,fontSize: 18}}>Grasas</Text>
      <Text style={{color:'white',textAlign:'center',fontSize: 18}}> ___________________________________________</Text>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={styles.containeritems}>
        <Text style={{color:'white',textAlign:'center',fontSize: 14}}>Palta</Text>
        <Image source={icon_palta} style={styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containeritems}>
        <Text style={{color:'white',textAlign:'center',fontSize: 14}}>Mani</Text>
        <Image source={icon_mani} style={styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containeritems}>
        <Text style={{color:'white',textAlign:'center',fontSize: 14}}>Almendra</Text>
        <Image source={icon_almendra} style={styles.image}/>
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={styles.containeritems}>
        <Text style={{color:'white',textAlign:'center',fontSize: 14}}>Pecana</Text>
        <Image source={icon_pecana} style={styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containeritems}>
        <Text style={{color:'white',textAlign:'center',fontSize: 14}}>Cashew</Text>
        <Image source={icon_cashew} style={styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containeritems}>
        <Text style={{color:'white',textAlign:'center',fontSize: 14}}>Nuez</Text>
        <Image source={icon_nuez} style={styles.image}/>
      </TouchableOpacity>
      </View>
      <Text style={{color:'white',textAlign:'center',marginTop: 24,fontSize: 18}}>Lacteos y Bebidas</Text>
      <Text style={{color:'white',textAlign:'center',fontSize: 18}}> ___________________________________________</Text>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={styles.containeritems}>
        <Text style={{color:'white',textAlign:'center',fontSize: 14}}>Leche</Text>
        <Image source={icon_leche} style={styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containeritems}>
        <Text style={{color:'white',textAlign:'center',fontSize: 14}}>Yogur</Text>
        <Image source={icon_yogurt} style={styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containeritems}>
        <Text style={{color:'white',textAlign:'center',fontSize: 14}}>Queso</Text>
        <Image source={icon_queso} style={styles.image}/>
      </TouchableOpacity>
      </View>
      <Text style={{color:'white',textAlign:'center',marginTop: 24,fontSize: 18}}>Frutas</Text>
      <Text style={{color:'white',textAlign:'center',fontSize: 18}}> ___________________________________________</Text>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={styles.containeritems}>
        <Text style={{color:'white',textAlign:'center',fontSize: 14}}>Platano</Text>
        <Image source={icon_banana} style={styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containeritems}>
        <Text style={{color:'white',textAlign:'center',fontSize: 14}}>Fresas</Text>
        <Image source={icon_fresas} style={styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containeritems}>
        <Text style={{color:'white',textAlign:'center',fontSize: 14}}>Manzana</Text>
        <Image source={icon_manzana} style={styles.image}/>
      </TouchableOpacity>
      </View>
      </ScrollView>
      
      
    </SafeAreaView>  
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  containeritems:{
    flexDirection:'column',
    alignItems: 'center',
    alignSelf: 'center',
    width:90,
    margin:12,
    marginTop: 30,
    padding: 12,
    marginRight: 12,
    marginLeft: 12,
    backgroundColor: _GeneralColors.items,
    borderRadius: 10
  },
  image: {
    margin:4,
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  label: {
    color:'white',
    margin: 12,
    fontSize: 20,
  },
  loading: {
    width: 170,
    height: 120,
    resizeMode: 'contain',
  },
})