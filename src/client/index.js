/** @jsx h */
import { h, render, Component } from 'preact';

const Header = () => (
  <header>
    <h1>This is a headers</h1>
  </header>
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      text: '',
      showName: false,
    };

    this.onReset = this.onReset.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { text } = this.state;

    this.setState({
      name: text,
      showName: true,
      text: '',
    });
  }

  onReset() {
    this.setState({
      showName: false,
      name: '',
    });
  }

  render() {
    const { name, text, showName } = this.state;

    let nameThing;
    if (showName) {
      nameThing = (
        <div className="name-showing-thing">
          <p>
            Hello,
            {` ${name}!`}
          </p>
        </div>
      );
    }

    return (
      <div>
        <Header />
        {nameThing}
        <form onSubmit={this.onSubmit}>
          <label htmlFor="name">
            Enter your name:
            <input
              type="text"
              id="name"
              placeholder="Jane Doe"
              value={text}
              onChange={e => this.setState({ text: e.target.value })}
            />
          </label>
          <input type="submit" value="Submit" />
          <button type="button" onClick={this.onReset}>
            Reset
          </button>
        </form>
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
render(<App />, document.body);
