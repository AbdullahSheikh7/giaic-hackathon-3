import FaqQuestion from "@/components/FaqQuestion";
import React from "react";

const Page = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-5xl text-2xl font-medium title-font mb-2 text-gray-900">
              Questions Look Here
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the
            </p>
          </div>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 ">
            <FaqQuestion
              question="What Types Of Chairs Do You Offer?"
              answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
            />
            <FaqQuestion
              question="How Can We Get In Touch With you?"
              answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
            />
            <FaqQuestion
              question="Do Your Chairs Come With A Warranty?"
              answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
            />
            <FaqQuestion
              question="What Will Be Delivered And When?"
              answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
            />
            <FaqQuestion
              question="Can I Try A Chair Before Purchasing?"
              answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
            />
            <FaqQuestion
              question="How Do I Clean And Maintain My Comforty Chair?"
              answer="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
