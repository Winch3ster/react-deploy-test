
export const StupidButton = () => {
  function sayStupid(){
    console.log("Damn you stupid!");
  }
    return (
    <div>
        <h1>Click this stupid button</h1>
        <button onClick={sayStupid}>Click me stupid!</button>
    </div>
  )
}
