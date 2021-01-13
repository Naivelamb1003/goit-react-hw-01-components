import PropTypes from 'prop-types';
import s from './FriendListItem.module.css'
const FriendListItem = ({avatar,name,isOnline,id}) => {
    return(
        <li className={s.item} key={id}>

            <span className = {isOnline ? s.statusOnline : s.statusOfline}></span>
            <img className={s.avatar} src={avatar} alt="" width="48" />
            <p className={s.name}>{name}</p>
        </li>
    )


}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    
       };
  
  export default FriendListItem;