import React, { Component } from 'react';
//class base component의 컨스트럭터
//새로운 인스턴의 클래스 만들때마다 호출됨 당연하지 컨스트럭터니까
//초기화 할때 씀.
//
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'Starting Value' };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}
        />
      </div>
    );
  }

}

export default SearchBar;
