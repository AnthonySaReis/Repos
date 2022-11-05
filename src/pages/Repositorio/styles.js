import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Loading = styled.div`
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Container = styled.div`
    max-width: 700px;
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
    padding: 30px;
    margin: 80px auto;
`;

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;

    img{
        width: 180px;
        border-radius:20% ;
        margin: 20px 0;
    }

    h1{
        font-size: 30px;
        color: #0d2636;
    }

    p{
        margin-top: 5px;
        font-size: 14px;
        color: #000;
        text-align: center;
        line-height: 1.4;
        max-width: 400px;
    }
`;

export const BackButton = styled(Link)`
    border: 0;
    outline: 0;
    background: transparent;
`;

export const IssuesList = styled.ul`
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid #eee;
    list-style: none;

    li{
      display:flex;
      padding: 20px 15px;

    }

    & + li{
        margin-top: 15px;
    }

    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid #0d2636;
    }

    div{
        flex:1;
        margin-left: 15px;

        p{
            margin-top: 10px;
            font-size: 12px;
            color: #000;
        }
    }

    strong{
        font-size: 15px;

    a{
        text-decoration: none;
        color: #222;
        cursor: pointer;
        transition: all 0.3s;
        &:hover{
            color: #0071db;
        }
    }

    span{
        background: #222;
        color: #fff;
        border-radius: 6px;
        font-size: 10px;
        font-weight: 600;
        padding: 3px 8px;
    
        
        & + span{
            margin-left: 10px;
        }

}
}
    
`;

export const PageAction = styled.div`

    display:flex;
    align-items: center;
    justify-content: space-between;

    button{
        outline: 0;
        border: 0;
        background: #222;
        color: #fff;
        padding: 5px 10px;
        border-radius: 6px;

        &:disabled{
            cursor: not-allowed;
            opacity: 0.5;
        }
    }
`;

export const PageFilter = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-around;

    button{
        background: #ddd;
        border: none;
        padding: 8px 10px;
        border-radius: 6px;
        margin-bottom: 15px;
        transition: all 0.5s;

    &:hover{
        background: #28aec9;
        color: #FFF;
    }
    }
`;