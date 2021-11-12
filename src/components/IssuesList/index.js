import React from "react";
import styled from "styled-components";

import { MAX_STORAGE_COUNT } from "../../constants";

function IssuesList({ list }) {
  return (
    <>
      {list.map((issue, index) => {
        if (index > MAX_STORAGE_COUNT) return;

        return (
          <IssueWrapper key={issue.number} href={issue.html_url}>
            <span>{issue.title}</span>
          </IssueWrapper>
        );
      })}
    </>
  );
}

const IssueWrapper = styled.a`
  flex-direction: column;
  padding: 10px 20px;
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.color.brown};
  border: 2px solid ${({ theme }) => theme.color.lightOrange};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export default IssuesList;
