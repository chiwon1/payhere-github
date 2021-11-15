import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { flexCenter } from "../../styles/mixin";
import { ToastContainer } from "react-toastify";

import Title from "../Shared/Title";
import Button from "../Shared/Button";
import IssuesList from "../IssuesList";
import Pagination from "../Pagination";
import BookmarkButton from "../BookmarkButton";

import { notifyError } from "../Notification";
import { fetchIssues, resetState } from "../../store/issue/issuesSlice";

function DetailsPage({ history, location }) {
  const dispatch = useDispatch();

  const [, owner, repository] = location.pathname.split("/");
  const repositoryURL = `https://github.com/${owner}/${repository}`;

  const { error } = useSelector((state) => state.issue);
  const { list, issuesLength } = useSelector((state) => state.issue);

  useEffect(() => {
    (async () => {
      if (list.length === 0) {
        dispatch(fetchIssues({ url: repositoryURL, page: 1 }));
      }
    })();
  }, []);

  useEffect(() => {
    if (error) {
      notifyError("해당하는 저장소가 없거나, 에러가 발생하였습니다. 잠시 후에 다시 시도하세요.");
    }
  }, [error]);

  const paginate = async (newPage) => {
    dispatch(fetchIssues({ url: repositoryURL, page: newPage }));
  };

  return (
    <Wrapper>
      <DetailsTitle>Issues</DetailsTitle>
      <RepositoryTitle>
        Repository: <a href={repositoryURL}>{repository}</a>
        <BookmarkButton url={repositoryURL} />
      </RepositoryTitle>
      <IssuesList issues={list} />
      <Pagination totalPosts={issuesLength} paginate={paginate} />
      <HomeButton
        handleClick={() => {
          history.push("/");
          dispatch(resetState());
        }}>
        <a>Home</a>
      </HomeButton>
      <ToastContainer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${flexCenter}

  flex-direction: column;
  position: relative;

  > * {
    width: 600px;
  }
`;

const DetailsTitle = styled(Title)`
  position: relative;
  margin: 0 0 1.6rem;
  fontsize: 90%;
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

const HomeButton = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 0;
  width: auto;
  height: 30px;
  padding: 8px 12px;

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.darkgrey};
  border-radius: 5px;
`;

export default DetailsPage;
