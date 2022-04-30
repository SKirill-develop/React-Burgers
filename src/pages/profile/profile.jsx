import { Route } from 'react-router-dom';
import { EditProfileForm } from '../../components/editProfileForm/editProfileForm';
import { ProfileNav } from '../../components/profileNav/profileNav';
import styles from './profile.module.css';

export const Profile = () => {

  return (
    <div className={styles.profile}>
      <ProfileNav />
      <Route exact path="/profile" component={EditProfileForm} />
      <Route exact path="/profile/orders">
        { <h2 className="text text_type_main-large">Пока тут пусто</h2> }
      </Route>
    </div>
  );
};