import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div >
      <h1>About Us</h1>
      <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <h2>Tujuan</h2>
      <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <h2>Kenapa kami?</h2>
      <ul>
        <li>lorem ipsum dolor sit amet</li>
        <li>lorem ipsum dolor sit amet</li>
        <li>lorem ipsum dolor sit amet</li>
      </ul>
      <br />
      <Link to="/" className='underline'>Kembali ke Beranda</Link>
    </div>
  )
}

export default About