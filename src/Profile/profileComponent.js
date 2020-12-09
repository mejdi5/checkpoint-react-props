import React from 'react';
import PropTypes from "prop-types";

const profileComponent = props =>{

    const {fullName,
           bio, 
           profession,
           handleAlert,
           children} = props;
    
     return (
    <div>
        <p> fullName : {fullName} </p>
        <p> bio : {bio} </p>
        <p> profession : {profession} </p>
        <button onClick= {() => handleAlert(`my name is ${fullName}`)}>Alert Click</button>
        {children}
      
    </div>
     )
    }

    profileComponent.defaultProps = {
        fullName: "User Name",
        bio: "User Bio",
        profession: "User Profession",
        
    }

    profileComponent.propTypes = {
        fullName: PropTypes.string.isRequired,
        bio: PropTypes.string,
        profession: PropTypes.string.isRequired,
        handleAlert: PropTypes.func.isRequired
      };

    export default profileComponent;
    