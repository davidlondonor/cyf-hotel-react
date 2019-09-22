import React, { Component } from "react";

class SearchResults extends Component {
  state = {
    id: "",
    title: "",
    firstName: "",
    surName: "",
    email: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: ""
  };

  //
  printRenderTable() {
    const {
      checkInDate,
      checkOutDate,
      email,
      firstName,
      id,
      roomId,
      surname,
      title
    } = this.props.informacion;

    const informationArray = this.props.informacion;
    return (
      <>
        {informationArray.map(info => (
          <tr>
            <td>{info.id}</td>
            <td>{info.firstName}</td>
            <td>{info.surname}</td>
            <td>{info.checkInDate}</td>
            <td>{info.checkOutDate}</td>
            <td>{info.email}</td>
            <td>{info.roomId}</td>
            <td>{info.title}</td>
          </tr>
        ))}
        ;
      </>
    );
  }

  render() {
    console.log(this.props.informacion);
    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">check In Date</th>
            <th scope="col">check Out Date</th>
            <th scope="col">email</th>
            <th scope="col">Room ID</th>
            <th scope="col">room</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>{this.printRenderTable()}</tbody>
      </table>
    );
  }
}

// const SearchResults = () => {
//   return <h1>Hola</h1>;
// };

export default SearchResults;
