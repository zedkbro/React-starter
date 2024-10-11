function Login(props) {
  const Login = (x) => {
    // event.preventDefault();
    alert(x);
  };

  const logHi = (event) => {
    event.preventDefault();

    console.log("HI");
  };
  return (
    <>
      <div>
        <h2> {props.link}</h2>
        <button onClick={(event) => logHi(event)}>Hi</button>
        <div>
          <button onClick={() => Login(5)}>Login</button>
        </div>
      </div>
    </>
  );
}

export default Login;
