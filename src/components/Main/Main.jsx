import React from "react";
import Profile from "../Profile/Profile";
import Button from "../Button/Button";
function Main() {
  return (
    <div className="flex flex-col-reverse xl:flex-row justify-between mx-5 mt-16">
      <div className="ml-8 flex justify-between my-8 xl:flex-col xl:my-0 xl:w-1/4">
        <div className="mx-8 xl:mx-0">
          <Profile student={true} name="Ridha"/>
          <Profile student={false} name="Ms. Kaur"/>
        </div>
        <div>
          <Button />
        </div>
      </div>

      <div className="w-full mx-8">
        <iframe
            src="https://www.youtube.com/embed/Vm7H0VTlIco?si=RuFp1LEEYclgIIhM"          
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-[35rem] md:w-[45rem] h-[20rem] mx-auto xl:w-full xl:h-[40rem]"
        ></iframe>
      </div>
    </div>
  );
}

export default Main;
