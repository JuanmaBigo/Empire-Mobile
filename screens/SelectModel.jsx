import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, Animated } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../store/model/actions.js';
import actionCat from '../store/categories/actions.js';

const { getAllCars } = actions;
const { getAllCategories } = actionCat;

export default function SelectModel() {
    const dispatch = useDispatch();
    const cars = useSelector((store) => store.model?.cars);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [searchFilters, setSearchFilters] = useState({
        searchTerm: '',
        selectedCategory: '',
    });

    const categories = useSelector((store) => store.category?.categories);
    const [filteredCars, setFilteredCars] = useState([]);

    useEffect(() => {
        Promise.all([dispatch(getAllCars()), dispatch(getAllCategories())]).catch(
            (error) => console.log(error)
        );
    }, [dispatch]);

    useEffect(() => {
        const filtered = cars?.filter((car) => {
            const categoryIdMatch =
                searchFilters.selectedCategory === '' ||
                car?.category_id?._id.toString() ===
                searchFilters.selectedCategory.toString();
            const nameMatch = car?.name
                .toLowerCase()
                .includes(searchFilters.searchTerm.toLowerCase());
            return categoryIdMatch && nameMatch;
        });
        setFilteredCars(filtered || []);
        setCurrentIndex(0);
    }, [cars, searchFilters]);

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

    const photo = filteredCars?.[currentIndex]?.photo;
    const name = filteredCars?.[currentIndex]?.name;


    return (
        <ScrollView style={{ backgroundColor: 'rgb(237, 237, 237)', height: '100%', width: '100%' }}>
            <View style={{ backgroundColor: 'black', width: 300, height: 50, marginTop: 70 }}>
                <Text style={{ color: 'white', margin: 15 }}>MODEL SELECTION</Text>
            </View>
            <View>
                <View>
                    <TextInput
                        style={{ backgroundColor: ' rgba(6, 6, 6, 0.588)', width: 300, height: 50, marginTop: 50, marginLeft: 50 }}
                        type="text"
                        placeholder="FILTER BY NAME"
                        placeholderTextColor="white"
                        value={searchFilters.searchTerm}
                        onChange={(e) => setSearchFilters({ ...searchFilters, searchTerm: e.target.value })} />
                </View>
                <View >
                    <Picker
                        style={{ backgroundColor: ' rgba(6, 6, 6, 0.588)', width: 300, height: 50, marginTop: 20, marginLeft: 50 }}
                        selectedValue={searchFilters.selectedCategory}
                        onValueChange={(value) => setSearchFilters({ ...searchFilters, selectedCategory: value })}
                    >
                        <Picker.Item label="SELECT CATEGORY" value="" style={{ color: 'white', marginLeft: 0 }} />
                        {categories.length ? categories.map((category) => (
                            <Picker.Item key={category?._id} label={category?.name} value={category?._id} />
                        )) : null}
                    </Picker>
                </View>
                {filteredCars.length === 0 ? (
                    <View >
                        <Text >There is no vehicle that matches your search</Text>
                    </View>
                ) : (
                    <View style={{ flex: 1, flexDirection: 'column', marginTop: 500 }}>
                        <TouchableOpacity style={{ justifyContent: 'center', flex: 1, }} to={`/details/${filteredCars?.[currentIndex]?._id}`}>
                            {photo && (
                                <Image
                                    style={{ width: 400, height: 400, marginTop: -500, flex: 1, justifyContent: 'center' }}
                                    source={{ uri: photo }}
                                    alt={`Car model ${filteredCars?.[currentIndex]?.model}`} />
                            )}
                            {name && (
                                <Text style={{
                                    color: 'white', fontSize: 20, padding: 15, textAlign: "center",
                                    width: 420, height: 70, backgroundColor: 'rgba(6, 6, 6, 0.588)'
                                }} >
                                    {name}
                                </Text>
                            )}
                        </TouchableOpacity>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: -50 }}>
                            <TouchableOpacity onClick={prevSlide}>
                                <Image style={{ width: 60, height: 30 }} source={require('../assets/image/image/prev.png')} alt='prev' />
                            </TouchableOpacity>
                            <TouchableOpacity onClick={nextSlide}>
                                <Image style={{ width: 60, height: 30 }} source={require('../assets/image/image/next.png')} alt='prev' />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>
        </ScrollView>
    );

}

