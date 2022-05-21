const styles = {
  button: `bg-[#6188FF] px-5 py-2 rounded-lg mt-3`,
}

function Button({ label, onPress }) {
  return (
    <button className={styles.button} onClick={onPress}>
      {label}
    </button>
  )
}

export default Button
