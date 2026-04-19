import React from "react";

const PageHeader = ({ ...props }) => {
  return (
    <p
      {...props}
      className={`${props.className} text-bp-black font-anek text-[2rem] md:text-[4rem] leading-tight font-semibold`}
    />
  );
};

const SectionHeader = ({ ...props }) => {
  return (
    <p
      {...props}
      className={`${props.className} text-bp-black font-anek text-[21px] md:text-[3rem] leading-tight font-[550]`}
    />
  );
};

const ParagraphTitle = ({ ...props }) => {
  return (
    <p
      {...props}
      className={`${props.className} text-bp-blue font-poppins text-[1rem] md:text-[1.5rem] font-medium leading-tight uppercase`}
    />
  );
};

const ParagraphText = ({ ...props }) => {
  return (
    <p
      {...props}
      className={` ${props.className} text-bp-black font-poppins text-[0.75rem] md:text-[1rem] leading-normal`}
    />
  );
};

const ButtonText = ({ ...props }) => {
  return (
    <p
      {...props}
      className={` ${props.className} text-bp-blue font-poppins text-[0.75rem] md:text-[1rem] font-semibold leading-normal`}
    />
  );
};

const Annotation = ({ ...props }) => {
  return (
    <p
      {...props}
      className={` ${props.className} text-bp-black font-sketch text-[0.75rem] md:text-[1rem] leading-tight`}
    />
  );
};

const Landing = ({ ...props }) => {
  return (
    <p
      {...props}
      className={` ${props.className} text-bp-blue font-anek text-[62px] md:text-[122px] tracking-tight leading-none`}
    />
  );
};

export {
  PageHeader,
  SectionHeader,
  ParagraphTitle,
  ParagraphText,
  ButtonText,
  Annotation,
  Landing,
};
