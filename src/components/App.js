import React from 'react';
import '../css/App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData} from '../actions/actions'

const mapStateToProps = (State) =>{
  return{
    loading: State.fetch.loading,
    data: State.fetch.data,
  }
}

const mapDispatchToProps = (Dispatch) =>{
  return{
    ...bindActionCreators({fetchData},Dispatch)
  }
}
class App extends React.Component {

  componentDidMount(){
    this.props.fetchData();
  }
  render(){
    const list = this.props.data.map((list,i)=>{
      return(
        <tr key={'rest_'+i}>
        <td data-column-label="Brand"><span>{list.Brand}</span></td>
        <td data-column-label="Variety"><span>{list.Variety}</span></td>
        <td data-column-label="Style"><span>{list.Style}</span></td>
        <td data-column-label="Country"><span>{list.Country}</span></td>
        <td data-column-label="Stars"><span>{list.Stars}</span></td>
        <td data-column-label="Top Ten"><span>{list["Top Ten"]}</span></td>
        </tr>)
    })

    if(this.props.loading){
      return(<div>Loading...</div>);
    }
    return (
    
<div class="container">
  <h1>Ramen of the world</h1>
  <table>
    <thead>
      <tr>
        <th scope="col">Brand</th>
        <th scope="col">Variety</th>
        <th scope="col">Style</th>
        <th scope="col">Country</th>
        <th scope="col">Stars</th>
        <th scope="col">Top Ten</th>
      </tr>
    </thead>
    <tbody>
     {list}
    </tbody>
  </table>
</div>
  );
  }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
