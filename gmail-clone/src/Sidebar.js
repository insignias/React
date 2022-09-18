import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import CreateIcon from '@mui/icons-material/CreateOutlined';
// import AddIcon from '@mui/icons-material/Add';
import { Button, IconButton } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOption from './SidebarOption';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';
import { db } from './firebase';

function Sidebar() {
  const dispatch = useDispatch()

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
    <div className='sidebar'>
        <Button onClick={() => dispatch(openSendMessage())} className='sidebar_compose' startIcon={<CreateIcon fontSize="large" />}>Compose</Button>
        <SidebarOption Icon={InboxIcon} title="Inbox" number={emails.length} selected={true}/>
        <SidebarOption Icon={StarIcon} title="Starred" number={emails.length}  />
        <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={emails.length}  />
        <SidebarOption Icon={LabelImportantIcon} title="Important" number={emails.length}  />
        <SidebarOption Icon={NearMeIcon} title="Sent" number={emails.length}  />
        <SidebarOption Icon={NoteIcon} title="Draft" number={emails.length}  />
        <SidebarOption Icon={ExpandMoreIcon} title="More" />
        <div className="sidebar_footer">
            <div className="sidebar_footerIcons">
                <IconButton>
                    <PersonIcon />
                </IconButton>
                <IconButton>
                    <DuoIcon />
                </IconButton>
                <IconButton>
                    <PhoneIcon />
                </IconButton>
            </div>
        </div>
    </div>
  )
}

export default Sidebar