function Login(props) {
  function clickClick(event) {
    alert(event.type);
  }
  return (
    <>
      <div>
        <h2> {props.link}</h2>
        <h3>{props.login}</h3>
        <button>Hi</button>
        <div>
          <button onClick={(event) => clickClick(event)}>Login</button>
        </div>
      </div>
    </>
  );
}

export default Login;
