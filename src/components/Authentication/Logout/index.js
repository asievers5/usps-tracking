import React from 'react';
import app from '../../../firebase/base'
import styled from 'styled-components'

const Logout = (props) => {

    const handleLogout = () => {
        app.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
    }

    return (
        <LogoutButton onClick={handleLogout}>Sign out</LogoutButton>
    )
}

const LogoutButton = styled.button`
  :hover {
          background-color: #111;
          border: 1px solid #141e30;
      }
`;

export default Logout;

