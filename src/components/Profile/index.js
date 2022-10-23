
import "../../styles/components/Profile.css"
import avatar from "../../assets/avatar.png"

const Profile = () => {
  function confirmAction() {
    // eslint-disable-next-line no-restricted-globals
    const confirmAction = confirm("Are you sure want to log out?");
    if (confirmAction) {
      window.location.replace('/')
    } 
  }
  
  return (
    <div className="content-side">
    <img className="avatar mx-auto" src={avatar} alt="" />
   <span className='mx-auto py-2'>Niki Zefanya</span>
 
   <button className='button-logout' onClick={confirmAction}>Logout</button>
  
</div>
  )
}

export default Profile