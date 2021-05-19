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
import { useFormik } from 'formik';
import { toast, Zoom } from 'react-toastify';

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
      .required('Enter number of guests'),
    name: yup
      .string()
      .required('Name is required')
  });

  

function Reservation() {
    const currentDate = Date.now;

    const [selectedDate, setSelectedDate] = React.useState(currentDate);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

      const formik = useFormik({
        initialValues: {
          email: '',
          name: '',
          guests: '',
          phone: '',

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            toast.success('Reservation is successfull', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                transition: Zoom
            });
        },
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
                    <form onSubmit={formik.handleSubmit} className="form">
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
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
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
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
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
                                onChange={formik.handleChange}
                                error={formik.touched.guests && Boolean(formik.errors.guests)}
                                helperText={formik.touched.guests && formik.errors.guests}
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
                                onChange={formik.handleChange}
                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                helperText={formik.touched.phone && formik.errors.phone}
                                InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                    <PhoneEnabledIcon />
                                    </InputAdornment>
                                ),
                                }}
                            />
                            <button id="ReservButton" type="submit" >
                               MAKE RESERVATION
                            </button>
                        </Grid>
                    </MuiPickersUtilsProvider>
                    </form>
                    </>
                    <h2 id="Call">You can also call:<a href="tel:(380) 26 58 190 44">(380) 26 58 190 44</a> to make a reservation.</h2>
                </ReservContainer>
                <Subscribe />
            <Footer />
        </>
    )
}

export default Reservation
