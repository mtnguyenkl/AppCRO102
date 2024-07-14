import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from './Header';
import Icon from 'react-native-vector-icons/FontAwesome';

const LeftComponent1: React.FC = () => {
  return (
    <View>
      <Icon name="arrow-left" size={24} color="white" />
    </View>
  );
};

const CenterComponent1: React.FC = () => {
  return (
    <View>
      <Text style={styles.headerText}>Header</Text>
    </View>
  );
};

const RightComponent1: React.FC = () => {
  return (
    <View>
      <Icon name="user" size={24} color="white" />
    </View>
  );
};

const LeftComponent2: React.FC = () => {
  return (
    <View>
      <Icon name="arrow-left" size={24} color="white" />
    </View>
  );
};

const CenterComponent2: React.FC = () => {
  return (
    <View>
      <Text style={styles.headerText}>Trang chủ</Text>
    </View>
  );
};

const RightComponent2: React.FC = () => {
  return (
    <View>
      
    </View>
  );
};

const LeftComponent3: React.FC = () => {
  return (
    <View>
      <Icon name="arrow-left" size={24} color="white" />
    </View>
  );
};

const CenterComponent3: React.FC = () => {
  return (
    <View>
      
    </View>
  );
};

const RightComponent3: React.FC = () => {
  return (
    <View>
      
    </View>
  );
};

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={<LeftComponent1 />}
        centerComponent={<CenterComponent1 />}
        rightComponent={<RightComponent1 />}
      />
      <Header
        leftComponent={<LeftComponent2 />}
        centerComponent={<CenterComponent2 />}
        rightComponent={<RightComponent2 />}
      />
      <Header
        leftComponent={<LeftComponent3 />}
        centerComponent={<CenterComponent3 />}
        rightComponent={<RightComponent3 />}
      />
      {/* Add additional content of your app here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
  },
});

export default App;
