import React, { PureComponent } from 'react';
import styles from './FlexBox.module.scss';

export default class FlexBox extends PureComponent {
  state = {
    show: false,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  }
  handleChangeDirection = event => {
    const value = event.target.value;
    const boxContainer = document.getElementsByName('boxContainer')[0];
    boxContainer.style.flexDirection = (value);
    this.setState({ flexDirection: value })
  }
  handleChangeJustify = event => {
    const value = event.target.value;
    const boxContainer = document.getElementsByName('boxContainer')[0];
    boxContainer.style.justifyContent = (value);
    this.setState({ justifyContent: value })
  }
  handleChangeAlign = event => {
    const value = event.target.value;
    const boxContainer = document.getElementsByName('boxContainer')[0];
    boxContainer.style.alignItems = (value);
    this.setState({ alignItems: value })
  }
  handleShow = event => {
    this.setState({ show: true });
  }
  handleClose = event => {
    this.setState({ show: false });
  }
  render() {
    const { show, justifyContent, alignItems, flexDirection } = this.state;  
    return(
      <>
        <header>
          <h2 className={styles.title}>Flex Box</h2>
        </header>
        {show && <aside className={styles.modal}>
          <button className={styles.closeButton} onClick={this.handleClose}>X</button>
          <p className={styles.sampleCode}>
            .boxContainer &#123;<br/>
            display: flex;<br/>
            flex-direction: {flexDirection};<br/>
            justify-content: {justifyContent};<br/>
            align-items: {alignItems};<br/>
            width: 50%;<br/>
            padding: 2%;<br/>
            border: 4px white groove;<br/>
            &#125;
          </p>
        </aside>}
        <main className={styles.main}>
          <div className={styles.controls}>
            <div className={styles.flexDirection}>
                  <label className={styles.directionLabel}>Flex Direction</label>
                  <select className={styles.select} onChange={this.handleChangeDirection} name='flexDirection'>
                      <option value='row'>Row</option>
                      <option value='row-reverse'>Row-Reverse</option>
                      <option value='column'>Column</option>
                      <option value='column-reverse'>Column-Reverse</option>
                  </select>
              </div>
              <div className={styles.flexDirection}>
                  <label className={styles.directionLabel}>Justify Content</label>
                  <select className={styles.select} onChange={this.handleChangeJustify}>
                      <option value='flex-start'>Flex-Start</option>
                      <option value='flex-end'>Flex-End</option>
                      <option value='center'>Center</option>
                      <option value='space-around'>Space-Around</option>
                      <option value='space-between'>Space-Between</option>
                  </select>
              </div>
              <div className={styles.flexDirection}>
                  <label className={styles.directionLabel}>Align Items</label>
                  <select className={styles.select} onChange={this.handleChangeAlign}>
                      <option value='flex-start'>Flex-Start</option>
                      <option value='flex-end'>Flex-End</option>
                      <option value='center'>Center</option>
                  </select>
              </div>
          </div>
            <div className={styles.boxContainer} name='boxContainer'>
                <div className={styles.one}>1</div>
                <div className={styles.two}>2</div>
                <div className={styles.three}>3</div>
                <div className={styles.four}>4</div>
            </div>
            <button className={styles.codeButton} onClick={this.handleShow}>See the code</button>
            <p className={styles.description}>
                Flex box is everything you need to position elements how you&#39;d like. Play with some of the above controls to move these four boxes around.
            </p>
        </main>
      </>
    )
  }
}
