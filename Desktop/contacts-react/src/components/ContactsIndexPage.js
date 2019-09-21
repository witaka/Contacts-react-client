import React, { Component } from "react";
import { Link } from "react-router-dom";
import Contact from "../requests/contact";
import Progress from "./Progress";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';

class ContactsIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      contacts: []
    };

    this.tabHandleClick = this.tabHandleClick.bind(this);
  }

  componentDidMount() {
    Contact.all().then(contacts => {
      this.setState({
        loading: false,
        contacts: contacts
      });
    });
  }


  tabHandleClick(event) {
    window.history.go(-1)
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return (
        <main>
          <div class="centered">
            <Progress />
          </div>
        </main>
      );
    }
    return (
      <main className="EventsIndexPage">

        <ul class="Contacts">
          {this.state.contacts.map(contact => (
            <li class="Contact" key={contact.id}>
              <Link class="Contact_link"
                style={{ color: "black" }}
                to={`/contacts/${contact.id}`}
              >
                {contact.first_name} {contact.last_name}
              </Link>
            </li>
          ))}
        </ul>
      </main >
    );
  }
}

export default ContactsIndexPage;


