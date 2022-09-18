import React, { useEffect, useState } from 'react';
import './EmailList.css';
import { Checkbox, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
// import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
// import PeopleIcon from '@mui/icons-material/People';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import Section from './Section';
import EmailRow from './EmailRow';
import { db } from './firebase';

function EmailList() {
  const [emails, setEmails] = useState([]);
  

  useEffect(() => {
    db.collection('emails')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => 
        setEmails(snapshot.docs.map((doc) => 
            ({
                id: doc.id,
                data: doc.data()
            })
        ))
    )
  }, [])

  return (
    <div className='emailList'>
        <div className="emailList_settings">
            <div className="emailList_settingsLeft">
                <Checkbox />
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
                <IconButton>
                    <RedoIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
            <div className="emailList_settingsRight">
                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton>
                    <ChevronRightIcon />
                </IconButton>
                <IconButton>
                    <KeyboardHideIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
            </div>
        </div>
        <div className="emailList_sections">
            <Section Icon={InboxIcon} title='Primary' color='red' selected />
            <Section Icon={PeopleOutlineOutlinedIcon} title='Social' color='green' />
            <Section Icon={SellOutlinedIcon} title='Promotions' color='#1A73E8' />
        </div>
        <div className="emailList_list">
            {emails.map(({id, data: { to, subject, message, timestamp }}) => (
                <EmailRow 
                
                    id={id}
                    key={id}
                    title={to}
                    subject={subject}
                    description={message}
                    time={new Date(timestamp?.seconds * 1000).toUTCString()}
                />
            ))}
            <EmailRow 
                title="sharan.samir@gmail.com"
                subject="GMAIL CLONE"
                description="Looks cool right !!"
                time="10:00 pm"
            />
            <EmailRow 
                title="sharan.samir@gmail.com"
                subject="GMAIL CLONE 1"
                description="Looks cool right !!"
                time="10:00 pm"
            />
            <EmailRow 
                title="sharan.samir@gmail.com"
                subject="GMAIL CLONE 2"
                description="Looks cool right !!"
                time="10:00 pm"
            />
            <EmailRow 
                title="sharan.samir@gmail.com"
                subject="GMAIL CLONE 3"
                description="Looks cool right !!"
                time="10:00 pm"
            />
            <EmailRow 
                title="sharan.samir@gmail.com"
                subject="GMAIL CLONE 4"
                description="Looks cool right !!"
                time="10:00 pm"
            />
            <EmailRow 
                title="sharan.samir@gmail.com"
                subject="GMAIL CLONE 5"
                description="Looks cool right !!"
                time="10:00 pm"
            />
            <EmailRow 
                title="sharan.samir@gmail.com"
                subject="GMAIL CLONE 6"
                description="Looks cool right !!"
                time="10:00 pm"
            />
            <EmailRow 
                title="sharan.samir@gmail.com"
                subject="GMAIL CLONE 7"
                description="Looks cool right !!"
                time="10:00 pm"
            />
            <EmailRow 
                title="sharan.samir@gmail.com"
                subject="GMAIL CLONE 8"
                description="Looks cool right !!"
                time="10:00 pm"
            />
            <EmailRow 
                title="sharan.samir@gmail.com"
                subject="GMAIL CLONE 9"
                description="Looks cool right !!"
                time="10:00 pm"
            />
        </div>
    </div>
  )
}

export default EmailList