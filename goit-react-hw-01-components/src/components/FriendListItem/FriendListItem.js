import PropTypes from 'prop-types';

const FriendListItem = ({avatar,name,isOnline,id}) => {
    return(
        <li className="item" key={id}>

            <span className = {isOnline ? 'statusOnline' : 'statusOfline'}></span>
            <img className="avatar" src={avatar} alt="" width="48" />
            <p className="name">{name}</p>
        </li>
    )


}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.object,
    
       };
  
  export default FriendListItem;