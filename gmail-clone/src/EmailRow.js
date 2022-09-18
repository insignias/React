import { IconButton, Checkbox } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EmailRow.css';
import { useDispatch } from 'react-redux';
import { selectedMail } from './features/mailSlice';

function EmailRow({ id, title, subject, description, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(selectedMail({
        id, 
        title, 
        subject, 
        description, 
        time
    }));
    navigate("/mail")
  }

  return (
    <div onClick={openMail} className='emailRow'>
        <div className="emailRow_options">
            <Checkbox />
            <IconButton>
                <StarBorderIcon />
            </IconButton>
            <IconButton>
                <LabelImportantIcon />
            </IconButton>
        </div>

        <h3 className="emailRow_title">
            {title}
        </h3>

        <div className="emailRow_message">
            <h4>
                {subject}
                <span className="emailRow_description">
                    {" - "}{description}
                </span>
            </h4>
        </div>

        <p className="emailRow_time">{time}</p>
    </div>
  )
}

export default EmailRow