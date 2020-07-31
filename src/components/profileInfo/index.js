import React from 'react'
import profileImage from '../../assets/img/profile.png';

const ProfileInfo = props => {
    const { isRequestProfileData, profileData, playSound } = props
    const { firstname, lastname, sex, email } = profileData

    return (
        <div className="container col-md-4" id="profileInfo">
            {
                isRequestProfileData ?
                    <div className="row justify-content-md-center">
                        <div className="col-md-12">
                            <h2>Loading...</h2>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="row justify-content-md-center" id="image">
                            <div className="col-md-12">
                                <img src={profileImage} alt="profile" onClick={() => playSound()}/>
                            </div>
                        </div>
                        <hr/>
                        <div className="row justify-content-md-center" id="content">
                            <div className="col-md-12">
                                <h2>{firstname} {lastname}</h2>
                                <p>{sex}</p>
                                <p>{email}</p>
                            </div>
                        </div>
                    </div>
            }

        </div>
    )
}

export default ProfileInfo