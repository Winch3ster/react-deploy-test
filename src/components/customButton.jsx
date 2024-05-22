
const customButton = () => {
    function sayHello(){
        console.log("Hello World");
    }
  return (
    <button onClick={sayHello}></button>
  )
}

export default customButton