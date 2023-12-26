import styled from 'styled-components'

export const StylePopup = styled.div`
background-color: #0a472e;
color: #fff;
position: relative;
padding: 15px;
height: 100%;
.logo{
    width :15rem;
    cursor: pointer;
}

.local-prize-container{
    margin: 3rem;
}
.borders{
    @media screen and (min-width:992px) {
        border-right: .2rem solid #fff;
    }
    
    border-right: none;
}
.win-text{
    font-size: 2.4rem;
    font-weight: 500;
}
.price-style{
    font-size: 9rem;
    font-weight: 600;
    line-height: 9rem;
}
.dollar-sign{
    font-size: 5.9rem;
    line-height: 9rem;
    margin-bottom: 0;
    font-weight: 600;
    margin-left:-2rem;
}
.paragraph{
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 6rem;
}
.choose-file{
    width: 80%;
    color: #fff;
    height: 48px;
    border: 1px solid #fff;
    padding: .6rem 2.4rem;
    font-size: 1.6rem;
    background-color: #0a472e;
}
.dateofbirth{
    font-size: 1.8rem;
}
.form-group{
    margin: 2rem 6rem;
}
.labels{
    text-align: left;
    font-size: 1.6rem;
}
.inputs{
    width:100%;
    height:5rem;
    font-size:1.6rem;
}
.btns{
    width: 17rem;
    background: #6fa871;
    font-weight: 700;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    padding: 1rem .5rem;
    margin-top: 3.5rem;
    border: 1px solid transparent;
    &:hover{
        background: #0a472e;
        border: 1px solid white;
    }
}

.btn-close{
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 5rem;
    border: .1rem solid #fff;
    background-color: #fff;
    position: absolute;
    top: -4rem;
    right: -2rem;
    opacity:.5;
    &:hover{
        color: #000;
        text-decoration: none;
       opacity: .75
    }
}
.msg{
    color: #fff;
    font-size: 1.4rem;
    text-align: center;
}
.fom-wrapper{
   display:flex;
   justify-content:center;
   align-items:center;

.circle{
    border:1pt solid;
    width:22px;
    height:22px;
    border-radius:20px;
    position:relative;
}

.line{
    border:1pt solid white;
    width:20%;
    background-color:white
}

.inner_circle{
    background-color:white;
    width:12px;
    height:12px;
    margin-top:4px;
    margin-left:3px;
    border-radius:20px;
}

.inners_circle{
    background-color:white;
    width:12px;
    height:12px;
    margin-top:1px;
    border-radius:20px;
}




}
`

export const CountryStateWrpper = styled.div`

.dateofbirth{
    text-align:center;
    font-size:20px;
}
text-align:center;


h1{
    font-size:2.2rem;
   margin-bottom:20px;

}
.form-group {
    select{
        background: transparent;
        .option{
            font-size:25px;
        }
    }
}



`

export const EmailWrpper = styled.div`

text-align:center;
margin-top:20px;

h1{
    font-size:2.1rem;
    margin-bottom:20px;

}

.width_full{
    width:425px;
    height:40px;
    background:transparent;
    border:1pt solid white;
    border-radius:5px;
    padding-left:10px;
    color:white;
    font-size:16px;
    margin-bottom:40px;

    @media screen and (max-width:600px) {
            width:280px;
    }

    @media screen and (min-width:768px) and (max-width:992px) {
        width:350px;
}

}

input{
    width:80%;
    height:40px;
    background:transparent;
    border:1pt solid white;
    border-radius:5px;
    padding-left:10px;
    color:white;
    font-size:16px;
}

`


export const EmailVerifyWrpper = styled.div`

text-align:center;
margin-top:20px;

h1{
    font-size:3rem;
   margin-bottom:20px;

    span{
    font-size:14px;

    }
    
}

input{
    width:80%;
    height:40px;
    background:transparent;
    border:1pt solid white;
    border-radius:5px;
    padding-left:10px;
    color:white;
    font-size:16px;
}

`