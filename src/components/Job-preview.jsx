import React from 'react'
import Header from './Header'

function JobPreview() {
  return (
    <div className="w-full min-h-screen bg-blue-50 flex flex-col gap-2 items-center py-20">
      <Header />
      <div className="w-[90%] lg:w-3/4 xl:w-3/5 2xl:w-2/5 bg-white shadow py-8 px-4 md:px-6 flex flex-col items-start">
          <h1 className='text-xl font-semibold text-gray-800'>Video Editor required for longterm contract (1-2 years)</h1>
          {/* <button className="bg-blue-400 px-6 py-1.5 text-white font-medium text-md rounded-full mt-2">Apply</button> */}
          <hr className='text-gray-400 w-[90%] mt-4 mb-2' />
          <p className='text-xl font-medium flex items-center gap-1'>HC Global <img src="./check.png" width={14} alt="check=mark" /></p>
          <p className='text-sm font-light'>Islamabad</p>
          <p className='text-xl font-medium mt-8'>Job Description</p>
          <hr className='text-gray-400 w-[90%] my-2' />
          <p className='text-md font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptas eveniet debitis blanditiis minus temporibus totam ut provident eius placeat odit quam, enim repellendus ab nesciunt quis iure esse voluptatum!
          Adipisci eum ut eveniet iusto deleniti maiores eligendi, reiciendis fugiat sunt quod aut corrupti molestiae atque, placeat earum sequi repudiandae ad obcaecati assumenda quam odio porro. Voluptate impedit commodi nesciunt!
          Pariatur quis omnis libero. Illum at,
          rem, repellendus harum aperiam explicabo quae eveniet similique asperiores voluptates, esse autem magnam. Odit vel magnam eius nisi architecto, ab iusto cumque ducimus doloribus.
          Dolores illum ipsa accusantium aperiam pariatur. Harum excepturi placeat, inventore perferendis dicta architecto aut quaerat beatae, magnam fuga amet natus facilis eligendi suscipit veritatis rerum. Praesentium alias perferendis ab id?
          Quas facilis repudiandae aperiam explicabo consequuntur voluptatum laudantium deleniti sequi unde eum suscipit, natus illo possimus quasi quos cupiditate, odio fugiat velit. Quibusdam, perferendis! Ea debitis temporibus vel non eum.
          Vero temporibus sunt vitae natus saepe earum recusandae error iure, sit assumenda omnis, ex quod ducimus hic cum obcaecati illum. Deserunt, sequi harum amet nam voluptates natus recusandae nesciunt? Tempora?</p>
          <div className=' flex flex-col gap-1.5 xl:gap-3 mt-8 '>
          <p className='text-xl border-b border-gray-400 pr-1 font-medium'>Requirements & Incentives</p>
            <span className=' text-sm'><b>Education:</b> Intermediate</span>
            <span className=' text-sm'><b>Experience:</b> 2 Years minimum</span>
            <span className=' text-sm'><b>Age:</b> 20-35 years</span>
            <span className=' text-sm'><b>Salery:</b> 50k</span>
            <span className=' text-sm'><b>Commission:</b> Based on project</span>
           
            </div>
      </div>
      <div className="buttons w-[90%] lg:w-3/4 xl:w-3/5 2xl:w-2/5 flex gap-2 justify-center mt-2">
        <button className="bg-blue-400 px-4 py-1 text-white font-medium w-1/2  h-10 text-lg rounded-md">Go Back</button>
        <button className="bg-blue-400 px-4 py-1 text-white font-medium w-1/2  h-10 text-lg rounded-md">Proceed to Apply</button>
      </div>
    </div>
  )
}

export default JobPreview
