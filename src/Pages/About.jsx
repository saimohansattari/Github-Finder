
function About() {
  return (
    <div>
        <h1 className="text-6xl mb-4">
            Github Finder
        </h1>
        <p className='mb-4 text-2xl font-light'>
        App to search Github users and display their info. This is part of my React Front To Back  course and is the most up to date version of this project.


          <a href='https://www.udemy.com/course/modern-react-front-to-back/'>
            {' '}
            "React Front To Back"
          </a>{' '}
         
          <strong>
            <a href='https://https://github.com/saimohansattari.com'> SAI_MOHAN_SATTARI</a>
          </strong>
          .
        </p>
        <p className='text-lg text-gray-400'>
          Version <span className='text-white'>1.0.0</span>
        </p>
        <p className='text-lg text-gray-400'>
          Layout By:
          <a className='text-white' href='https://linkedin.com/in/sai-mohan-sattari-275924247'>
            SAIMOHANSATTARI
          </a>
        </p>
    </div>
  )
}

export default About