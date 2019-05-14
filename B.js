
import React, { Component } from 'react';
import { Text } from 'react-native';


export default class B extends Component {

  render() {
    return (
      <View style={styles.container}>
      <Text >
        I am bold {this.props.mydata}
      </Text>
      </View>

    );
  }

}


const mapDispatchStateToProps = (reduxState) => {
  return reduxState
};

export default connect(mapStateToProps)(B);

