// memo sips re-rendering a component if its props are not changed

import { memo } from "react";

function Login(props) {
  function clickClick(a, event) {
    alert(a);
  }
  return (
    <>
      <div>
        <h2> {props.link}</h2>
        <h3>{props.login}</h3>
        <button>Hi</button>
        <div>
          <button onClick={(event) => clickClick(5, event)}>Login</button>
        </div>
      </div>
    </>
  );
}

export default memo(Login);
