/** @format */

import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import JsonData from "./bed.json";
import BedCarousel from "./bedCarousel";

function Bed() {
  const [posts, setPosts] = useState(JsonData.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 12;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = posts
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((post) => {
      return (
        <div className='col-md-3 mb-3' key={post.id}>
          <div className='card fade-in one'>
            <div className='card-body'>
              <div className='homeCImg'>
                {/* <Link to='/product'>
                  <img src={post.image} className='bookImg' alt='bookImg' />
                </Link> */}
                <BedCarousel />
              </div>
              <p className='order_no'>12345678 </p>
              <div className='cover__cat'>
                <div className='price__wrap'>
                  <p className='bed__price'>{post.price}</p>
                </div>
                <div className='price__wrap'>
                  <p className='price'>Dimension - </p>
                  <p className='bed__dimension'>{post.dimension}</p>
                </div>
                <div className='price__wrap'>
                  <p className='price'>Weight - </p>
                  <p className='bed__weight'>{post.weight}</p>
                </div>
                <div className='price__wrap'>
                  <p className='price'>Wax - </p>
                  <p className='bed__weight'>{post.wax}</p>
                </div>
                <div className='price__wrap'>
                  <p className='price'>Color - </p>
                  <p className='bed__weight'>{post.color}</p>
                </div>
                <div className='price__wrap'>
                  <p className='price'>Category - </p>
                  <p className='bed__weight'>{post.category}</p>
                </div>
                <div className='price__wrap'>
                  <p className='price'>Description - </p>
                  <p className='bed__weight'>{post.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  const pageCount = Math.ceil(posts.length / usersPerPage);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    scrollToTop();
  };
  return (
    <div className='App container'>
      <p className='cat__heading'>Beds</p>
      <div className=' py-4'>
        <div className='row cat__blk'>{displayUsers}</div>
        <div className='reviewsPaginationWrap'>
          <div className='categoryBlk pages-Blk'>
            <div className='pagesWrap'>
              <p>Pages &nbsp;</p>
              <p>{pageNumber + 1} &nbsp;</p>
              <p>of &nbsp;</p>
              <p>{pageCount}</p>
            </div>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bed;
