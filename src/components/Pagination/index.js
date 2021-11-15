import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { flexCenter } from "../../styles/mixin";
import { ISSUES_PER_PAGE, PAGES_TO_SHOW } from "../../constants";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const Pagination = ({ totalPosts, paginate }) => {
  const { page, issuesLength } = useSelector((state) => state.issue);

  const pageNumbers = [];
  const lastPage = Math.ceil(totalPosts / ISSUES_PER_PAGE);

  for (let i = page; i <= lastPage + 2; i++) {
    if (pageNumbers.length === PAGES_TO_SHOW) {
      break;
    }

    if (i - 2 > 0) {
      pageNumbers.push(i - 2);
    }
  }

  const moveToEndPage = (endPage, direction) => {
    const icon = direction === "Left" ? <FaAngleDoubleLeft /> : <FaAngleDoubleRight />;

    return <PaginationArrow onClick={() => paginate(endPage)}>{icon}</PaginationArrow>;
  };

  return (
    <PagesWrapper>
      {page > 3 ? moveToEndPage(1, "Left") : ""}
      {pageNumbers.map((number) => (
        <PageNumber key={number} onClick={() => paginate(number)}>
          {number === page ? <span>{number}</span> : number}
        </PageNumber>
      ))}
      {issuesLength / ISSUES_PER_PAGE > page + 5 ? moveToEndPage(page + 1, "Right") : ""}
    </PagesWrapper>
  );
};

const PagesWrapper = styled.ul`
  ${flexCenter}

  list-style: none;
  text-align: center;
  color: ${({ theme }) => theme.color.brown};
`;

const PageNumber = styled.li`
  ${flexCenter}

  font-size: 1rem;
  width: 30px;
  padding: 5px;
  margin-right: 1px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  span {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;

const PaginationArrow = styled.a`
  width: 20px;
  margin: 0 2px;
  border-radius: 50%;
  cursor: pointer;
`;

export default Pagination;
