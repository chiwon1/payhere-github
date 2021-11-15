import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Title from "../Shared/Title";
import Button from "../Shared/Button";
import Pagination from "../Pagination";
import IssuesList from "../IssuesList";
import { notifyError } from "../Notification";

import { STORAGE_KEY_BOOKMARK } from "../../constants";
import { fetchBookmarkIssues, resetState } from "../../store/issue/issuesSlice";
import { ToastContainer } from "react-toastify";

function BookmarkPage({ history }) {
  const dispatch = useDispatch();
  const { list, issuesLength } = useSelector((state) => state.issue);

  const urlList = JSON.parse(localStorage.getItem(STORAGE_KEY_BOOKMARK));
  const repositoryList = [];

  for (let i = 0; i < urlList?.length; i++) {
    try {
      const [_, owner, repository] = new URL(urlList[i]).pathname.split("/");

      repositoryList.push(`repo:${owner}/${repository}`);
    } catch {
      notifyError("해당하는 저장소가 없거나, 에러가 발생하였습니다. 잠시 후에 다시 시도하세요.");
    }
  }

  const repositoryUrlQuery = repositoryList.join("+");

  useEffect(() => {
    (async () => {
      dispatch(fetchBookmarkIssues({ url: repositoryUrlQuery, page: 1 }));
    })();
  }, []);

  const paginate = async (newPage) => {
    dispatch(fetchBookmarkIssues({ url: repositoryUrlQuery, page: newPage }));
  };

  return (
    <Wrapper>
      <DetailsTitle>Issues 모아보기</DetailsTitle>
      <IssuesList issues={list} showRepo />
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

export default BookmarkPage;
