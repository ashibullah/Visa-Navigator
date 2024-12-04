import { useContext } from "react";
import { FcGoogle } from "react-icons/fc"; 
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const {setUser, createUserUsingGoogle , emailSignup , updateUserProfile} = useContext(AuthContext);
  const handleSignInGoogle = () =>{
    createUserUsingGoogle()
    .then((result)=> {
          const user = result.user;
          setUser(user);
          console.log(user);
          // IdP data available using getAdditionalUserInfo(result)
          // ...
      }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
          console.log(error,errorCode,errorMessage,email,credential)
    })
    
  }

  const handleSignUpWithEmail = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const imageUrl = e.target.imageUrl.value;
    // console.log(name,email,password,imageUrl);
    emailSignup(email,password)
    .then(result =>{
      const user = result.user;
      setUser(user);
      console.log(result);
      updateUserProfile({ displayName: name, photoURL: imageUrl })
                    .then(() => {
                    //    console.log(user); 
                        navigate("/"); 
                    })
                    .catch((err) => {
                        alert("Error updating profile:", err);
                    });


    })
    .then("")

  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm px-6 py-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSignUpWithEmail}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name" name="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email" name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              placeholder="example@email.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password" name="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="url"
              id="imageUrl" name="imageUrl"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black"
              placeholder="https://example.com/your-image.jpg"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 text-white bg-black rounded-md shadow-sm hover:bg-gray-900 focus:ring-2 focus:ring-offset-2 focus:ring-black"
          >
            Sign Up
          </button>
        </form>
        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500">Or</span>
          </div>
        </div>
        <button onClick={handleSignInGoogle}
          className="mt-6 w-full flex items-center justify-center py-2 px-4 text-gray-700 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
        >
          <FcGoogle className="w-5 h-5 mr-2" /> 
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
