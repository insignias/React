import React from 'react';
import './SendMail.css';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase/compat/app';

function SendMail() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    db.collection('emails').add(
    {
        to: data.to,
        subject: data.subject,
        message: data.message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    dispatch(closeSendMessage());
  }

  const dispatch = useDispatch();

  return (
    <div className='sendMail'>
        <div className="sendMail_header">
            <h3>New Message</h3>
            <CloseIcon onClick={() => dispatch(closeSendMessage())} className="sendMail_close" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name='to' placeholder="To" type="email" {...register('to', {required: true})} />
            {errors.to && <p>To is required !</p>}
            <input name='subject' placeholder="Subject" type="text" {...register('subject', {required: true})} />
            {errors.subject && <p>Subject is required !</p>}
            <input name='message' placeholder="Message..." className='sendMail_message' type="text" {...register('message', {required: true})} />
            {errors.message && <p>Message is required !</p>}
            <div className="sendMail_options">
                <Button variant="contained" color="primary" type="submit" className='sendMail_send'>Send</Button>
            </div>
        </form>
    </div>
  )
}

export default SendMail