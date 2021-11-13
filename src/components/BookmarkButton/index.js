import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Button from "../Shared/Button";
import { MAX_STORAGE_COUNT } from "../../constants";

function BookmarkButton({ url }) {
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const bookmarkItems = Object.values(localStorage);

    if (bookmarkItems.includes(url)) {
      setIsRegistered(true);
    }
  }, []);

  const handleOnClick = () => {
    if (localStorage.length >= MAX_STORAGE_COUNT && !isRegistered) {
      return console.log("full bookmark storage");
    }

    setIsRegistered((prev) => !prev);

    if (isRegistered) {
      for (let i = 1; i <= MAX_STORAGE_COUNT; i++) {
        if (localStorage.getItem(i) === url) {
          localStorage.removeItem(i);
        }
      }
    } else {
      for (let i = 1; i <= MAX_STORAGE_COUNT; i++) {
        const item = localStorage.getItem(i);

        if (!item) {
          return localStorage.setItem(i, url);
        }
      }
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
