import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {dataone} from '../Data/Step1';

const width = Dimensions.get('screen').width;

interface IProps {
  navigation: any;
  props: any;
}

interface IState {
  Gdataone: any[];
  screenWidth: any;
  screenHeight: any;
}

export class Steponegame extends Component<IProps, IState> {
  state: IState = {
    Gdataone: dataone,
    screenWidth: null,
    screenHeight: null,
  };

  handleGetAnswer = (item: any) => {
    if (item.answere === true) {
      this.props.navigation.navigate('Steptwogame');
    }
  };

  _onLayout = (e: any) => {
    console.log('Screen Orientation Changed...');
    this.setState({
      screenWidth: Dimensions.get('window').width,
      screenHeight: Dimensions.get('window').height,
    });
  };
  render() {
    const {screenHeight, screenWidth} = this.state;
    return (
      <View
        style={
          screenHeight > screenWidth
            ? styles.portraitContainer
            : styles.landscapeContainer
        }
        onLayout={this._onLayout}>
        <FlatList
          numColumns={3}
          data={this.state.Gdataone}
          keyExtractor={(item: any, index: number) => index.toString()}
          renderItem={({item}: any) => (
            <View
              style={
                screenHeight > screenWidth
                  ? styles.PortraitCartonDesign
                  : styles.ScapehandleCartonDesign
              }
              onLayout={this._onLayout}>
              <TouchableOpacity onPress={() => this.handleGetAnswer(item)}>
                <Image
                  source={item.images}
                  style={
                    screenHeight > screenWidth
                      ? styles.portraitInput
                      : styles.landscapeInput
                  }
                  onLayout={this._onLayout}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
}

export default Steponegame;

const styles = StyleSheet.create({
  portraitContainer: {
    paddingTop: 40,
    marginHorizontal: 5,
    backgroundColor: 'red',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  landscapeContainer: {
    paddingTop: 10,
    marginHorizontal: 110,
    padding: 40,
    backgroundColor: 'green',
  },
  PortraitCartonDesign: {
    height: 100,
    width: 120,
    marginHorizontal: -1,
    marginVertical: 5,
    paddingVertical: 5,
    gap: 20,
  },
  ScapehandleCartonDesign: {
    height: 100,
    width: 100,
    marginHorizontal: 25,
    marginVertical: 5,
    paddingVertical: 5,
  },
  portraitInput: {
    height: 100,
    width: 110,
    marginHorizontal: 20,
    marginVertical: 2,
  },
  landscapeInput: {
    height: 120,
    width: 120,
    marginHorizontal: 20,
    marginVertical: 2,
  },
});
