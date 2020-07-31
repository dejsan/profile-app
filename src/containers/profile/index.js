import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    requestProfileData,
    playProfileSound
} from '../../actions/profile'
import './style.css'
import ProfileInfo from '../../components/profileInfo'

class Profile extends React.Component {
    componentDidMount() {
        const { requestProfileData } = this.props
        requestProfileData()
    }
    render() {
        const { profileData, isRequestProfileData, playProfileSound } = this.props
        return (
            <div id="profile">
                <div className="header">
                    <h1>Profile</h1>
                </div>
                <div className="content">
                    <ProfileInfo profileData={profileData} isRequestProfileData={isRequestProfileData} playSound={playProfileSound}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ profile }) => ({
    profileData: profile.profileData,
    isRequestProfileData: profile.isRequestProfileData
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            requestProfileData,
            playProfileSound
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)
