import React,  {useState, useEffect} from 'react'
import { useStateValue } from './StateProvider';
import Menubar from './Menubar';
import './chatsideBar.css'
import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TextField from '@material-ui/core/TextField';
import SidebarChat from './SidebarChat'
import { IconButton } from '@material-ui/core';
import db from './firebase'


function ChatbarSide() {
    // const [{user}, dispatch] = useStateValue();
    const [rooms, setRooms] = useState( []);
    useEffect(() => {
       const unsubscribe = db.collection('rooms').onSnapshot((snapshot) => {
           setRooms(
               snapshot.docs.map((doc) =>   ({
                id:doc.id,
                data:doc.data(),
            }

           )))
       });
       return () => {
           unsubscribe();
       }
    }, [])
    const addchat = () =>{
        const roomName = prompt("please enter name for chat");



        if(roomName){
           
            db.collection('rooms').add({
                name: roomName,
            })
        }


    }
    return (
        <div className="chatbar">
            <div className="chatbar_header">
            <Menubar className="chatbar_menu" />
            <IconButton  color="inherit">
            <AddCircleIcon fontSize="large" onClick={addchat}/>
             </IconButton>
         
            <h1 className="chatbar_headerTel">Telegram</h1>

            </div>
            <div>
           
                <div className="chatbar_search">
                
                <IconButton color="inherit">
                <SearchIcon />
                </IconButton>
                <TextField id="standard-basic" label="Search" variant="standard" />
                </div>
                

                
                
            </div>
            <div className="chatbar_chatInfo">
                
                
                {rooms.map((room) => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />))}
               
    
            </div>
        </div>
    )
}

export default ChatbarSide
