import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Button from "../Shared/Button";
import { MAX_STORAGE_COUNT, STORAGE_KEY_BOOKMARK } from "../../constants";
import { notifyError } from "../Notification";

function BookmarkButton({ url }) {
  const [isRegistered, setIsRegistered] = useState(false);
  const { error } = useSelector((state) => state.issue);

  const bookmarkList = JSON.parse(localStorage.getItem(STORAGE_KEY_BOOKMARK));

  useEffect(() => {
    if (bookmarkList?.includes(url)) {
      setIsRegistered(true);
    }
  }, []);

  const handleOnClick = () => {
    if (error) {
      return notifyError("해당 저장소는 저장할 수 없습니다.");
    }

    if (bookmarkList?.length >= MAX_STORAGE_COUNT && !isRegistered) {
      return notifyError("4개까지 저장할 수 있습니다.");
    }

    setIsRegistered((prev) => !prev);

    if (isRegistered) {
      const newList = bookmarkList.filter((item) => item !== url);

      return localStorage.setItem(STORAGE_KEY_BOOKMARK, JSON.stringify(newList));
    }

    if (bookmarkList) {
      const newList = [...bookmarkList, url];

      return localStorage.setItem(STORAGE_KEY_BOOKMARK, JSON.stringify(newList));
    }

    const newList = [url];
    localStorage.setItem(STORAGE_KEY_BOOKMARK, JSON.stringify(newList));
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
