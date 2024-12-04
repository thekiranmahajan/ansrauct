import React from "react";
import TestimonialCard from "../components/TestimonialCard";
import { testimonialData } from "../data/testimonialsData";

const TestimonialGrid = () => {
  return (
    <div className="max-w-[1400px] columns-1 gap-6 p-4 px-2 pb-20 pt-10 sm:columns-2 sm:px-16 md:pb-28 lg:columns-3">
      {testimonialData.map((testimonial) => (
        <div key={testimonial.id} className="mb-4 break-inside-avoid">
          <TestimonialCard {...testimonial} />
        </div>
      ))}
    </div>
  );
};

export default TestimonialGrid;
