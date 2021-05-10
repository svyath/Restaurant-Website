import 'date-fns';
import React, { Component } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import {
    ReservContainer,
    ReservationHeader,
    ReservationLogo,
    ReservationH2,
    ReservationH3
} from './ReservationElements.jsx';
import {Line} from '../../globalStyles';
import Subscribe from '../../components/Subscribe/Subscribe';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PeopleIcon from '@material-ui/icons/People';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import { Formik } from "formik";
import * as Yup from "yup";

function Reservation() {
    const currentDate = Date.now;

    const [selectedDate, setSelectedDate] = React.useState(currentDate);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validationSchema = yup.object({
        email: yup
          .string()
          .email('Enter a valid email')
          .required('Email is required'),
        phone: yup
          .string()
          .matches(phoneRegExp, 'Phone number is not valid')
          .required('Password is required'),
        guests: yup
          .number()
          .positive()
          .integer()
          .required('Required'),
        name: yup
          .string()
          .required('Required')
      });
  
    return (
        <>
            <Navbar />
                <ReservationHeader>
                    <ReservationLogo>- Chef Restaurant -</ReservationLogo>
                </ReservationHeader>
                <ReservContainer>
                    <ReservationH2>RESERVATION</ReservationH2>
                    <ReservationH3>Book a table online</ReservationH3>
                    <Line />
                    <>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Date"
                                format="MM/dd/yyyy"
                                variant="filed"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'select date',
                                }}
                            />
                            <KeyboardTimePicker
                                margin="normal"
                                id="time-picker"
                                label="Time"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'select time',
                                }}
                            />
                            <TextField
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                label="Email"
                                variant="standard"
                                color="primary"
                                margin="normal"
                                InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                    <AlternateEmailIcon />
                                    </InputAdornment>
                                ),
                                }}
                            />
                            <TextField
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                label="Name"
                                variant="standard"
                                color="primary"
                                margin="normal"
                                InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                    <PersonIcon />
                                    </InputAdornment>
                                ),
                                }}
                            />
                            <TextField
                                id="guests"
                                name="guests"
                                placeholder="How many of you?"
                                label="Guests"
                                variant="standard"
                                color="primary"
                                margin="normal"
                                InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                    <PeopleIcon />
                                    </InputAdornment>
                                ),
                                }}
                            />
                            <TextField
                                id="phone"
                                name="phone"
                                label="Phone number"
                                placeholder="Your phone number"
                                variant="standard"
                                color="primary"
                                margin="normal"
                                InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                    <PhoneEnabledIcon />
                                    </InputAdornment>
                                ),
                                }}
                            />
                            <button id="button" type="submit" >
                               MAKE RESERVATION
                            </button>
                        </Grid>
                    </MuiPickersUtilsProvider>
                    </>
                    <h2>You can also call: +1 224 6787 004 to make a reservation.</h2>
                </ReservContainer>
                <Subscribe />
            <Footer />
        </>
    )
}

export default Reservation
