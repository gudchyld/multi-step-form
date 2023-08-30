

function ToggleButton({tenureMonthly, handleToggleClick}) {

  const elementStyle = {
    transform : tenureMonthly ? 'translateX(0px)': 'translateX(15px)'
  }
  return (
    <div className='toggleHolder w-9 rounded-3xl bg-blue-950 flex items-center p-0.5 pl-1'
    onClick={handleToggleClick}
    >
        <div className='toggle bg-slate-100 w-3 h-3 rounded-full '
        style={elementStyle}
        >

        </div>
    </div>
  )
}

export default ToggleButton