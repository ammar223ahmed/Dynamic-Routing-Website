// import { Spinner } from "@nextui-org/react";
// import { onAuthStateChanged } from "firebase/auth";
// import { createContext, useEffect, useState } from "react";
// // import { auth } from "../utils/firebase";

// export const AuthContext = createContext();
// // console.log("Auth Context==>", AuthContext)
// function AuthContextProvider ({children}){
//     const [user , setUser] = useState({
//         isLogin: false,
//         userInfo: {},  
//      }); 
//     const [loading, setLoading] = useState(true);
 
//      function onAuthChanged(user) {
//         if(user){
//             setUser({isLogin : true , userInfo : {
//                 name :user.displayName,
//                 photoUrl : user ?.photoURL,
//                 email : user?.email 
//             }});
//         }else{
//             setUser({isLogin : false , userInfo: {}});

//         }
//          setLoading(false);
//       }
    
//       useEffect(() => {
//         const subscriber =  onAuthStateChanged(auth ,  onAuthChanged);
//         return subscriber; // unsubscribe on unmount
//       }, []);

      
//     return(
//       <AuthContext.Provider value={(user , setUser)}>
//        { loading ?
//        <div className="w-full h-50 flex justify-center items-center">
//         <Spinner />
//        </div>
//        :
//        children
//        }
//         </AuthContext.Provider>
//     );
// }

// export default AuthContextProvider;