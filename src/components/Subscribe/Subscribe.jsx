import React from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import TextField from '@material-ui/core/TextField';
import './Form.css';
import {
    SubscribeWrapper,
    SubscribeContainer,
    SubscribeContent,
    SubscribeH2,
    SubscribeH3
} from './SubscribeElements.jsx';
import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Subscribe() {
    return (
        <>
            <SubscribeWrapper>
                <SubscribeContainer>
                    <SubscribeContent>
                        <SubscribeH2>SUBSCRIBE</SubscribeH2>
                        <SubscribeH3>Get updates about new dishes and upcoming events</SubscribeH3>
                        <>
                            <Formik
                                initialValues={{ email: "" }}
                                onSubmit={async values => {
                                    toast.success('Subscription is successfull', {
                                        position: "top-right",
                                        autoClose: 3000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: false,
                                        draggable: false,
                                        progress: undefined,
                                        transition: Zoom
                                    });
                                }}
                                validationSchema={Yup.object().shape({
                                    email: Yup.string()
                                    .email("Enter valid email")
                                    .required("Required")
                                })}
                                >
                                {props => {
                                    const {
                                        touched,
                                        errors,                           
                                        isSubmitting,
                                        handleChange,                                
                                        handleSubmit,                                  
                                    } = props;
                                    return (
                                    <form onSubmit={handleSubmit}>
                                        <TextField
                                            id="email"
                                            name="email"
                                            placeholder="Email"
                                            onChange={handleChange}
                                            error={touched.email && Boolean(errors.email)}
                                            helperText={touched.email && errors.email}
                                            variant="outlined"
                                            color="secondary"
                                            size="small"
                                            margin="normal"
                                        />
                                        <button id="button" type="submit" disabled={isSubmitting}>
                                        SUBMIT
                                        </button>
                                    </form>
                                    );
                                }}
                            </Formik>
                        </>
                    </SubscribeContent>
                </SubscribeContainer>
            </SubscribeWrapper>
        </>
    )
}
