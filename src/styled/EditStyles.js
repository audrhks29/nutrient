import styled from 'styled-components'
import { listStyle } from './CommonStyles'

export const EditPopupContainer = styled.div`
  z-index:100;
  position:fixed;
  top:50%;
  left:50%;
  width:1100px;
  height:800px;
  transform:translate(-50%,-50%);
  .editPopup_inner{
    background-color: #fff;
    ${listStyle};
    margin-top:0px; 
    position:relative;
    display:flex;
    height:100%;
    justify-content:space-between;
  }
`

export const MyMealsContainer = styled.div`
  margin-top:0px;
  width:350px;
  position: relative;
  font-size:14px;
  h3{
    font-weight:bold;
    font-size:20px;
    text-align: center;
    padding:20px 0;
  }
  ul{
    li{
      display: flex;
      text-align: center;
      padding: 5px 0;
      .s1{
        width:100px;
        text-align-last: left;
      }
      .s2{width:80px;}
      .s3{width:70px;}
      .s4{width:100px;}
      button{
        width:40px;
      }
    }
    li:nth-child(1){
      font-size:16px;
      font-weight:bold;
      padding:10px 0;
      border-bottom: 1px solid #ddd;
    }
  }
  .kcalSum{
    position: absolute;
    bottom:0;
    right:0;
    border-top: 1px solid #ddd;
    width: 100%;
    text-align: right;
    padding:20px 0;
    strong{
      font-size:18px;
      font-weight:bold;
    }
  }
`

export const SearchMealsContainer = styled.div`
  margin-top:0px;
  width:700px;
  input{
    width:600px;
    height:30px;
  }
  button{
    width:10%;
  }
  table{
    width:600px;
    table-layout:fixed;
    th{
      font-weight:600;
      padding:10px;
    }
    td{
      text-align: center;
      padding:5px 10px;
    }
    td:nth-child(1){
      text-align:left;
      width:100px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`

export const SearchMealPopupContainer = styled.div`
  ${listStyle};
  margin-top:0px;
  z-index:100;
  position:absolute;
  top:50%;
  left:50%;
  background-color: #fff;
  width:50%;
  height:70%;
  transform: translate(-50%, -50%);
  .searchMealPopup_inner{
    width:100%;
    height:100%;
    position: relative;
    h3{
      font-size:20px;
      font-weight:bold;
      margin-bottom:20px;
    }
    .nutInfo{
      margin-bottom:20px;
      li{
        span:nth-child(1){
          width:100px;
          display: inline-block;
        }
        padding :5px 20px;
      }
    }
    .btnBox{
      width:320px;
      position:absolute;
      bottom:0;
      left:50%;
      transform: translateX(-50%);
      button{
        width:150px;
        height:40px;
        border: 1px solid #000;
      }
      button:nth-child(2){
        margin-left:10px;
      }
    }
  }
`