import type { FC } from 'react';
import { styled } from 'styled-components';

const VisuallyHiddenBox = styled.section`
  width: 1px;
  height: 1px;
  position: absolute;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: react(0, 0, 0, 0);
  border: 0;
`;

export const VisuallyHidden: FC = () => {
  return (
    <VisuallyHiddenBox>
      <h1>Ensuring Accessibility: How Our Project Supports All Users</h1>
      <article>
        <p>
          At <strong>[DreamSpace Interiors]</strong>, we are committed to
          creating an inclusive digital experience for all users, including
          those with disabilities. Accessibility is a core value of our design
          and development process, and we strive to ensure that our website and
          services are usable by everyone.
        </p>

        <h2>What We&apos;ve Done to Ensure Accessibility</h2>
        <ul>
          <li>
            <strong>Screen Reader Compatibility:</strong> Our website is
            optimized for screen readers, providing text descriptions and
            navigational aids for visually impaired users. We use ARIA
            (Accessible Rich Internet Applications) landmarks and roles to help
            screen readers interpret and navigate our content.
          </li>
          <li>
            <strong>Keyboard Navigation:</strong> We&apos;ve ensured that all
            interactive elements, including forms, buttons, and links, are fully
            accessible via keyboard navigation. You should be able to use tab,
            arrow keys, and other keyboard commands to interact with our site.
          </li>
          <li>
            <strong>Color Contrast:</strong> To improve readability for users
            with visual impairments, we adhere to high-contrast color schemes
            and provide alternative text for images. This ensures that our
            content is clear and legible.
          </li>
          <li>
            <strong>Responsive Design:</strong> Our site is designed to be
            responsive, meaning it adjusts seamlessly to different screen sizes
            and orientations. Whether you&apos;re using a smartphone, tablet, or
            desktop, you&apos;ll have a consistent and accessible experience.
          </li>
          <li>
            <strong>Text Alternatives:</strong> We provide text alternatives for
            all non-text content, including images, videos, and other multimedia
            elements. These alternatives ensure that users who rely on screen
            readers or have low vision can understand and engage with our
            content.
          </li>
          <li>
            <strong>Regular Testing:</strong> We conduct regular accessibility
            testing with a range of tools and real user feedback to identify and
            address any potential issues. Our goal is to continuously improve
            and enhance accessibility.
          </li>
        </ul>

        <h2>How You Can Provide Feedback</h2>

        <p>
          Thank you for being a part of <strong>[Your Project Name]</strong>. We
          are dedicated to ensuring that everyone can enjoy our services and
          navigate our site with ease. Together, we can make the web a more
          accessible place for everyone.
        </p>
      </article>
    </VisuallyHiddenBox>
  );
};
