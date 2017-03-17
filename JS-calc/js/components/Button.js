import React from 'react';

export default class Btn extends React.Component {
  onclick (e) {
      // console.log(this);
      // console.log(this.props.click[0]);
      this.props.click[0].bind(this)();
      this.props.click[1].bind(this)();
  }

  render() {
    const { value } = this.props;

    console.log(this.props);
    console.log(this);
    return (
      <div class="col-xs-3 s text-center">
        <button onClick={this.onclick.bind(this)} class={this.props.type + " btn btn-calc text-center"}><p>{value}</p></button>
      </div>
    );
  }
}
