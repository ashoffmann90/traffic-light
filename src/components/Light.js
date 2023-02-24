function Light({ color, activeLight }) {
  return (
    <div
      className="light"
      id={activeLight === color ? `${color}-light-on` : `${color}-light-off`}
    ></div>
  )
}

export default Light