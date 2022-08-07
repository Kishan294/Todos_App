import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: 'fixed',
    height: "30px",
    bottom: "0",
    width: "100%",
    textAlign: "center"
  }
  return (
    <footer className='bg-dark text-light' style={footerStyle}>
      <p className="text-center">Copyright &copy; Kishan</p>
    </footer>
  )
}