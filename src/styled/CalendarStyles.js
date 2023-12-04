import styled from 'styled-components'

export const CalendarContainer = styled.div`
  width: 1050px;
  margin: auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  
  .selected_year_month{
    text-align: center;
    font-size:24px;
    padding: 30px;
  }
  .date_container{
    display: flex;
    flex-wrap: wrap;
    border: 1px solid #000;
    box-sizing:border-box;
    .date_box{
      border-right:none;
      border-bottom:none;
      
      width: 150px;
      height: 150px;

    }
    .date_box:nth-child(7n+1){border-left:none;}
    .date_box:nth-child(7n+1){border-left:none;}
    .date_box:nth-child(-n+7){border-top:none;}
  }
  .text_bold{ font-weight:bold }
`