import React from 'react';
// import styled from 'styled-components';

export class Counter extends React.Component {
  constructor(props) {
    // 부모 클래스인 Component의 생성자 호출
    super(props);
    this.state = {
      number: 0,
    };
    // 바인딩
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  handleIncrement() {
    console.log(this); // 바인딩을 안 했다면 undefined, 했다면 Counter
    // setState는 호출 직후에 상태가 바로업데이트 되지 않는다.(비동기적)  -> Prev 사용
    // this.setState({number: this.state.number +1});
    this.setState((prev) => ({ number: prev.number + 1 }));
    this.setState((prev) => ({ number: prev.number + 1 }));
  }
  handleDecrement = () => {
    this.setState((prev) => ({ number: prev.number - 1 }));
  };
  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button onClick={this.handleIncrement}>증가</button>
        <button onClick={this.handleDecrement}>감소</button>
      </div>
    );
  }
}

export class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'black',
      txt: '검정색',
    };
  }
  handleTextRed = () => {
    this.setState((prev) => {
      return { color: 'red', txt: '빨간색' };
    });
  };
  handleTextBlue = () => {
    this.setState((prev) => {
      return { color: 'blue', txt: '파란색' };
    });
  };
  render() {
    const { color, txt } = this.state;
    return (
      <div>
        <h1 style={{ color }}>{txt} 글씨</h1>
        <button onClick={this.handleTextRed}>빨간색</button>
        <button onClick={this.handleTextBlue}>파란색</button>
      </div>
    );
  }
}

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: '사라져라',
      content: '안녕하세요',
      toggle: true,
    };
  }
  handleButtonText = (toggle) => {
    if (toggle) {
      this.setState((prev) => {
        return { toggle: !prev.toggle, txt: '보여라', content: '' };
      });
    } else {
      this.setState((prev) => {
        return { toggle: !prev.toggle, txt: '사라져라', content: '안녕하세요' };
      });
    }
  };
  render() {
    const { txt, content, toggle } = this.state;
    return (
      <div>
        <button onClick={() => this.handleButtonText(toggle)}>{txt}</button>
        <h1>{content}</h1>
      </div>
    );
  }
}

export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputWriter: '',
      inputTitle: '',
      comments: [],
      searchType: 'writer',
      inputSearch: '',
      filtered: [],
    };
  }

  onChange = (e) => {
    this.setState(() => ({ inputWriter: e.target.value }));
  };

  addComment = () => {
    const newComment = {
      writer: this.state.inputWriter,
      title: this.state.inputTitle,
    };
    this.setState(() => {
      return {
        comments: [...this.state.comments, newComment],
        inputWriter: '',
        inputTitle: '',
      };
    });
  };

  searchComment = () => {
    const { comments, searchType, inputSearch } = this.state;
    const searchResult = comments.filter(el => {
      // 문자열로 객체 키에 접근할때는 [] 사용!
      const type = el[searchType];
      console.log(type);
      const include = type.includes(inputSearch);
      if(!include) {
        return false;
      }
      return true;
    })
    this.setState({filtered: searchResult});
  };

  render() {
    console.log(this.state);
    const { inputWriter, inputTitle, comments, searchType, inputSearch, filtered } = this.state;
    return (
      <>
        <form>
          <label htmlFor='writer'>작성자: </label>
          <input
            id='writer'
            type='text'
            value={inputWriter}
            onChange={(e) => {
              this.onChange(e);
            }}
          />
          <label htmlFor='title'>제목: </label>
          <input
            id='title'
            type='text'
            value={inputTitle}
            onChange={(e) => {
              this.setState({ inputTitle: e.target.value });
            }}
          />
          <button type='button' onClick={this.addComment}>
            작성
          </button>
        </form>
        <br />
            
        <form>
          <select
            value={searchType}
            onChange={(e) => {
              this.setState({ searchType: e.target.value });
            }}
          >
            <option value='writer'>
              작성자
            </option>
            <option value='title'>
              제목
            </option>
          </select>
          <input
            type='text'
            placeholder='검색어'
            value={inputSearch}
            onChange={(e) => {
              this.setState({ inputSearch: e.target.value });
            }}
          />
          <button type='button' onClick={this.searchComment}>
            검색
          </button>
        </form>

        <table border={1} cellSpacing={0}>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((el, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{el.title}</td>
                  <td>{el.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
