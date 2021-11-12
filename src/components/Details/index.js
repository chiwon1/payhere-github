import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { setIssues } from "../../redux/issueReducer";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { flexCenter, fullWidthAndHeight } from "../../styles/mixin";

import Title from "../Shared/Title";
import IssuesList from "../IssuesList";
import BookmarkButton from "../BookmarkButton";
import { searchGithubIssues } from "../../api/github";

function Details() {
  const location = useLocation();
  const dispatch = useDispatch();

  const [, owner, repository, _] = location.pathname.split("/");
  const { list } = useSelector((state) => state.issues);

  const repositoryURL = `https://github.com/${owner}/${repository}`;

  useEffect(() => {
    (async () => {
      if (list.length === 0) {
        const data = await searchGithubIssues(repositoryURL);

        dispatch(setIssues(data));
      }
    })();
  }, []);

  return (
    <Wrapper>
      <DetailsTitle>Issues</DetailsTitle>
      <RepositoryTitle>
        Repository: <a href={repositoryURL}>{repository}</a>
        <BookmarkButton url={repositoryURL} />
      </RepositoryTitle>
      <IssuesList list={list} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flexCenter}
  ${fullWidthAndHeight}

  flex-direction: column;

  > * {
    width: 600px;
  }
`;

const DetailsTitle = styled(Title)`
  fontsize: 90%;
  margin: 0 0 1.6rem;
`;

const RepositoryTitle = styled.h3`
  position: relative;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.color.brown};

  a {
    color: ${({ theme }) => theme.color.red};
  }

  &:after {
    content: "";
    display: block;
    width: 50%;
    padding-bottom: 0.3rem;
    border-bottom: 2px solid ${({ theme }) => theme.color.brown};
  }
`;

export default Details;
