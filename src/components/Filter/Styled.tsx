import { Input } from "antd"
import styled from "styled-components"
const StyledInput = styled(Input)`
    color: "red";
    width: ${(props) => props.width};
    background: #f5f5f5;

    .ant-input{
        background:#f5f5f5;
    }

    .ant-input-affix-wrapper{
        background:#f5f5f5;
        border:none;
        box-shadow: none;
    }
    .ant-input-group-addon{
        background:transparent;
        border:none;
    }

    .ant-select-clear,.ant-picker-clear{
        background:#f5f5f5;
    }
    
`
const Styled = {
    StyledInput
}
export default Styled;