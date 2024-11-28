import React from 'react'
type SectionHeadingProps = {
    children: React.ReactNode;
};
export default function SectionHeading({ children }:SectionHeadingProps) {
  return (
    <h2 className='text-3xl capitalize mb-8 font-bold text-center'>{children}</h2>
  )
}
