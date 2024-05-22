
export const SignOutButton = () => {
    function signOut(){
        console.log("sign out");
    }
  return (
    <button onClick={signOut}>Sign out</button>
  )
}
