import styled from 'styled-components';

export const StyleHemp = styled.div`

.top-categories{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 26px;
    margin-bottom: 15px;
    /* border-bottom: 1px solid #DADADA; */
}

.top-categories h1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #414141;
}

.top-categories .slick-btns{
display: flex;
align-items: center;
gap:15.23px
}

.top-categories .slick-btns .next-btn,
.top-categories .slick-btns .prev-btn{
    height: 33px;
    width: 33px;
    background: #FFFFFF;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border: none;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: fit-content;
        height: auto;
    }
} 

.hemp-slick .cards{
    border-radius: 8px;
    height: 176px;
    position: relative;
    border:none;
}

.hemp-slick .card-body{
    width: 100%;
    height: 100%;
    padding: 0 !important;
    border-radius: 8px;
}

.hemp-slick .card-body .cardimage{
    height:100%;
    width: 100%;
    border-radius: 8px;
    top: 0;
    left: 0;
}

.hemp-slick .card-body .overlay{
    top: 0;
    left: 0;
    padding: 22px 6px;
    background: linear-gradient(180deg, rgba(251, 250, 250, 0) -18.18%, #042315 100%);
    opacity: 0.8;
    height: 100%;
    width: 100%;
    border-radius: 8px;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    flex-direction: column;
    
}

.hemp-slick .card-body .overlay h1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    /* HEMP 06 */

}

.hemp-slick .card-body .overlay span{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    text-align: center;

    /* HEMP 06 */

    color: #FFFFFF;
}


.viewToday-slick{
    margin-top: 3.3rem;
    .slick-next{
    right: 5px;
}
        
    .slick-prev{
    left: -20px;
   
  
        }
    }
 .IconImage{
    width: 5rem;
    height: 5rem;
    margin: 2.5rem 4rem;
 }
 
.imgHeading{
    width: 3.4rem;
    height: 3.9rem;
    margin-bottom: 1rem;
    
}
h1{
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 5.4rem;
    color: #242424;
    @media screen and (max-width:480px) {
    font-size: 2.6rem;
    line-height: 3.4rem;

}
}
h2{
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: #242424;
    margin-top: -1;
    margin-bottom: 2.7rem;
}
.cards{
    margin-right :1rem;
    height :15rem;
    background: #FFFFFF;
    border: 1px solid #F0F0F0;
    box-sizing: border-box;
    border-radius:.3rem;
    margin-bottom: 1.5rem;
}
.box{
    height: 11rem;
    background: #F0F0F0;
}
`;
export const HempBox = styled.div`
 height: 11rem;
    background: #F0F0F0;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.25rem;
`