import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: var(--light-navy);
  border: 1px solid var(--lightest-navy);
  color: var(--green);
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: ${({ visible }) => (visible ? 'auto' : 'none')};
  transform: translateY(${({ visible }) => (visible ? '0' : '10px')});
  transition: var(--transition);

  &:hover,
  &:focus {
    transform: translateY(-3px);
    background-color: var(--green-tint);
  }

  @media (max-width: 600px) {
    right: 15px;
    bottom: 15px;
  }
`;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <StyledButton
      visible={visible}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      tabIndex={visible ? 0 : -1}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5">
        <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </StyledButton>
  );
};

export default ScrollToTop;
