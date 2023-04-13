import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../store/Model/actions';
import { getAllCategories } from '../store/Categories/actions';

import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

export default function SelectModel({ navigation }) {
  const dispatch = useDispatch();
  const cars = useSelector((store) => store.model?.cars);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchFilters, setSearchFilters] = useState({
    searchTerm: '',
    selectedCategory: ''
  });

  const categories = useSelector((store) => store.category.categories);

  useEffect(() => {
    Promise.all([dispatch(getAllCars()), dispatch(getAllCategories())])
      .catch((error) => console.log(error)); // manejar errores si alguno de los dispatches falla
  }, [dispatch]);

  const prevSlide = () => {
    const lastIndex = (filteredCars?.length || 0) - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = (filteredCars?.length || 0) - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  const filteredCars = cars?.filter(car => {
    const categoryIdMatch = searchFilters.selectedCategory === '' || car?.category_id._id.toString() === searchFilters.selectedCategory.toString();
    const nameMatch = car.name.toLowerCase().includes(searchFilters.searchTerm.toLowerCase());

    return categoryIdMatch && nameMatch;
  });

  const photo = filteredCars?.length ? filteredCars[currentIndex].photo : null;
  const name = filteredCars?.length ? filteredCars[currentIndex].name : null;

  return (
    <View style={styles.container}>
      <View style={styles.sectionFilter}>
        <View style={styles.searchName}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchFilters.searchTerm}
            onChangeText={(value) => setSearchFilters({ ...searchFilters, searchTerm: value })}
          />
        </View>
        <View style={styles.selectOption}>
          <TouchableOpacity style={styles.selectInput} onPress={() => navigation.navigate('CategorySelector', { categories, setSearchFilters })}>
            <Text style={styles.selectText}>{searchFilters.selectedCategory === '' ? 'All' : categories.find(c => c._id.toString() === searchFilters.selectedCategory.toString()).name}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {filteredCars && filteredCars.length === 0 ? (
        <View style={styles.noResultsContainer}>
          <Text>Sorry, there is no vehicle that matches your search.</Text>
        </View>
      ) : (
        <View style={styles.carouselContainer}>
          <TouchableOpacity style={styles.btnSlide} onPress={prevSlide}>
            <Image style={styles.imgBtnSlide} source={require('../assets/image/prev.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionImgTitle} onPress={() => navigation.navigate('CarDetails', { id: filteredCars?.[currentIndex]?._id })}>
            {photo && (
              <Image
                style={styles.carouselImg}
                source={{ uri: photo }}
              />
            )}
            <Text style={styles.carouselTitle}>{name}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSlide} onPress={nextSlide}>
            <Image style={styles.imgBtnSlide} source={require('../assets/image/next.png')} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
} 
  
  const styles = StyleSheet.create({
    photoVehicles: {
      width: '100%',
      height: 200,
    },
    contenedorVehicles: {
      backgroundColor: 'rgb(237, 237, 237)',
      width: '100%',
      height: '100%',
      overflowX: 'hidden',
      overflowY: 'hidden',
    },
    sectionFilter: {
      width: '100%',
      height: '15%',
      backgroundColor: 'black',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    searchName: {
      width: '100%',
      height: 50,
    },
    selectOption: {
      width: '100%',
      height: 50,
    },
    imgBtnSlide: {
      width: 30,
      height: 'auto',
    },
    contenedorVehiclesCarrusel: {
      width: '100%',
      height: 'auto',
      display: 'flex',
      justifyContent: 'space-around',
    },
    btnSlide: {
      height: 30,
      marginTop: '30%',
      borderWidth: 0,
      borderColor: 'transparent',
    },
  sectionImgTitle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  titleNameCar: {
    width: 'auto',
    height: '20vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
  },
  anchortoCustome: {
    textDecorationLine: 'none',
    color: '#000',
  },
  searchInput: {
    width: '15vw',
    height: '5vh',
    backgroundColor: 'rgba(0, 0, 0, 0.32)',
    color: 'white',
    borderWidth: 0,
    borderColor: 'transparent',
    marginLeft: '20vh',
    marginTop: '25vh',
    position: 'relative',
    zIndex: 1,
  },
  selectInput: {
    width: '15vw',
    height: '5vh',
    backgroundColor: 'rgba(0, 0, 0, 0.32)',
    color: 'white',
    borderWidth: 0,
    borderColor: 'transparent',
    marginLeft: '20vh',
    marginTop: '12vh',
    position: 'relative',
    zIndex: 0,
  },
});
