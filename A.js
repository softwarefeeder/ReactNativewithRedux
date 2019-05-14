
import React, { Component } from 'react';
import { View,Text,Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class A extends Component {

  
  render() {
    return (
      <View style={styles.container}>
{ <Text >
  I am bold
</Text>}
     <Button onPress={ ()=>
    {
      this.props.sendData(234);
    }}  title ="send Data"> </Button>
    </View>
   );
   }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginBottom:10,
    height:20
  },

  button_style: {
    marginBottom: 10,
    borderWidth:2, 
    padding: 10,
  }
});


const mapDispatchToProps = dispatch =>
{
  bindActionCreators(
    {
      sendData,
    },dispatch);
  
}

export default connect(null,mapDispatchToProps)(A);
