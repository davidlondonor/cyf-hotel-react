import React from "react";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src="" alt="Logo Conferencia" />
        </div>
        <div className>
          <img src="" alt="Avatar" />
          <h1>
            {this.props.firsName}
            {this.props.lastName}
          </h1>
          <h3>{this.props.jobTitle}</h3>
          <h4>@{this.props.twitter}</h4>
        </div>
      </div>
    );
  }
}

export default Badge;
