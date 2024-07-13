import React from "react";
import styled from "styled-components";

const StyledPortfolio = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: #fff;
  padding: 16px 14px;
  border-radius: 16px;
  .image-wrapper img {
    width: 80px;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    grid-column-start: 1;
    grid-column-end: 2;
    margin: 0 auto;
  }
  .port-content {
    grid-column-start: 2;
    grid-column-end: 5;
    .port-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .top-content {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        h3 {
          font-size: 16px;
          color: #2a282f;
          margin-right: 4px;
          font-weight: bold;
        }
        span {
          font-size: 14px;
          color: #a8a6ac;
        }
      }
      .port-top-img {
        width: 16px;
        height: 4px;
        color: #a8a6ac;
      }
    }
    .port-mid {
      margin: 8px 0;
      p {
        font-size: 14px;
      }
    }
    .port-bottom {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .bottom-item {
        display: flex;
        align-items: center;
        margin-right: 10px;
        font-size: 13px;

        img {
          margin-right: 3px;
          width: 23px;
          height: 16px;
        }
      }
    }
  }
`;

const Portfolio = () => {
  return (
    <StyledPortfolio>
      <div className="image-wrapper">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="port-content">
        <div className="port-top">
          <div className="top-content">
            <h3>Jerome Bell</h3>
            <span>· 2 week ago</span>
          </div>
          <img className="port-top-img" src="./other.svg" alt="" />
        </div>
        <div className="port-mid">
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div className="port-bottom">
          <div className="bottom-item">
            <img src="./heart.svg" alt="" />
            <span>816</span>
          </div>
          <div className="bottom-item">
            <img src="./Mark.svg" alt="" />
            <span>877</span>
          </div>
          <div className="bottom-item">
            <img src="./Chat.svg" alt="" />
            <span>185</span>
          </div>
        </div>
      </div>
    </StyledPortfolio>
  );
};

export default Portfolio;
