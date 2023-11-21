import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import SearchResult from '../components/SearchResult';

const SearchPage = ({ navigation }) => {
  const [select, setSelect] = React.useState(false);

  const toggleSelect = () => {
    setSelect(!select);
    console.log('Pressed' ,select)
  };

  return (
    <View style={styles.container}>
        <View style={styles.searchBox}>
            <Text style={styles.text}>{'Search for Events and Groups'}</Text>
            <Ionicons name='md-search' size={40} color='white' />
        </View>
        <View style={styles.filters}>
            <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterButtonText}>Category</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterButtonText}>Distance</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterButtonText}>Capacity</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
                <Text style={styles.filterButtonText}>Day</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.filters2}>
            <TouchableOpacity
                style={[styles.filterButton, !select && styles.disabledFilterButton ,{ marginRight: 10 }]}
                onPress={toggleSelect}
                >
                <Text style={styles.filterButtonText}>Groups</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.filterButton, select && styles.disabledFilterButton]}
                onPress={toggleSelect}
                >
                <Text style={styles.filterButtonText}>Events</Text>
            </TouchableOpacity>
        </View>

        {!select &&
            <SearchResult navigation={navigation}/>
        }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 16,
    backgroundColor: '#1A1A1A',
  },
  searchBox: {
    backgroundColor: '#1A1A1A',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 2,
    borderColor: 'white'
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 5,
  },
  filters2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 5,
    marginBottom: 5,
  },
  filterButton: {
    backgroundColor: '#333333',
    width: 80,
    borderRadius: 20,
    padding: 10,
  },
  disabledFilterButton: {
    backgroundColor: '#AF66CC',
    width: 80,
    borderRadius: 20,
    padding: 10,
  },
  filterButtonText: {
    color: 'white', // Example text color
    textAlign: 'center',
  },
  text: {
    color: 'white',
  }
});

export default SearchPage;
