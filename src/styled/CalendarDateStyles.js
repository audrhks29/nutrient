import styled from 'styled-components'

export const CalendarDateContainer = styled.div`
  width: 840px;
  margin:auto;
  border: 1px solid #000;
  .date_container{
    text-align: center;
    font-size:24px;
    padding: 30px;
  }
  .my_info_container{
    display: flex;
    justify-content:space-between;
    .my_info_left{
      display:flex;
      flex-direction: column;
      justify-content:space-between;
      .in_body{ 
        display: flex;
        input{
          width: 120px;
        }
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
    }
    
  }
  .today_kcal_record{
    width: 100%;
    display: flex;
    justify-content:space-around;
    /* border: 1px solid #000; */
    li{
      display:flex;
      flex-direction:column;
      text-align: center;
      position: relative;
      padding:30px 0;
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

export const EditContainer = styled.div`
  width: 1200px;
  margin:auto;
  .img_box{
    display: flex;
    flex-direction: column;
    img{
      width: 80px;
      height: 80px;  
      align-self:center;
    }
    span{
      align-self:center;
    }
  }
  .meal_container{
    border: 1px solid #000;
    display: flex;
    justify-content:space-between;
    .meal_list{
      width:250px;
      height:400px;
    }
  }
  .etc_container{
    border: 1px solid #000;
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
