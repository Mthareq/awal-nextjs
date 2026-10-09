import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className="p-4">
      <h1 className='text-center'>Home</h1>
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
      <Link to="/about" className='underline'>About me</Link>
    </div>
  )
}

export default Home;