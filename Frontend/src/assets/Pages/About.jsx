import React from "react";

const About = () => {
  return (
    <div className="flex flex-1 w-full min-h-[88vh]">
      <div className="flex-[0.1] px-3 self-center text-end border-r border-base-300"></div>
      <div className="flex-[0.9] flex justify-around">
        <div className="flex-[0.7] border-r border-base-300">
          <h1 className="text-4xl">About Us</h1>
          <hr />
          <div className="max-w-[600px] my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam doloremque iste? Laborum, itaque inventore doloribus suscipit laboriosam illum libero dolorem cum veritatis hic quo quisquam ratione esse maiores tempora.
            Aspernatur in nesciunt qui ullam fuga pariatur obcaecati consequuntur numquam nemo perspiciatis. Quo ea officiis iusto, nobis minima sit enim mollitia libero molestiae ipsa. Sunt vero iusto eius saepe ipsa.
            Soluta unde adipisci dolorum dolore at, nobis mollitia pariatur fugit facilis odio, obcaecati impedit earum aliquid saepe illo nisi deserunt reiciendis, vitae facere modi? Fugiat consequuntur cupiditate molestias sint voluptatibus.
          </div>
        </div>
        <div className="w-full flex-[0.2] flex flex-col justify-center items-center"></div>
      </div>
    </div>
  );
};

export default About;
