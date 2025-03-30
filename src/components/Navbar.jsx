import React from 'react';


function Navbar({
  scrollToAboutMe,
  scrollToSkills,
  scrollToEducation,
  scrollToProjects,
  scrollToBlogs,
  scrollToFooter,
}) {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <button onClick={scrollToAboutMe}>About Me</button>
        </li>
        <li>
          <button onClick={scrollToSkills}>Skills</button>
        </li>
        <li>
          <button onClick={scrollToEducation}>Education</button>
        </li>
        <li>
          <button onClick={scrollToProjects}>Projects</button>
        </li>
        <li>
          <button onClick={scrollToBlogs}>Blogs</button>
        </li>
        <li>
          <button onClick={scrollToFooter}>Footer</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;