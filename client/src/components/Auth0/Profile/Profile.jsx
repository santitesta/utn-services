import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from './Profile.module.css'

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated?(
      <div className={styles.container}>
        <img src={user.picture} alt={user.name} />
        <h2 className={styles.username}>{user.name}</h2>
        <p className={styles.mail}>{user.email}</p>
        {user.name === 'Santiago Testa'?
        <h1 className={styles.type}>Admin</h1>
        :<h1 className={styles.type}>User</h1>}
      </div>
    )
    :<h1>Nadie logeado</h1>
  );
};

export default Profile;