import React from 'react';
import app from '../../../../firebase/base'

const Logout = (props) => {

    const handleLogout = () => {
        app.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
    }

    return (
        <button onClick={handleLogout}>Sign out</button>
    )
}

export default Logout;