import styled from 'styled-components'

export const CalendarContainer = styled.div`
  width: 840px;
  margin: auto;
  .year_month_container{
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
    display: flex;
    flex-direction:row;
    flex-wrap:wrap;
    outline: 1px solid #000;
    padding:0px;
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
    .week_box:nth-child(7n+1),
    .date_box:nth-child(7n+1){
      border-left:none;
    }
    .week_box:nth-child(-n+7),
    .date_box:nth-child(-n+7){
      border-top:none;
    }
    .date_box:nth-child(n+43){
      border-bottom:none;
    }
  }
  .text_bold{ font-weight:bold }
`