const Switch = (props) => {

  return (
    <>
      <div className="switch-container">

        <button onClick={() => {
          props.setSwitch(true)
        }} className={props.switch ? "switch-1 on" : "switch-1"}>
          ON
        </button>

        <button onClick={() => {
          props.setSwitch(false)
        }} className={props.switch ? "switch-2" : "switch-2 on"}>
          OFF
        </button>

      </div>
    </>
  )
};

export default Switch;