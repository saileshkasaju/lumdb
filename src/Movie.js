import React from 'react';
import PropTypes from 'prop-types';

class Movie extends React.PureComponent {
  static propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { movie } = this.props;
    return (
      <div>
        <h3>{movie.title}</h3>
      </div>
    );
  }
}

export default Movie;
