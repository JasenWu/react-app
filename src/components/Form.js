/**
 * Created by gellert on 2017/2/16.
 */
import React from 'react'

export default class Form extends React.Component{
    render(){
        const listItem = this.props.listItem.map((val, index) =>
            <label key={index}>
                {val.label}:
                <input type={val.type}/>
            </label>
        )
        return(
            <form>
                {listItem}
            </form>
        )
    }
}