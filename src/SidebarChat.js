import React , {useEffect,useState}from 'react'
import Avatar from '@material-ui/core/Avatar';
import { IconButton } from '@material-ui/core';
import './sidebarChat.css'
import {Link} from 'react-router-dom'
import db from './firebase'

function SidebarChat({id ,name}) {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        if(id) {
            db.collection('rooms')
            .doc(id)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot((snapshot) =>
             setMessages(snapshot.docs.map((doc)  => doc.data())));
        }
        
    }, [id])
   
    // const creatChat = () =>{
    //     const roomName = prompt("please enter name for chat");



    //     if(roomName){
           
    //         db.collection('rooms').add({
    //             name: roomName,
    //         })
    //     }
    // };                   

    return (
        <Link to={`/rooms/${id}`}>
              <div  className="chatbar_chat">
            <IconButton>
            <Avatar  className="chatAvatar"/>
            </IconButton>
                <div className="chatbar_chatI">
                <h2 className="chatbar_chatName"> {name}</h2>
                <p className="chatbar_chatLast">{messages[0]?.message.slice(0,6)} ....</p>
                <p className="chatbar_chatTimestamp"> 11:33</p>

                </div>
        </div>
        </Link>
      
    )
}

export default SidebarChat
