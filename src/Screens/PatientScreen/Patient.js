/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  Text,
  PermissionsAndroid,
  Image,
  Modal,
  Dimensions,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../Redux/index';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {FloatingAction} from 'react-native-floating-action';
import {horizontalScale} from '../../Scale/Metric';
import db from '../../db/db';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const PatientHome = ({navigation}) => {
  // locking screen to potrait mode
  // declaring states

  useEffect(() => {
    getLoginTime();
    openDatabase();
    fetchPatientList();
  }, []);

  const dispatch = useDispatch();
  const patientList = useSelector(state => state.patient.patientList);
  const newPatientName = useSelector(state => state.patient.patientName);
  const patientImage = useSelector(state => state.patient.patientImage);
  const address = useSelector(state => state.patient.patientAddress);
  const contact = useSelector(state => state.patient.patientContact);
  // handlers
  const actions = bindActionCreators(actionCreators, dispatch);
  const [isAddModalVisible, setAddModalVisible] = useState(false);

  const openDatabase = () => {
    db.transaction(txn => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS patient_data (_id INTEGER PRIMARY KEY AUTOINCREMENT, patient_name TEXT, patient_address TEXT, patient_contact TEXT, patient_image BLOB, patient_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, patient_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)',
        [],
        (_, res) => {
          if (res.rowsAffected > 0) console.log('Table created');
          else console.log('Table exists ');
        },
        (_, error) => {
          console.log('Error creating patient table', error);
        },
      );
    });
    db.transaction(txn => {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='form1_data' ",
        [],
        (txn, res) => {
          console.log('item:', res.rows.length);
          if (res.rows.length === 0) {
            txn.executeSql('DROP TABLE IF EXISTS form1_data', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS form1_data (' +
                'ID INTEGER PRIMARY KEY AUTOINCREMENT,' +
                'patient_id INTEGER,' + // Add the foreign key column right after the primary key
                'form_data TEXT,' +
                'patient_data_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,' +
                'patient_data_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,' +
                'FOREIGN KEY (patient_id) REFERENCES patient_data (_id)' + // Add the foreign key constraint
                ')',
            );
            console.log('Created table');
          } else {
            console.log('Already created table');
          }
        },
      );
    });
    db.transaction(txn => {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='form2_data' ",
        [],
        (txn, res) => {
          console.log('item:', res.rows.length);
          if (res.rows.length === 0) {
            txn.executeSql('DROP TABLE IF EXISTS form2_data', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS form2_data (' +
                'ID INTEGER PRIMARY KEY AUTOINCREMENT,' +
                'patient_id INTEGER,' + // Add the foreign key column right after the primary key
                'form_data TEXT,' +
                'patient_data_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,' +
                'patient_data_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,' +
                'FOREIGN KEY (patient_id) REFERENCES patient_data (_id)' + // Add the foreign key constraint
                ')',
            );
            console.log('Created table');
          } else {
            console.log('Already created table');
          }
        },
      );
    });
    db.transaction(txn => {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='form3_data' ",
        [],
        (txn, res) => {
          console.log('item:', res.rows.length);
          if (res.rows.length === 0) {
            txn.executeSql('DROP TABLE IF EXISTS form3_data', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS form3_data (' +
                'ID INTEGER PRIMARY KEY AUTOINCREMENT,' +
                'patient_id INTEGER,' + // Add the foreign key column right after the primary key
                'form_data TEXT,' +
                'patient_data_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,' +
                'patient_data_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,' +
                'FOREIGN KEY (patient_id) REFERENCES patient_data (_id)' + // Add the foreign key constraint
                ')',
            );
            console.log('Created table');
          } else {
            console.log('Already created table');
          }
        },
      );
    });
    db.transaction(txn => {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='form4_data' ",
        [],
        (txn, res) => {
          console.log('item:', res.rows.length);
          if (res.rows.length === 0) {
            txn.executeSql('DROP TABLE IF EXISTS form4_data', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS form4_data (' +
                'ID INTEGER PRIMARY KEY AUTOINCREMENT,' +
                'patient_id INTEGER,' + // Add the foreign key column right after the primary key
                'form_data TEXT,' +
                'patient_data_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,' +
                'patient_data_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,' +
                'FOREIGN KEY (patient_id) REFERENCES patient_data (_id)' + // Add the foreign key constraint
                ')',
            );
            console.log('Created table');
          } else {
            console.log('Already created table');
          }
        },
      );
    });
  };

  const fetchPatientList = () => {
    // fetching the patientlist from sqlite
    db.transaction(txn => {
      txn.executeSql(
        'SELECT _id , patient_name , patient_address , patient_contact , patient_image FROM patient_data',
        [],
        (_, res) => {
          const patients = [];
          for (let i = 0; i < res.rows.length; i++) {
            const patient = res.rows.item(i);
            const patientData = {
              id: patient._id,
              name: patient.patient_name,
              address: patient.patient_address,
              contact: patient.patient_contact,
              image: patient.patient_image,
            };
            patients.push(patientData);
          }
          actions.updatePatientList(patients);
        },
        (_, error) => {
          console.log("Could't Fetch the patient list", error);
        },
      );
    });
  };

  const handleAddPatient = () => {
    console.log('ho');
    if (newPatientName.trim() !== '') {
      // adding patient & details to sqlite
      console.log('hoa');
      db.transaction(txn => {
        txn.executeSql(
          'INSERT INTO patient_data (patient_name, patient_address, patient_contact, patient_image) VALUES (?, ?, ?, ?)',
          [newPatientName, address, contact, patientImage],
          (_, res) => {
            if (res.rowsAffected > 0)
              console.log('Patient added to database ' + newPatientName);
            else console.log('Failed to add patient');
          },
          (_, error) => {
            console.log('Error adding patient' + error);
          },
        );
      });
      setAddModalVisible(false);
      db.transaction(txn => {
        txn.executeSql(
          'SELECT * FROM patient_data ORDER BY patient_created_at DESC LIMIT 1',
          [],
          (_, res) => {
            let patientData = res.rows.item(0);
            let newPatient = {
              id: patientData._id,
              name: patientData.patient_name,
              address: patientData.patient_address,
              contact: patientData.patient_contact,
              image: patientData.patient_image,
            };
            actions.updatePatientList([...patientList, newPatient]);
            actions.updatePatientName('');
            actions.updatePatientAddress('');
            actions.updatePatientContact('');
            actions.updatePatientImageMain(null);
          },
        );
      });
    }
  };

  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };
  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    actions.updatePatientImageMain(result.assets[0].uri);
  };

  const openCamera = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const result = await launchCamera(options);
      actions.updatePatientImageMain(result.assets[0].uri);
    } else {
      console.log('Camera permission denied');
    }
  };

  const navigateToFormPage = (
    patientId,
    patientName,
    address,
    contact,
    image,
  ) => {
    navigation.navigate('HomeScreen', {
      selectedPatientId: patientId,
      selectedPatientName: patientName,
      selectedAddress: address,
      selectedContact: contact,
      selectedImage: image,
    });
  };

  const resetModalFields = () => {
    setAddModalVisible(true);
    actions.updatePatientName('');
    actions.updatePatientAddress('');
    actions.updatePatientContact('');
  };

  const floatingActions = [
    {
      text: 'Add Patient ',
      name: 'Patient Add',
      position: 1,
      icon: require('../../Assets/plus.png'),
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPatientList, setFilteredPatientList] = useState([]);

  const handleSearch = text => {
    setSearchQuery(text);

    if (text.trim() === '') {
      setFilteredPatientList([]);
    } else {
      const filteredList = patientList.filter(patient =>
        patient.name.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredPatientList(filteredList);
    }
  };

  const TIME = 2592000000; // 30days in milliseconds
  const getLoginTime = async () => {
    try {
      const value = await AsyncStorage.getItem('loginTime');
      if (!value) {
        saveLoginTime();
      } else if (value !== null) {
        const loginTime = new Date(value);
        const currentTime = new Date();
        const timeDifference = currentTime.getTime() - loginTime.getTime();
        if (timeDifference > TIME) {
          logout();
          saveLoginTime();
        }
      }
    } catch (error) {
      console.log('error logging out ' + error);
    }
  };

  const saveLoginTime = async () => {
    try {
      await AsyncStorage.setItem('loginTime', new Date().toString());
    } catch (error) {
      console.log('Error saving the Key', error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('isLoggedIn');
      if (navigation.canGoBack()) {
        navigation.goBack(); // First go back
      }
      if (navigation.canGoBack()) {
        navigation.goBack(); // Second go back
      }
      if (navigation.canGoBack()) {
        navigation.goBack(); // Third go back
      }
    } catch (error) {
      console.log('couldnt remove' + error);
    }
  };
  const {width, height} = Dimensions.get('window');
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: width / 1.1,
          height: null,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../Assets/logo.png')}
          style={{
            width: moderateScale(350),
            height: height / 15,
            marginVertical: verticalScale(25),
            marginHorizontal: horizontalScale(3),
          }}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <View>
          <Text style={styles.header}>Patient</Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Patient"
            value={searchQuery}
            placeholderTextColor={'black'}
            onChangeText={handleSearch}
          />
        </View>
      </View>
      <ScrollView>
        <View style={styles.container1}>
          <View style={styles.patientContainer}>
            <View style={styles.patientListContainer}>
              {searchQuery.trim() === ''
                ? patientList.map((patient, index) => {
                    const {id, name, image} = patient;
                    console.log('Patient List NAME ' + name);
                    return (
                      <TouchableOpacity
                        key={index}
                        style={styles.patientItem}
                        onPress={() => {
                          navigateToFormPage(
                            patient.id,
                            patient.name,
                            patient.address,
                            patient.contact,
                            patient.image,
                          );
                        }}>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          {image ? (
                            <Image
                              source={{uri: image}}
                              style={styles.patientImage}
                            />
                          ) : (
                            <Image
                              source={require('../../Assets/profile.png')}
                              style={styles.patientImage}
                            />
                          )}
                          <View style={styles.patientNameContainer}>
                            <Text style={styles.patientText}>{name}</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })
                : filteredPatientList.map((patient, index) => {
                    const {id, name, image} = patient;
                    console.log('FILTERED NAME ' + name);
                    return (
                      <TouchableOpacity
                        key={index}
                        style={styles.patientItem}
                        onPress={() => {
                          navigateToFormPage(
                            patient.id,
                            patient.name,
                            patient.address,
                            patient.contact,
                            patient.image,
                          );
                        }}>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          {image ? (
                            <Image
                              source={{uri: image}}
                              style={styles.patientImage}
                            />
                          ) : (
                            <Image
                              source={require('../../Assets/profile.png')}
                              style={styles.patientImage}
                            />
                          )}
                          <View style={styles.patientNameContainer}>
                            <Text style={styles.patientText}>{name}</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.containerFloat}>
        <View style={styles.floatingContainer}>
          <FloatingAction
            actions={floatingActions}
            onPressItem={resetModalFields}
            position="right"
            iconHeight={30}
            buttonSize={70}
            iconWidth={30}
          />
        </View>
      </View>
      <Image
        source={require('../../Assets/rymo.png')}
        style={{
          width: wp('100%'),
          height: hp('17%'),
          marginVertical: wp('5%'),
        }}
      />
      <Modal
        visible={isAddModalVisible}
        animationType="slide"
        transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Patient</Text>
            <View style={styles.headContainer}>
              <Text style={styles.headText}>Name</Text>
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Enter name"
              placeholderTextColor={'black'}
              value={newPatientName}
              onChangeText={text => actions.updatePatientName(text)}
            />
            <View style={styles.headContainer}>
              <Text style={styles.headText}>Address</Text>
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Enter address"
              placeholderTextColor={'black'}
              value={address}
              onChangeText={text => actions.updatePatientAddress(text)}
            />
            <View style={styles.headContainer}>
              <Text style={styles.headText}>Contact</Text>
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Enter contact"
              keyboardType="numeric"
              placeholderTextColor={'black'}
              value={contact}
              onChangeText={text => actions.updatePatientContact(text)}
            />
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={openGallery} style={styles.imageBtn}>
                <Text style={styles.buttonText}>Select Patient Image</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={openCamera} style={styles.imageBtn}>
                <Text style={styles.buttonText}>Click Patient Image</Text>
              </TouchableOpacity>
            </View>
            {patientImage && (
              <Image source={{uri: patientImage}} style={styles.patientImage} />
            )}
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setAddModalVisible(false)}>
                <Text style={styles.buttonText1}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleAddPatient}>
                <Text style={styles.buttonText1}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageBtn: {
    marginHorizontal: horizontalScale(20),
    marginVertical: verticalScale(20),
  },
  container: {
    flex: 1,
    padding: 16,
  },
  container1: {
    flex: 1,
  },
  patientContainer: {
    marginBottom: verticalScale(20),
  },
  patientImage: {
    borderRadius: 20,
    width: moderateScale(30),
    height: moderateScale(30),
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    marginHorizontal: moderateScale(30),
    marginVertical: verticalScale(15),
  },
  selectImageButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  header: {
    fontSize: moderateScale(25),
    fontWeight: 'bold',
    color: '#032491',
    marginHorizontal: horizontalScale(10),
    marginVertical: verticalScale(10),
  },
  patientListContainer: {
    marginHorizontal: horizontalScale(10),
    marginVertical: verticalScale(10),
  },
  patientItem: {
    borderRadius: 15,
    backgroundColor: '#9cb3ff',
    height: verticalScale(60),
    marginHorizontal: horizontalScale(10),
    marginVertical: verticalScale(10),
  },
  patientText: {
    top: 0,
    left: 0,
    marginVertical: verticalScale(10),
    color: '#082173',
    marginHorizontal: horizontalScale(10),
    fontSize: moderateScale(15),
  },
  addButton: {
    backgroundColor: 'blue',
    padding: wp('2%'),
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: moderateScale(15),
    fontWeight: 'bold',
  },
  buttonText1: {
    color: 'white',
    fontSize: moderateScale(15),
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  modalTitle: {
    fontSize: moderateScale(15),
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  headText: {
    color: 'black',
    fontSize: moderateScale(12),
  },
  headContainer: {
    height: scale(15),
    width: moderateScale(50),
    alignSelf: 'flex-start',
  },
  textInput: {
    width: '100%',
    height: verticalScale(40),
    borderWidth: 1,
    color: 'black',
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: horizontalScale(10),
  },
  modalButtonContainer: {
    flexDirection: 'row',
  },
  modalButton: {
    backgroundColor: 'blue',
    padding: scale(5),
    width: moderateScale(75),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: horizontalScale(60),
    marginVertical: verticalScale(10),
  },
  patientNameContainer: {
    flex: 1, // Add spacing between the image and the patient name
  },
  searchContainer: {
    width: horizontalScale(250),
    height: verticalScale(45),
    marginVertical: horizontalScale(5),
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 10,
    color: 'black',
  },
  searchButton: {
    marginLeft: 8,
    backgroundColor: 'blue',
    borderRadius: 8,
    padding: 16,
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PatientHome;
