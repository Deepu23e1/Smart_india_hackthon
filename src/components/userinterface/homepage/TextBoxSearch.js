import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import { auto } from '@popperjs/core';
export default function TextBoxSearch(){
    return(<div style={{display:'flex',alignItems:'center',width:'40%',height:50,background:'#f3e5f5',borderRadius:25}}>
       <SearchIcon color='#333' style={{fontSize:30,paddingLeft:10}}/>
       <input type='text' style={{width:'70%',height:26,border:0,borderWidth:0,outline:0,background:'transparent',color:'#fff',fontSize:20}}  placeholder='Search Here...' />
       <ListIcon color='inherit' style={{fontSize:34,paddingLeft:10,marginLeft:auto,marginRight:15}}/>
    </div>)
}