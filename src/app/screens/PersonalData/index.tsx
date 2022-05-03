import React from 'react'
import {View, BackHandler, Image, SafeAreaView, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useNavigation} from '@react-navigation/native';
import {generalStyles} from '@styles/index';
import Button from '@components/Button/index';
import Header from 'app/components/Header';
import {
  AppRoutes,
  MainNavigationProp as PrincipalNavigationProp,
} from '@router/index';
export type PersonalDataNavigationProps = PrincipalNavigationProp<AppRoutes>;
export default function PersonalData() {
  const navigation = useNavigation<PersonalDataNavigationProps>();

  const [open,setOpen] = React.useState(false);
  const [Genre,setGnre] = React.useState([{label:"Seleccionar",value:'Seleccionar'},{label:"Mujer",value:'Mujer'},{label:"Hombre",value:'Hombre'}]);
  const [value,setValue] = React.useState(null);

  const [openBirthDate,setOpenBirthDate] = React.useState(false);
  const [birthDate,setBirthDate] = React.useState([{label:"Seleccionar",value:'Seleccionar'},{label:"Mujer",value:'Mujer'},{label:"Hombre",value:'Hombre'}]);
  const [birthValue,setBirthValue] = React.useState(null);

  const [openHeight,setOpenHeight] = React.useState(false);
  const [height,setHeight] = React.useState([{label:"Seleccionar",value:'Seleccionar'},{label:"Mujer",value:'Mujer'},{label:"Hombre",value:'Hombre'}]);
  const [heightValue,setHeightValue] = React.useState(null);
  
  const [openWeight,setOpenWeight] = React.useState(false);
  const [Weight,setWeight] = React.useState([{label:"Seleccionar",value:'Seleccionar'},{label:"Mujer",value:'Mujer'},{label:"Hombre",value:'Hombre'}]);
  const [valueWeight,setValueWeight] = React.useState(null);
  return (
    <SafeAreaView style={generalStyles.container}>
      <View style={{width: '100%'}}>
      <Header haveReturnBtn={true}      
      />
      </View>
      <View style={{width: 320}}>
      
      <Text style={{color:'white',textAlign:'center',fontSize: 20,marginTop:12}}>Sexo</Text>
      <DropDownPicker
        style={{marginTop: 12}}
        labelStyle={{color:'black',textAlign:'center',fontSize: 20}}
        textStyle={{color:'black'}}
        showArrowIcon={true}
        open={open}
        value={value}
        items={Genre}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setGnre}
      />
      <Text style={{color:'white',textAlign:'center',fontSize: 20, marginTop:12}}>Fecha de Nacimiento</Text>
      <DropDownPicker
      style={{marginTop: 12}}
        labelStyle={{color:'black',textAlign:'center',fontSize: 20}}
        textStyle={{color:'black'}}
        showArrowIcon={true}
        open={openBirthDate}
        value={birthValue}
        items={birthDate}
        setOpen={setOpenBirthDate}
        setValue={setBirthValue}
        setItems={setBirthDate}
      />
      <Text style={{color:'white',textAlign:'center',fontSize: 20,marginTop:12}}>Estatura</Text>
      <DropDownPicker
      style={{marginTop: 12}}
        labelStyle={{color:'black',textAlign:'center',fontSize: 20}}
        textStyle={{color:'black'}}
        showArrowIcon={true}
        open={openHeight}
        value={heightValue}
        items={height}
        setOpen={setOpenHeight}
        setValue={setHeightValue}
        setItems={setHeight}
      />
      <Text style={{color:'white',textAlign:'center',fontSize: 20,marginTop:12}}>Peso Actual</Text>
      <DropDownPicker
      style={{marginTop: 12}}
        labelStyle={{color:'black',textAlign:'center',fontSize: 20}}
        textStyle={{color:'black'}}
        showArrowIcon={true}
        open={openWeight}
        value={valueWeight}
        items={Weight}
        setOpen={setOpenWeight}
        setValue={setValueWeight}
        setItems={setWeight}
      />
      
      </View>
      <View style={{width: 350,margin:12,marginTop:24}}>
        <Button label="Continuar" handleOnPress={()=>navigation.navigate(AppRoutes.Question1)}/>
      </View>
    </SafeAreaView>

  )
}
