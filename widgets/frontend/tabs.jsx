

import React from "react"; 
import TabHeader from './tab_header';

class Tabs extends React.Component {

  constructor (props) {
    super(props); 
    this.state = { activeIndex: 0};
    this.changeActiveIdx = this.changeActiveIdx.bind(this);
  } 

  changeActiveIdx(idx) {
    return () => {
      this.setState({ activeIndex: idx});  
      // debugger  
    }
  }

  render(){ //come back here  and unerstand line 32
    let tabsRender = this.props.tabs.map((tabInfo, idx) => {
      return (<li onClick={this.changeActiveIdx(idx)}><TabHeader header={tabInfo.header}></TabHeader></li>)
    })

    return (
      <div>
        <ul >Tabs
        {
          tabsRender 
        }
          <p>{this.props.tabs[this.state.activeIndex].content}</p> 
        </ul>
      </div>
    )
  }

}

export default Tabs;