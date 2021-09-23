import {GoogleLogin} from 'react-google-login';

const onSuccess = (res) => {
    console.log(`Login Success, current user: ${res.profileObj}`)
}

const onFailure = (res) => {
    console.log('Login Failed, error:', res)
}

const LoginPage = () => {
    return (
        <div className="login-page">
            <h1>Login via Google</h1>
            <div className="login-module">
                <GoogleLogin buttonText="Login"
                    clientId="563730714368-svtf57kjr4iej1og2edi8qsd2vvhbjg1.apps.googleusercontent.com"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            </div>
        </div>
    )
}

export default LoginPage;