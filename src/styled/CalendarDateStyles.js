import styled from 'styled-components'
import { listStyle } from './CommonStyles'

export const CalendarDateContainer = styled.div`
  width: 1200px;
  margin:auto;
  .date_container{
    ${listStyle}
    text-align: center;
    font-size:24px;
  }
  .my_info_container{
    ${listStyle}
    display: flex;
    justify-content:space-between;
  }
  .today_kcal_record{
    width: 100%;
    display: flex;
    justify-content:space-around;
    border-radius: 30px;
    box-shadow:3px;
    padding:30px;
    ${listStyle}
    li{
      display:flex;
      flex-direction:column;
      text-align: center;
      position: relative;
        img{
          width: 100px;
          height: 100px;
        }
        span{
          margin-top:5px;
        }
        em{
          position: absolute;
          top: 60%;
          left: 50%;
          transform: translate(-50%,-50%);

        }
    }
  }
`

export const MyInfoRightContainer = styled.div`
  .my_nutrient{
    display: flex;
    flex-direction: column;
    .nutrient_list{
      display: flex;
      font-size:14px;
      align-items:center;
      justify-content:space-between;
      height: 40px;
      img{
        display: block;
        width: 30px;
        height: 30px;
      }
      span{
        margin:0 10px;
        width: 60px;
      }
      .graph_out{
        width: 300px;
        height: 20px;
        border: 1px solid #000;
      }
    }
  }
`

export const MyInfoLeftContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:space-between;
  width: 40%;
  .in_body{ 
    display: flex;
    justify-content:space-around;
    text-align: center;
    li{ 
      p{
        margin-top:5px;
      }
    }
    /* input{
      width: 120px;
      &:focus{
        background-color: #f00;
      }
    } */
  }
  .today_kcal{
    display: flex;
    justify-content:space-around;
    li{
      display: flex;
      flex-direction: column;
      text-align: center;
      img{
        width: 100px;
        height: 100px;
      }
    }
  }
`