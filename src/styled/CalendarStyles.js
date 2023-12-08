import styled from 'styled-components'
import { listStyle } from './CommonStyles'

export const CalendarContainer = styled.div`
  width: 900px;
  margin: auto;
  .year_month_container{
    ${listStyle}
    margin-top:0px;
    text-align: center;
    font-size:24px;
    padding: 30px;
    position: relative;
    .move_month_btn{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items:center;
      i{
        cursor: pointer;
      }
    }
  }
  .week_date_container{
    ${listStyle}
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    .week_box{
      text-align:center;
      height: 30px;
      line-height:30px;
      font-weight:600;
    }
    .date_box{
      height: 120px;
      padding: 10px;
      text-align:right;
      cursor: pointer;
      &:hover{
       background-color: #ff0; 
      }
    }
    .date_box, .week_box{
      border: 1px solid #000;
      border-top:none;
      border-right:none;
      width: 120px;
    }
    .week_box:nth-child(7n),
    .date_box:nth-child(7n)
    {
      border-right:1px solid black;
    }
    .week_box:nth-child(7n+1),
    .date_box:nth-child(7n+1){
      border-left:1px solid black;
    }
    .week_box:nth-child(-n+7){
      border-top:1px solid black;
    }
    .date_box:nth-child(n+43){
      border-bottom:1px solid black;
    }
  }
  .text_bold{ font-weight:bold }
`