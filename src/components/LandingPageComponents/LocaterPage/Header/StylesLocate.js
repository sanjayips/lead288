import styled from "styled-components";
import { ViewMoreBtn } from "../../Globals/Globals";

export const LocateMainContainer = styled.div`
text-align: center;
margin-top:4rem;

p{
  font-size:16px;
}

.list_data{
  margin-top:20px;
  cursor:pointer;
  margin-bottom:20px;
  margin-left:-10px;
  ul{
    display:flex;
    list-style:none;
    padding:0px;
    margin:0px;

    @media only screen and (max-width: 600px) {
       display:block;
    }

    li{
      width:50%;
      height:40px;
      font-size:20px;
      border:1pt solid ;
      margin-left:10px;
      display:flex;
      justify-content:center;
      align-items:center;
      background-color:#DC3545;
      border-radius:5px;
      color:white;
      .icons{
        font-size:20px;
      }
    }
  }
}

p{
  font-size:16px;
}

h2{
  font-size: 2.5rem;
}
h3{
font-size: 1.5rem;
font-style: normal;
font-weight: 500;
line-height: 2.4rem;
letter-spacing: 0em;
color: #333333;
opacity: 0.8;
text-align: center;
padding: 0 5rem;
 @media screen and (max-width:480px) {
  padding: 0 0;
 }
}
p{
  margin-top: 1rem;
font-size: 1rem;
font-style: normal;
font-weight: 400;
line-height: 2rem;
text-align:justify;
letter-spacing: 0em;
color: #828282;
opacity: 0.8;

}
.map{
  width: 100%;
  height:62.5rem;
  position: relative;
}
.location-icon{
  height: 2rem;
  width: 2rem; 
}

@media only screen and (max-width: 480PX) {
  P{
    padding: 0 0;
text-align: start;

  }

}
.cards{
    background: #FFFFFF; 
    box-shadow: 0px 0px 1.7rem rgba(0, 0, 0, 0.07);
    border-radius: 10px;
    margin-bottom:1.5rem ;
    position: absolute;
    top: 7rem;
    right: 5rem;
    }
    .card-data{
    padding:1.5rem 1.5rem ;
}
.para{
    font-weight: normal;
    font-size: 13px;
    line-height: 89.5%;
     color: #828282;
     text-align: left;
}
.text1{
    font-size: 1.3rem;
   line-height: 89.5%;
   color: #828282;
   padding-bottom:1.8rem ;
}
.icon{
    height:1.6rem ;
    width:1.6rem ;
    
}
.icon-text{
    margin-left:1rem ;
    margin-right:1rem ;
}
h6{
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 89.5%;
    color: #242424;
    padding-bottom:1.2rem ;
}
.current-location-card{
  position: absolute;
    top: 9rem;
    right: 5rem;
    font-size: 1.4rem;
    background-color: #FFFFFF;
    color: black;
    padding: 2rem;
}
`
export const LocateUsButton = styled(ViewMoreBtn)`
  margin-top: 15px;
`