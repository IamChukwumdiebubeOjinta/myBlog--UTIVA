import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Single = () => {
  return (
    <div className="flex flex-1 w-full min-h-[88vh]">
      <div className="flex-[0.1] px-3 self-center text-end border-r border-base-300"></div>
      <div className="flex-[0.9] flex justify-around">
        <div className="flex-[0.7] border-r border-base-300">
          <h1 className="text-4xl">Title</h1>
          <hr />
          <div className="max-w-[600px] my-5">
          <figure className="">
          <img
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
            className="rounded-xl w-full"
          />
        </figure>
        <p className="mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic excepturi exercitationem sequi, illo sint commodi iure molestias molestiae voluptas tenetur quaerat nulla natus, fuga fugit possimus voluptatibus, enim deserunt ex. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quas animi incidunt culpa aspernatur quo veritatis sint commodi et atque rem, voluptas blanditiis debitis. Modi quos labore eveniet consequatur ducimus?</p>

        <div className="card-actions justify-between mt-5">
                <div className="flex items-center gap-[1.5px]">
                  <FontAwesomeIcon icon="fa-solid fa-eye" />
                  <div className="flex gap-1">
                    <span>50</span>
                    <span>Views</span>
                  </div>
                </div>
                
              </div>
          </div>
        
        </div>
        <div className="w-full flex-[0.2] flex flex-col justify-center items-center">
          <div className="w-full flex flex-col gap-4 justify-center items-center border-base-300">
            {/* Avatar */}
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src="https://placeimg.com/192/192/people" />
              </div>
            </div>
            <hr />
            <div className="w-full ">
              <table>
                <tbody>
                  {[
                    ['1', 'Name'],
                    ['2', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit']
                  ].map(([id, detail]) => (
                    <tr key={id} className='flex flex-col gap-5 items-center text-center w-full'>
                      <td className="w-[50%]">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
