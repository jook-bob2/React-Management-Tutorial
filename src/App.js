import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '김진석',
  'birthday': '910929',
  'gender': '남자',
  'job': 'Developer'
  },
  {
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '홍길동',
  'birthday': '001101',
  'gender': '여자',
  'job': '프리랜서'
  },
  {
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '이수',
  'birthday': '890101',
  'gender': '남자',
  'job': '가수'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c => {return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>)})}
      </div>
    );
  }
}

export default App;
