import React from 'react';

export default class Screen extends React.Component {
  constructor() {
    super();
    this.state = {
      idle: true,
    };
  }

  toggleIdle () {
    const idle = !this.state.idle;
    this.setState({idle});
  }

  render () {
    return (
      <div id="screen" class="text-right well col-xs-12">
        <p>{this.props.numbers}</p>
      </div>
    );
  }
}
