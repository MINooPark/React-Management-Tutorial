import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customers = [
  {
    'id': 'first ID',
    'image': 'https://placeimg.com/64/64/1',
    'name': '일번',
    'birthday': '960101',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 'Second ID',
    'image': 'https://placeimg.com/64/64/2',
    'name': '이번',
    'birthday': '980101',
    'gender': '여자',
    'job': '프로그래머'
  },
  {
    'id': 'Third ID',
    'image': 'https://placeimg.com/64/64/3',
    'name': '삼번',
    'birthday': '990101',
    'gender': '중성',
    'job': '디자이너'
  },
]

class App extends Component{
  render(){
    return(
      <div>
        {
          customers.map(c => {
            return(
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;