import React from 'react'
import githubLogo from '../../assets/githubLogo.png'
import googleLogo from '../../assets/googleLogo.png'
import {GoogleAuthProvider, getAuth, signInWithPopup, signOut} from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../../redux/bazaazSlice'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin = (e) =>{
        e.preventDefault();
        signInWithPopup(auth, provider).then ((result)=>{
            const user = result.user;
            dispatch(addUser({
                _id: user.uid,
                name: user.displayName,
                email: user.email,
                image: user.photoURL,
            }))
            setTimeout(()=>{
                navigate('/')
            }, 1500)
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    const handleSignOut =()=>{
        signOut(auth)
        .then(()=>{
            toast.success("log out Successfully");
            dispatch(removeUser());
        }).catch((error)=>{
            console.log(error)
        })
    }

    return (
        <div className='font-job'>
            <div>

            </div>
            <div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
                <div className='w-full flex items-center justify-center gap-10'>
                    <div onClick={handleGoogleLogin} className='text-base w-60 h-12 tracking-wide border-[1px] rounded-md flex items-center justify-center gap-2 hover:border-orange-600  hover:text-orange-600 cursor-pointer duration-500'>
                        <img className='w-8' src={googleLogo} alt="" />
                        <span>Sign in with Google</span>
                    </div>
                    <button onClick={handleSignOut} className='bg-gray-700 text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 hover:text-orange-600  duration-500'>Sign Out</button>
                </div>
                <div className='w-full flex items-center justify-center gap-10'>
                    <div className='text-base w-60 h-12 tracking-wide border-[1px] rounded-md flex items-center justify-center gap-2 hover:border-orange-600  hover:text-orange-600 cursor-pointer duration-500'>
                        <img className='w-8' src={githubLogo} alt="" />
                        <span>Sign in with Github</span>
                    </div>
                    <button className='bg-gray-700 text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 hover:text-orange-600  duration-500'>Sign Out</button>
                </div>

            </div>
            <ToastContainer
                position='top-left'
                autoClose={2000}
                hideProgressBar={false}
                newesonTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='dark'
            />
        </div>
    )
}

export default Login
