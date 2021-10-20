import React , {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import { useStateValue } from './StateProvider';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import FileCopyRoundedIcon from '@material-ui/icons/FileCopyRounded';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import MicIcon from '@material-ui/icons/Mic';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import TextField from '@material-ui/core/TextField';
import './chat.css'
import { Button, IconButton } from '@material-ui/core';
import db from './firebase'
import firebase from 'firebase'



function Chat() {


    const [input , setInput] = useState('');
    const {roomId} = useParams();
    const [roomName , setRoomName] = useState('');
    const [messages, setMessages] = useState([]);
    const [{user}, dispatch] = useStateValue();

    const sendMessage = (e) => {
        e.preventDefault();
        if(input==="" || input===" " || input==="  " || input==="   "  ){
            console.log("message is empty")
        }
        else{
            db.collection('rooms').doc(roomId).collection('messages').add({
                message:input,
                name: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            });
        }
      

        setInput('');
    }
    useEffect(() => {
        if(roomId){
          db.collection("rooms")
            .doc(roomId)
            .onSnapshot((snapshot) =>  setRoomName(snapshot.data().name)   
             );
             db.collection('rooms')
             .doc(roomId)
             .collection("messages")
             .orderBy("timestamp", "asc")
             .onSnapshot((snapshot) => 
             setMessages(snapshot.docs.map((doc) => 
             doc.data())));
        }
     }, [roomId]);
 
    return (
        <div className="chat">
            <div className="chat_header">
                <div className="chat_headerInfo">
                    <h2>{roomName}</h2>
                    <p>
                    Last Seen {""}
                        {new Date(
                            messages[messages.length-1]?.timestamp?.toDate()).toUTCString()}
                    </p>
                </div>


                <div className="chat_headerRight">
                   <IconButton color="inherit">
                   <SearchIcon />
                   </IconButton>
                   <IconButton color="inherit">
                   <MoreVertIcon />
                   </IconButton>
                   
                    
                </div>
                
            </div>
            <div className="chat_body">
            {messages.map((message) =>( 
                <p   className={`chat_bodyMessage ${message.name===user.displayName && `chat_reciever`}`}>
             <IconButton color="inherit">
             <Avatar className="chat_avatar" src={ `${message.name===user.displayName &&  `${user?.photoURL}`} `}/>
                 </IconButton>  
                 
                     <span className="Message_name">{message.name}</span> 
                      {message.message}  
                     <span className="timestamp" > {new Date(message.timestamp?.toDate()).toUTCString()}
                     </span></p> 
                 ))}
                    
                
               
            </div>
            <div className="chat_footer">
              <IconButton color="inherit">
              <Avatar src={user?.photoURL} /></IconButton>  
           
                <form>
                <TextField value={input} onChange={e => setInput(e.target.value)} id="standard-basic" label="write a message" />
                <Button type="submit" onClick={sendMessage}> send </Button>
                </form>
               
                
               

               <div>
                    <IconButton color="inherit">
                    <FileCopyRoundedIcon  />
                        </IconButton> 
                        <IconButton color="inherit">
                            <CameraAltIcon />
                            </IconButton>
                            <IconButton color="inherit">
                            <MicIcon />
                            </IconButton>
                        
                            
                        
                    
                    <IconButton color="inherit">
                            <EmojiEmotionsIcon />
                            </IconButton>
               </div>
           
            </div>

        </div>
    )
}

export default Chat
