import React, { Component } from "react";
import PhoneList from "./PhoneList";
import PhoneForm from "./PhoneForm";
import contact from "../requests/contact";
import Phone from "../requests/phones";
import Progress from "./Progress";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";

class ContactShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      contact: null
    };

    this.contactId = this.props.match.params.id;
    this.createPhone = this.createPhone.bind(this);
    this.deletePhone = this.deletePhone.bind(this);
    this.tabHandleClick = this.tabHandleClick.bind(this);
    // this.editPhone = this.editPhone.bind(this)

  }

  componentDidMount() {
    const contactId = this.props.match.params.id;
    contact.one(contactId).then(contact => {
      this.setState({
        contact: contact,
        loading: false
      });
    });
  }


  tabHandleClick(event) {
    this.props.history.push(`/`);
  }

  createPhone(phoneParams) {
    const { contact } = this.state;

    Phone.create(contact.id, phoneParams).then(({ id }) => {
      window.location.reload();
      this.setState({
        contact: {
          ...contact,
          phones: [phoneParams, ...contact.phones]
        }
      });
    });
  }

  // editPhone(phoneParams) {
  //   const { contact } = this.state;
  //   console.log(phoneParams);
  //   Phone.update(429, phoneParams).then(({ id }) => {
  //     window.location.reload();
  //     this.setState({
  //       contact: {
  //         ...contact,
  //         phones: [phoneParams, ...contact.phones]
  //       }
  //     });
  //   });
  // }

  deletePhone(id) {
    const { contact } = this.state;

    Phone.delete(id).then(({ id }) => { });
    this.setState({
      contact: {
        ...contact,
        phones: this.state.contact.phones.filter(a => a.id !== id)
      }
    });


  }

  render() {
    const { contact, loading } = this.state;
    if (loading) {
      return (
        <main className="ContactShowPage">
          <div class="centered">
            <Progress />
          </div>
        </main>
      );
    }

    return (
      <main className="ContactShowPage">
        <Paper>
          <Tab onClick={this.tabHandleClick} label="< BACK" />
        </Paper>

        <div class="container_div">
          <div>
            <Paper style={{ padding: "5%" }}>
              <h1>{contact.first_name} {contact.last_name}</h1>
              <h2>{contact.email}</h2>
              <h3>{contact.address_line_1} , {contact.province} , {contact.country_name} , {contact.postcode} </h3>
              <h5>{"How did you hear about us? - " + contact.how_did_you_hear_about_us}</h5>
              <h5>{"What is your budget? - " + contact.what_is_your_budget}</h5>
              <h5>{"What_is_your_favourite_color? - " + contact.what_is_your_favourite_color}</h5>
              <div style={{ paddingLeft: "35%", paddingRight: "25%" }}>
                <PhoneList
                  phones={contact.phones}
                  onPhoneDeleteClick={this.deletePhone}
                // onEditSubmitClick={this.editPhone}
                />
                <PhoneForm onSubmit={this.createPhone} />
              </div>
            </Paper>

          </div>
        </div>
      </main>
    );
  }
}
export default ContactShowPage;
