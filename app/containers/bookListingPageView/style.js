import { StyleSheet } from 'react-native';
import appStyle from '../appStyle';


let blpv = StyleSheet.create({


	tabContent: {
		flex: 1,
		alignItems: 'center',
		paddingTop: 60
	}
	,
	 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default { ...appStyle, ...blpv};