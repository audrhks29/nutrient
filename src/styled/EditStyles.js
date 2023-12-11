import styled from 'styled-components'
import { listStyle } from './CommonStyles'

export const EditContainer = styled.div`
  width: 1200px;
  margin:auto;
  position: relative;
  .img_box{
    display: flex;
    flex-direction: column;
    img{
      width: 80px;
      height: 80px;  
      align-self:center;
    }
    span{
      margin-top:5px;
      margin-bottom:20px;
      align-self:center;
    }
  }
  .meal_container{
    ${listStyle}
    margin-top:0;
    display: flex;
    justify-content:space-between;
    position:relative;
    .meal_list{
      width:250px;
      height:400px;
    }
  }
  .etc_container{
    ${listStyle}
    display: flex;
    justify-content:space-between;
    align-items:center;
    ul{
      display: flex;
    }
    .etc_list{
      width: 250px;
      text-align:center;
      
    }
  }
`

export const BtnEditContainer = styled.div`
  position:absolute;
  bottom:30px;
  left:50%;
  transform:translateX(-50%)
`

export const EditPopupContainer = styled.div`
  ${listStyle};
  margin-top:0px;
  position:fixed;
  top:50%;
  left:50%;
  background-color: #fff;
  width:1200px;
  height:800px;
  transform:translate(-50%,-50%);
  display:flex;
  justify-content:space-around;
  .closeBox{
    cursor: pointer;
  }
`

export const MyMealsContainer = styled.div`
  ${listStyle};
  margin-top:0px;
  width:300px;
`

export const SearchMealsContainer = styled.div`
  ${listStyle};
  margin-top:0px;
  input{
    width:90%;
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
      padding:3px 10px;
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