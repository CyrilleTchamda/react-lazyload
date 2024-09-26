import React, { Component } from 'react';
import Lazyload from '../../src/';
import Operation from '../components/Operation';

export default class Image extends Component {
  render() {
    return (
      <div className="wrapper">
        <Operation type="image" noExtra />
        <div className="widget-list image-container">
          <Lazyload throttle={200} height={300}>
            <img src="https://cdn.textstudio.com/output/sample/normal/8/4/9/4/hello-logo-73-4948.png" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="https://cdn.textstudio.com/output/sample/normal/8/4/9/4/hello-logo-73-4948.png" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="https://cdn.textstudio.com/output/sample/normal/8/4/9/4/hello-logo-73-4948.png" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="https://cdn.textstudio.com/output/sample/normal/8/4/9/4/hello-logo-73-4948.png" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="https://cdn.textstudio.com/output/sample/normal/8/4/9/4/hello-logo-73-4948.png" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="https://cdn.textstudio.com/output/sample/normal/8/4/9/4/hello-logo-73-4948.png" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="https://cdn.textstudio.com/output/sample/normal/8/4/9/4/hello-logo-73-4948.png" />
          </Lazyload>
          <Lazyload throttle={200} height={300}>
            <img src="http://ww1.sinaimg.cn/mw690/62aad664jw1f2nxw1kcykj20u01hcn9p.jpg" />
          </Lazyload>
        </div>
      </div>
    );
  }
}

