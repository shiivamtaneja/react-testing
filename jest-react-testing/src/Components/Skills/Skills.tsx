import React from "react";
import { SkillsProps } from "./Skills.types";

export const Skills = (props: SkillsProps) => {
  const { skills } = props;

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  )
}
