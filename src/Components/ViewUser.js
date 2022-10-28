import React from 'react'
import NavigationBar from './NavigationBar'
import '../Styles/ViewUser.css'


export default function ViewUser() {
  return (
    <div>
    <NavigationBar />  {/* imported navigation bar over top of this page */}
    <div>
        <button type="button" className="btn btn1 btn-danger">Showing 8 rows</button>
        <button type="button" className="btn btn2 btn-outline-success">Prev</button>
        <button type="button" className="btn btn2 btn-outline-success">Next</button>

        <form className="example" action="action_page.php">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit"><i className="fa fa-search"></i></button>
        </form>

        <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Sr no.</th>
            <th scope="col">Contractor Name</th>
            <th scope="col">Official mail</th>
            <th scope="col">Position</th>
            <th scope="col">Phone number</th>
            <th scope="col">More</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Abc def</td>
            <td>abc.def@altius-int.us</td>
            <td>Software developer intern</td>
            <td>1023455676</td>
            <td><button type="button" className="btn btn3 btn-outline-success">...</button></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Abc def</td>
            <td>abc.def@altius-int.us</td>
            <td>Software developer intern</td>
            <td>1023455676</td>
            <td><button type="button" className="btn btn3 btn-outline-success">...</button></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Abc def</td>
            <td>abc.def@altius-int.us</td>
            <td>Software developer intern</td>
            <td>1023455676</td>
            <td><button type="button" className="btn btn3 btn-outline-success">...</button></td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Abc def</td>
            <td>abc.def@altius-int.us</td>
            <td>Software developer intern</td>
            <td>1023455676</td>
            <td><button type="button" className="btn btn3 btn-outline-success">...</button></td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Abc def</td>
            <td>abc.def@altius-int.us</td>
            <td>Software developer intern</td>
            <td>1023455676</td>
            <td><button type="button" className="btn btn3 btn-outline-success">...</button></td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Abc def</td>
            <td>abc.def@altius-int.us</td>
            <td>Software developer intern</td>
            <td>1023455676</td>
            <td><button type="button" className="btn btn3 btn-outline-success">...</button></td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Abc def</td>
            <td>abc.def@altius-int.us</td>
            <td>Software developer intern</td>
            <td>1023455676</td>
            <td><button type="button" className="btn btn3 btn-outline-success">...</button></td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Abc def</td>
            <td>abc.def@altius-int.us</td>
            <td>Software developer intern</td>
            <td>1023455676</td>
            <td><button type="button" className="btn btn3 btn-outline-success">...</button></td>
          </tr>
        </tbody>
        </table>
        <button type="button" className="btn btn4 btn-outline-success">Add new Contractor</button>

    </div>
    </div>
  )
}
