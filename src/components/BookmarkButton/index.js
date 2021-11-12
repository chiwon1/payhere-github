import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Button from "../Shared/Button";
import { MAX_STORAGE_COUNT } from "../../constants";

function BookmarkButton({ url }) {
  const [isRegistered, setIsRegistered] = useState(false);
  const bookmarkCount = localStorage.length;

  useEffect(() => {
    for (let i = 1; i <= bookmarkCount; i++) {
      if (localStorage.getItem(i) === url) {
        setIsRegistered(true);
      }
    }
  }, []);

  const handleOnClick = () => {
    if (bookmarkCount >= MAX_STORAGE_COUNT) {
      return console.log("full bookmark storage");
    }

    setIsRegistered((prev) => !prev);

    if (isRegistered) {
      for (let i = 1; i <= bookmarkCount; i++) {
        if (localStorage.getItem(i) === url) {
          localStorage.removeItem(i);
        }
      }
    } else {
      localStorage.setItem(bookmarkCount + 1, url);
    }
  };

  return (
    <StyledButton handleClick={() => handleOnClick()}>
      {isRegistered ? <span>Remove from Bookmark</span> : <span>Add to Bookmark</span>}
    </StyledButton>
  );
}

const StyledButton = styled(Button)`
  position: absolute;
  right: 0;
  width: auto;
  padding: 8px 12px;

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.darkgrey};
  border-radius: 5px;
`;

export default BookmarkButton;
