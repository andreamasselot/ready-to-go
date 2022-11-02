const Switch = (props) => {

  return (
    <>
      <div className="switch-container">

        <button onClick={() => {
          props.setSwitch(true)
        }} className={props.setSwitch ? "switch-1" : "on"}>
          ON
        </button>

        <button onClick={() => {
          props.setSwitch(false)
        }} className="switch-1">
          OFF
        </button>

      </div>
    </>
  )
};

export default Switch;