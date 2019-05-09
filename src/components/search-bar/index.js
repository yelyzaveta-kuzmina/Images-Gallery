import React from 'react';
import styles from './styles.module.scss';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };


  render() {
    return (
      <div className="ui segment">
       <form onSubmit={this.onFormSubmit}>
          <div className={styles.searchBar}>
            <input 
              type="text" 
              spellCheck={false}
              placeholder="Word to search"
              value={this.state.term} 
              onChange={(e) => this.setState({ term: e.target.value })} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;