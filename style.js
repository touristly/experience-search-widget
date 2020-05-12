import {
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  panel: {
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '0px 0px 4px 4px',
    padding: '20px',
    width: '80%',
  },
  panelComp: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '10px',
    marginRight: '10px',
    marginBottom: '20px'
  },
  panelTitle: {
    margin: '0',
    paddingTop: '10px',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '1.3em',
    lineHeight: '30px',
    color: '#000000',
  },
  panelTitle: {
    margin: '0',
    paddingTop: '10px',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '1.3em',
    lineHeight: '30px',
    color: '#000000'
  },
  panelDesc: {
    margin: '0',
    paddingBottom: '10px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '1em',
    lineHeight: '22px',
    color: '#72777E',
  },
  searchBox: {
    backgroundColor: '#FFFFFF',
    padding: '20px',
  },
  inputBox: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #4B4FA6',
    boxSizing: 'border-box',
    borderRadius: '4px 4px 0px 0px',
    padding: '10px',
    height: '56px',
    width: '80%',
    fontSize: '1em',
  },
  inputSearchWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  searchText: {
    color: 'white',
    textAlign: 'center',
    fontSize: '1em',
    paddingTop: '17px',
    fontWeight: 'bold',
  },
  searchBtn: {
    backgroundColor: '#E10000',
    borderRadius: '4px',
    marginLeft: '10px',
    height: '56px',
    width: '182px',
  }
})

export default styles