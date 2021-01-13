import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css'
import PropTypes from 'prop-types';

const FriendList = ({friends}) => {
return(
    <ul className={s.friendlist}>
     {
         friends.map(friend => (
            <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                               
            />
         ))

     }
    </ul>
)

}

FriendList.propTypes = {
    friends: PropTypes.array,
     };
  
  export default FriendList;
