export const animateWIthGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  seconndTraget,
  animationProps
) => {
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut',
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: 'power2.inOut',
    },
    '<'
  );

  timeline.to(
    seconndTraget,
    {
      ...animationProps,
      ease: 'power2.inOut',
    },
    '<'
  );
};
