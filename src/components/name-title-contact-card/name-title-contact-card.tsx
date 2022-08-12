import { FC } from 'react'

const NameTitleContactCard: FC = () => (
  <div className='card w-96 bg-base-100 shadow-xl bg-opacity-75 backdrop-blur-lg'>
    <div className='card-body'>
      <h1 className='card-title'>Sascha Grüßhaber</h1>
      <p>Senior Full-Stack Engineer</p>
      <hr />
      <p>
        <a href='mailto:sascha@gruesshaber.eu'>sascha@gruesshaber.eu</a>
      </p>
      <p>
        <a href='https://www.gruesshaber.eu' target='_blank' rel='noreferrer'>
          https://gruesshaber.eu
        </a>
      </p>
    </div>
  </div>
)

export default NameTitleContactCard
