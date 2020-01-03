import React, { Component } from 'react';
import Carousel from '../containers/Carousel';
import Options from '../containers/Options';
import Groups from '../containers/Groups';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Menu from '../containers/Menu';
import Device from '../containers/Device';

class App extends Component {
  constructor() {
    super()

    this.state = {
      loggedIn: false,
      groups: {},
      token: '',
      route: 'home',
      selectedDevice: '',
      selectedGroup: '',
      centrale: {}
    }
  }

  componentDidMount() {
    if (this.state.token) {
      this.getStatus(this.state.token);
    }
  }

  render() {

    if (this.state.token) {

      const { groups, route, selectedDevice, selectedGroup, token } = this.state; // so we dont have to type this.state.groups etc every time.

      const routing = () => { //we check which route we should render
        switch (route) {
          case 'options': return <Options />;
          case 'groups': return <Groups groups={groups} token={token} />;
          case 'home': return <Carousel groups={groups} setSelectedDevice={this.setSelectedDevice} token={token} />;
          case 'login': return <Login login={this.login} onRouteChange={this.onRouteChange} />;
          case 'register': return <Register register={this.register} onRouteChange={this.onRouteChange} />;
          case 'device': return <Device device={selectedDevice} group={selectedGroup} groups={groups} token={token} />;
          default: return <Groups groups={groups} token={token} />;
        }
      }

      if (!groups.length) { // because if length is 0 it is the same as false. So ! makes it true
        // we need to check if groups has a Ongesorteerd group. Otherwise create it.
        return <h1>Loading</h1> // loading screen
      } else {
        return (
          <div>
            <Menu onRouteChange={this.onRouteChange} />
            {routing()}
          </div>
        );
      }

    } else {

      const routing = () => { //we check which route we should render
        switch (this.state.route) {
          case 'login': return <Login login={this.login} onRouteChange={this.onRouteChange} />;
          case 'register': return <Register register={this.register} onRouteChange={this.onRouteChange} />;
          default: return <Login login={this.login} onRouteChange={this.onRouteChange} />;
        }
      }

      return (
        <div>
          <Menu onRouteChange={this.onRouteChange} />
          {routing()}
        </div>
      );
    }
  }

  // ========================================= AUTHENTICATION =========================================

  login = (username, password) => {
    // console.log("logging in: " + username + " with password: " + password);
    var obj = {
      method: 'POST',
      body: JSON.stringify({
        'username': username,
        'password': password,
      })
    };

    const setNewStatus = (json) => {
      this.getStatus(json);
      this.setState({ route: 'home' })
    }

    fetch('http://localhost:8000/login', obj)
      .then(function (res) {
        if (res) {
          if (res.status === 401){
            console.log("login failed, please check your credentials")
          } else {
            console.log(res);
            return res.json();
          }
         
        }
      })
      .then(function (resJson) {
        if (resJson) {
          try {
            setNewStatus(resJson.token);
          } catch (e) {
            console.warn(e);
          }
        }
      })
      // .catch(error => console.log(error));
  }


  register = (username, password) => {
    console.log("Registering: " + username + " with password: " + password);

    var obj = {
      method: 'POST',
      body: JSON.stringify({
        'username': username,
        'password': password,
        'huiscentraleId': 'test-id'
      })
    };

    const setNewStatus = (json) => {
      this.getStatus(json);
      this.setState({ route: 'home' })
    }

    fetch('http://localhost:8000/register', obj)
      .then(function (res) {
        if (res) {
          console.log(res);
          console.log("here1");
          return res.json();
        }
      })
      .then(function (resJson) {
        console.log("ddasd")
        if (resJson) {
          console.log(resJson);
          try {
            setNewStatus(resJson.token);
          } catch (e) {
            console.warn(e);
          }
        }
      })
      .catch(error => console.log(error));
  }

  // ========================================= GET STATUS =========================================

  getStatus = (token) => {

    console.log(token);

    this.setState({ token: token });
    console.log("getting status")
    var getobj = {
      method: 'GET',
      headers: {
        authorization: "bearer " + token
      }
    };

    const setData = (json) => {

      // ============== create the groups ================
      let groups = [];

      let ongesorteerd = false

      json.centrale.arduinos.forEach(arduino => {
        let duplicate = false;
        groups.forEach(group => {
          if (group.name === arduino.group) {
            duplicate = true;
          }

          if (group.name === "Ongesorteerd") {
            ongesorteerd = true;
          }
        })

        if (!duplicate) {
          groups.push({
            name: arduino.group,
            arduinos: []
          });
        }
      });

      if (!ongesorteerd) {
        groups.push({
          name: "Ongesorteerd",
          arduinos: []
        });
      }

      console.log(groups);

      // ============== fill the groups with Arduinos ================
      json.centrale.arduinos.forEach(arduino => {
        // console.log(group);
        let mapped = false;

        groups.forEach(group => {
          if (group.name === arduino.group) {
            mapped = true;

            group.arduinos.push(arduino);
          }
        });

        if (!mapped) {
          // set to ongesorteerd
          groups.forEach(group => {
            if (group.name === "Ongesorteerd") {

              group.arduinos.push(arduino);
            }
          });
        }
      });
      this.setState({ groups: groups });
    }


    // ============== Get the status from the server ================

    fetch('http://localhost:8000/status', getobj)
      .then(function (res) {
        return res.json();
      })
      .then(function (resJson) {
        console.log(resJson);
        setData(resJson);
      });
  }


  // =========================================  =========================================


  onRouteChange = (route) => {

    if (route === "login" || route === "register" || !this.state.token) {

      this.setState({
        loggedIn: false,
        groups: {},
        token: '',
        route: 'home',
        selectedDevice: '',
        selectedGroup: '',
        centrale: {}
      });

    } else {
      this.getStatus(this.state.token);
    }

    this.setState({ route: route });
  }


  getGroup(device) {
    var selectedGroup;

    this.state.groups.forEach(group => {
      group.arduinos.forEach(arduino => {
        if (arduino === device) {
          selectedGroup = group;
        }
      });
    });

    this.setState({ selectedGroup: selectedGroup });
  }


  setSelectedDevice = (selectedDevice) => {
    this.setState({ selectedDevice: selectedDevice });
    this.setState({ route: 'device' });
    this.getGroup(selectedDevice);
  }
}

export default App;