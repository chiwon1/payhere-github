import React from "react";
import styled from "styled-components";

import { ISSUES_PER_PAGE } from "../../constants";

function IssuesList({ issues, showRepo }) {
  return (
    <Wrapper>
      {issues.map((issue, index) => {
        if (index > ISSUES_PER_PAGE) return;

        return (
          <IssueWrapper key={issue.number} href={issue.html_url}>
            {showRepo && <span>repo: {issue.repository_url.split("github.com/repos/")[1]}</span>}
            <span>{issue.title}</span>
          </IssueWrapper>
        );
      })}
      {!issues.length && <span>저장소가 없거나, 해당하는 저장소에 등록된 이슈가 없습니다.</span>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: auto;
`;

const IssueWrapper = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 12px 15px;
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.color.brown};
  border: 2px solid ${({ theme }) => theme.color.lightOrange};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  cursor: pointer;

  span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${({ theme }) => theme.color.brown};

    &:nth-child(2) {
      margin-top: 0.5rem;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.lightOrange};
    background-color: #ede0d4;
  }
`;

export default IssuesList;
