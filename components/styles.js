import { StyleSheet } from 'react-native';

const stylesHero = StyleSheet.create({
    contain: {
        width: '100%',
        height: '100%',
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    whitecontainer: {
        position: 'absolute',
        marginTop: -190,
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    h1: {
        fontFamily: 'SemiBold',
        fontSize: 32,
        color: 'white',
        textAlign: 'center',
        textShadowRadius: 20,
        shadowOpacity: 0,
        marginBottom: 20,
    },
    p: {
        fontFamily: 'Regular',
        fontSize: 18,
        color: '#EBEBEB'
    },
    gradientBtn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        width: 365,
        height: 48,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
});

const stylesFormLogin = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontFamily: 'Bold',
        fontSize: 32,
        color: '#1F1F1F',
        marginBottom: 52,
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginBottom: 16,
        width: '90%',
    },
    inputLabel: {
        color: '#1F1F1F',
        opacity: 0.5,
        fontSize: 12,
        marginBottom: 5,
        alignSelf: 'flex-start',
    },
    input: {
        borderColor: '#fff',
        borderBottomColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginBottom: 16,
        width: '100%',
        fontSize: 16,
    },
    button: {
        borderRadius: 4,
        width: 365,
        height: 48,
    },
    buttonText: {
        fontFamily: 'Bold',
        color: '#fff',
        fontSize: 14,
    },
    gradientBtn2: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
});

const mangasFull = StyleSheet.create({
    h1: {
        fontFamily: 'SemiBold',
        fontSize: 32,
        color: 'white',
        textAlign: 'center',
        textShadowRadius: 20,
        shadowOpacity: 0,
        marginBottom: 67,
        marginTop: 38,
    },
    searchContainer: {
        width: '95%',
        height: 62,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 30,
        backgroundColor: '#fff',
        borderRadius: 80,
        gap: 10,
    },
    inputSearch: {
        borderColor: '#fff',
        fontSize: 22,
        opacity: 0.5
    },
    listContainer:{
        marginTop: 37,
        paddingBottom: 20,
        flex: 1,
        width: '100%',
        minHeight: 550,
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    listTitle:{
        fontSize: 24,
        fontFamily: 'Medium',
        color: '#fff',
        alignSelf: 'flex-start',
        marginTop: 45,
        textShadowRadius: 20,
        shadowOpacity: 0,
    }
});

const styles = { stylesFormLogin, stylesHero, mangasFull }

export default styles;