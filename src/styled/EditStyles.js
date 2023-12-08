import styled from 'styled-components'

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