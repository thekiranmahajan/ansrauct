import React from "react";
import TestimonialCard from "../components/TestimonialCard";
import { testimonialData } from "../data/testimonialsData";

const TestimonialGrid = () => {
  return (
    <div className="max-w-[1600px] p-4 columns-1 gap-5 sm:columns-2 lg:columns-3">
      {testimonialData.map((testimonial) => (
        <div key={testimonial.id} className="mb-4 break-inside-avoid">
          <TestimonialCard {...testimonial} />
        </div>
      ))}
    </div>
  );
};

export default TestimonialGrid;
