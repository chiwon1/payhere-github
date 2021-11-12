import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MAX_STORAGE_COUNT } from "../../constants";

import Title from "../Shared/Title";

function Bookmark() {
  const [urlList, setUrlList] = useState([]);

  useEffect(() => {
    for (let i = 1; i <= MAX_STORAGE_COUNT; i++) {
      const item = localStorage.getItem(i);

      setUrlList((prev) => [...prev, item]);
    }
  }, []);

  return (
    <Wrapper>
      <BookmarkTitle>Bookmark</BookmarkTitle>
      {urlList.map((item, i) => {
        const [, , , owner, repository] = item.split("/");

        return (
          <a key={i} href={`${window.location.origin}/${owner}/${repository}/issues`}>
            Issues in {owner}'s {repository} repository
          </a>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 200px;
  padding: 10px;
  margin-top: 2rem;
  border: 2px solid ${({ theme }) => theme.color.lightOrange};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  a {
    display: block;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color.brown};
  }
`;

const BookmarkTitle = styled(Title)`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export default Bookmark;
